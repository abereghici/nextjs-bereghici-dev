const findApps = require('./find-apps');
const findPackages = require('./find-packages');

const types = ['packages', 'apps'];

function detectAffectedPackages(files, type) {
  if (!types.includes(type)) {
    throw new Error(`Unknown type' ${type}`);
  }

  const packages = type === 'apps' ? findApps(files) : findPackages(files);
  return Array.from(packages).toString();
}

module.exports = detectAffectedPackages;
