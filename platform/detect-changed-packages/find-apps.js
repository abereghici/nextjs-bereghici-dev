const getDependencyGraph = require('./get-dependency-graph');
const findPackages = require('./find-packages');
const rushConfiguration = require('./get-rush-configuration')();

function isAppPackage(packageName) {
  return (
    rushConfiguration.projects.find(
      project => project.packageName === packageName
    )?.reviewCategory === 'apps'
  );
}

function getChangedProjects(changedPackages, dependencyGraph) {
  const projects = new Set();

  changedPackages.forEach(pkg => {
    if (isAppPackage(pkg)) {
      projects.add(pkg);
    } else {
      rushConfiguration.projects.forEach(project => {
        if (
          project.reviewCategory === 'apps' &&
          dependencyGraph[pkg].dependents.includes(project.packageName)
        ) {
          projects.add(project.packageName);
        }
      });
    }
  });
  return projects;
}

function findApps(files) {
  const changedPackages = findPackages(files);
  const dependencyGraph = getDependencyGraph();

  return getChangedProjects(changedPackages, dependencyGraph);
}

module.exports = findApps;
