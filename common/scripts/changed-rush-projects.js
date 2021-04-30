const { spawnSync } = require("child_process");
const process = require("process");

let rushJson;

eval(
  "rushJson=" +
    require("fs").readFileSync(require("path").join(__dirname, "../../rush.json")).toString()
);

const ignoreList = [
  // gets modified in the pipeline it seems
  "path-to-file",
];

const debug = true;

function main(command) {
  const previousSuccessfulBuildExists = /[0-9a-f]{7,40}/.test(
    process.env.GIT_PREVIOUS_SUCCESSFUL_COMMIT || ""
  );

  if (process.env.BRANCH_NAME === "master" && !previousSuccessfulBuildExists) {
    // master is brand new
    return command;
  }

  // if no successful builds exist, use the last diverging commit from master
  const diffSource = previousSuccessfulBuildExists
    ? process.env.GIT_PREVIOUS_SUCCESSFUL_COMMIT
    : spawnSync("git", ["merge-base", "HEAD", "master"]).stdout.toString().trim();

  let files = spawnSync("git", ["--no-pager", "diff", "--name-only", "--no-renames", diffSource])
    .stdout.toString()
    .split("\n")
    .filter((file) => !ignoreList.includes(file));

  if (debug) {
    process.stderr.write(
      "changed files since last commit hash " +
        (previousSuccessfulBuildExists
          ? "(from a previous successful build) "
          : "(from last ancestor commit to master) ") +
        diffSource +
        " are:\n" +
        files.join("\n") +
        "\n\n"
    );
  }

  const changedProjects = files.reduce(
    (projects, file) => {
      rushJson.projects.forEach((project) => {
        if (!projects[project.packageName] && file.startsWith(project.projectFolder)) {
          projects[project.packageName] = project;
        }
      });

      return projects;
    },
    process.env.BRANCH_NAME === "master"
      ? // need to build this project's Dockerfile before we deploy in master branch
        {
          "@bereghici/client-app": rushJson.projects.find(
            (p) => p.packageName === "@bereghici/client-app"
          ),
        }
      : {}
  );

  if (debug) {
    process.stderr.write("changed projects:\n" + Object.keys(changedProjects).join("\n") + "\n\n");
  }

  if (Object.keys(changedProjects).length === 0) {
    // don't run the script at all.
    return `echo "skipping ${command} because no projects have changed from commit hash ${diffSource}"`;
  }

  return [
    command,
    ...Object.keys(changedProjects).flatMap((projectName) => {
      return ["--to", projectName];
    }),
  ].join(" ");
}

module.exports = main;