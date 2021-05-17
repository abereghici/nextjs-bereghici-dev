const process = require('process');
const { RushConfiguration } = require('@microsoft/rush-lib');

const getDependencyGraph = require('./dependency-graph');
const getChangedPackages = require('./changed-packages');

const args = process.argv.slice(2);

const changedFiles = (args[0] || '').split(',');

const rushConfiguration = RushConfiguration.loadFromDefaultLocation({
  startingFolder: process.cwd(),
});

const changedPackages = getChangedPackages(changedFiles, rushConfiguration);
const dependencyGraph = getDependencyGraph(rushConfiguration);

function isAppPackage(packageName) {
  return (
    rushConfiguration.projects.find(
      project => project.packageName === packageName
    )?.reviewCategory === 'apps'
  );
}

function getChangedProjects() {
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
  return Array.from(projects).toString();
}

process.stdout.write(getChangedProjects());
