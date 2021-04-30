const { spawnSync } = require('child_process');

const MAIN_BRANCH = 'main';

function getChangedFiles() {
  return spawnSync('git', [
    '--no-pager',
    'diff',
    '--name-only',
    '--no-renames',
    MAIN_BRANCH,
  ])
    .stdout.toString()
    .split('\n')
    .filter(Boolean);
}

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

function getChangedPackages(rushConfiguration) {
  const changedFiles = getChangedFiles();

  const changedPackages = mapChangedFilesToPackages(
    changedFiles,
    rushConfiguration
  );

  return changedPackages;
}

module.exports = getChangedPackages;
