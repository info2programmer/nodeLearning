const chalk = require('chalk');
const validator = require('validator');

console.log(chalk.blue("Hello World!"))

const res = validator.isEmail("info2programmer@gmail.com")

console.log(res ? chalk.greenBright.inverse(res) : chalk.redBright.inverse(res))

// const foo =()=>{
//     let a = b = 10
//     a++;
//     return a;
// }
// foo()

// console.log(a)
// console.log(b)