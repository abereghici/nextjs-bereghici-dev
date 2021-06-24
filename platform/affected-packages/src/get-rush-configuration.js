const { RushConfiguration } = require('@microsoft/rush-lib');

function getRushConfiguration() {
  return RushConfiguration.loadFromDefaultLocation({
    startingFolder: process.cwd(),
  });
}

module.exports = getRushConfiguration;
