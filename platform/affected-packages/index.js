#!/usr/bin/env node

const process = require('process');
const yargsParser = require('yargs-parser');

const detectAffectedPackages = require('./src/detect-affected-packages');

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

const args = process.argv.slice(2);
const parsedArgs = yargsParser(args);

const files = parsedArgs._;
const type = parsedArgs.type || 'packages';

process.stdout.write(detectAffectedPackages(files, type));
