const chalk = require('chalk');
const validator = require('validator');

console.log(chalk.blue("Hello World!"))

const res = validator.isEmail("info2programmer@gmail.com")

console.log(res ? chalk.greenBright.inverse(res) : chalk.redBright.inverse(res))
