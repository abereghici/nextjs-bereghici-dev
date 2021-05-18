const rushConfiguration = require('./get-rush-configuration')();

function findPackages(files) {
  const maxFolderDepth = rushConfiguration.projectFolderMaxDepth;

  const packagePaths = new Set(
    files.map(file => {
      return file.split('/').slice(0, maxFolderDepth).join('/');
    })
  );

  return rushConfiguration.projects
    .map(project =>
      packagePaths.has(project.projectRelativeFolder)
        ? project.packageName
        : null
    )
    .filter(Boolean);
}

module.exports = findPackages;
