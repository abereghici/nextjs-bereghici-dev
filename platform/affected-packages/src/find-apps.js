const findPackages = require('./find-packages');
const rushConfiguration = require('./get-rush-configuration')();

function isAppPackage(packageName) {
  return (
    rushConfiguration.projects.find(
      project => project.packageName === packageName
    )?.reviewCategory === 'apps'
  );
}

function findApps(files) {
  const affectedPackages = findPackages(files);

  return affectedPackages.filter(pkg => isAppPackage(pkg));
}

module.exports = findApps;
