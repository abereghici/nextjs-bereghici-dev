const createPackageGenerator = require('./tools/plop/create-package-generator');

module.exports = function (plop) {
  plop.setGenerator('create-package', createPackageGenerator(plop));
};
