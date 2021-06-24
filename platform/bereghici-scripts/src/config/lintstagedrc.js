const { resolveBrgScripts, resolveBin } = require('../utils');

const brgScripts = resolveBrgScripts();
const doctoc = resolveBin('doctoc');

module.exports = {
  'README.md': [`${doctoc} --maxlevel 3 --notitle`],
  '*.+(js|jsx|json|yml|yaml|css|less|scss|ts|tsx|md|gql|graphql|mdx|vue)': [
    `${brgScripts} lint`,
    `${brgScripts} test --findRelatedTests`,
  ],
};
