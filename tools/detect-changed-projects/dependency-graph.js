function ensureAndGetDependencyGraphEntry({ packageName, dependencyGraph }) {
  if (dependencyGraph[packageName] === undefined) {
    dependencyGraph[packageName] = { dependencies: [], dependents: [] };
  }

  return dependencyGraph[packageName];
}

function addDependencies({
  dependencies = {},
  dependencyGraph,
  project,
  rushConfiguration,
}) {
  const dependencyGraphEntry = ensureAndGetDependencyGraphEntry({
    dependencyGraph,
    packageName: project.packageName,
  });
  Object.keys(dependencies).forEach(dependencyName => {
    if (
      rushConfiguration.projectsByName.has(dependencyName) &&
      !project.cyclicDependencyProjects.has(dependencyName)
    ) {
      dependencyGraphEntry.dependencies.push(dependencyName);

      const dependencyEntry = ensureAndGetDependencyGraphEntry({
        dependencyGraph,
        packageName: dependencyName,
      });
      dependencyEntry.dependents.push(project.packageName);
    }
  });
}

function processPackage({ dependencyGraph, project, rushConfiguration }) {
  [
    project.packageJson.dependencies,
    project.packageJson.devDependencies,
    project.packageJson.peerDependencies,
  ].forEach(dependencies =>
    addDependencies({
      dependencies,
      dependencyGraph,
      project,
      rushConfiguration,
    })
  );
}

function makeDependencyGraph(rushConfiguration) {
  const dependencyGraph = {};
  rushConfiguration.projects.forEach(project => {
    processPackage({
      dependencyGraph,
      project,
      rushConfiguration,
    });
  });
  return dependencyGraph;
}

module.exports = makeDependencyGraph;
