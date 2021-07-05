const path = require('path');
const spawn = require('cross-spawn');
const yargsParser = require('yargs-parser');
const {
  hasPkgProp,
  resolveBin,
  hasFile,
  fromRoot,
  appDirectory,
} = require('../utils');

const args = process.argv.slice(2);
const here = p => path.join(__dirname, p);
const hereRelative = p => here(p).replace(process.cwd(), '.');
const parsedArgs = yargsParser(args);

const useBuiltinConfig =
  !args.includes('--config') &&
  !hasFile('.eslintrc') &&
  !hasFile('.eslintrc.js') &&
  !hasPkgProp('eslintConfig');

const config = useBuiltinConfig
  ? ['--config', hereRelative('../config/eslintrc.js')]
  : [];

const useBuiltinIgnore =
  !args.includes('--ignore-path') &&
  !hasFile('.eslintignore') &&
  !hasPkgProp('eslintIgnore');

const ignore = useBuiltinIgnore
  ? ['--ignore-path', hereRelative('../config/eslintignore')]
  : [];

const cache = args.includes('--no-cache')
  ? []
  : [
      '--cache',
      '--cache-location',
      fromRoot('node_modules/.cache/.eslintcache'),
    ];

const files = parsedArgs._;

const relativeEslintNodeModules = 'node_modules/@bereghici/eslint-config';

const pluginsDirectory = useBuiltinConfig
  ? `${hereRelative('../../')}${relativeEslintNodeModules}`
  : `${appDirectory}/${relativeEslintNodeModules}`;

const resolvePluginsRelativeTo = [
  '--resolve-plugins-relative-to',
  pluginsDirectory,
];

const result = spawn.sync(
  resolveBin('eslint'),
  [
    ...config,
    ...ignore,
    ...cache,
    ...files,
    ...resolvePluginsRelativeTo,
    '--no-error-on-unmatched-pattern',
  ],
  { stdio: 'inherit' }
);

process.exit(result.status);
