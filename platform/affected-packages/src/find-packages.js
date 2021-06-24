const rushConfiguration = require('./get-rush-configuration')();
const getDependencyGraph = require('./get-dependency-graph');

function findPackages(files) {
  if (!Array.isArray(files)) {
    return [];
  }

  const minFolderDepth = rushConfiguration.projectFolderMinDepth;

  const packagePaths = new Set(
    files.map(file => {
      return file.split('/').slice(0, minFolderDepth).join('/');
    })
  );
  const dependencyGraph = getDependencyGraph();

  const packages = rushConfiguration.projects
    .map(project =>
      packagePaths.has(project.projectRelativeFolder)
        ? [
            project.packageName,
            ...dependencyGraph[project.packageName].dependents,
          ]
        : null
    )
    .filter(Boolean);

  return [...new Set(packages.flat())];
}

module.exports = findPackages;
