const { RushConfiguration } = require('@microsoft/rush-lib');
const paths = require('../../config/paths');

const rushConfiguration = RushConfiguration.loadFromDefaultLocation({
  startingFolder: process.cwd(),
});

function checkIsAppPackage() {
  const packageName = require(paths.appPackageJson).name;

  console.log(packageName);

  return (
    rushConfiguration.projects.find(
      project => project.packageName === packageName
    )?.reviewCategory === 'apps'
  );
}

module.exports = checkIsAppPackage;
