const process = require('process');
const minimist = require('minimist');

const findApps = require('./find-apps');
const findPackages = require('./find-packages');

function getOptions() {
  const argv = minimist(process.argv.slice(2));
  const files = argv._;
  const type = argv['type'] || 'apps';
  return { files, type };
}

function detectChangedPackages() {
  const { files, type } = getOptions();

  const packages = type === 'apps' ? findApps(files) : findPackages(files);

  return Array.from(packages).toString();
}

process.stdout.write(detectChangedPackages());
