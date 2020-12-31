const { run } = require('runjs')
const chalk = require('chalk')

console.log(chalk.yellow.bold('[Build] ----- start -----'))

run('node ./build/minifier.js')

console.log(chalk.green.bold('[Build] html minifier success !'))

run('rollup -c')

console.log(chalk.yellow.bold('[Build] ----- end -----'))
