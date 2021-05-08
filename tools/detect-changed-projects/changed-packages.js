function mapChangedFilesToPackages(files, rushConfiguration) {
  const maxFolderDepth = rushConfiguration.projectFolderMaxDepth;

  const packagePaths = new Set(
    files.map(file => {
      return file.split('/').slice(0, maxFolderDepth).join('/');
    })
  );

  return rushConfiguration.projects
    .map(project => {
      if (packagePaths.has(project.projectRelativeFolder)) {
        return project.packageName;
      }
      return null;
    })
    .filter(Boolean);
}

function getChangedPackages(changedFiles, rushConfiguration) {
  const changedPackages = mapChangedFilesToPackages(
    changedFiles,
    rushConfiguration
  );

  return changedPackages;
}

module.exports = getChangedPackages;
