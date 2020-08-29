const funct = require('./notes.js')
const chalk = require('chalk')

const msg = funct()

console.log(msg)

console.log(chalk.bgGreen('Success!'))
