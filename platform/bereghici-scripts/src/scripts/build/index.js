if (process.argv.includes('--bundle')) {
  require('./rollup')
} else {
  require('./babel')
}