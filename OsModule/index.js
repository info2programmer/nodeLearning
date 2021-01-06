const os = require('os');

console.log(os.arch())
console.log(`FreeMemory ${os.freemem() / 1024 / 1024 / 1024} `)
console.log(`Total Memory ${os.totalmem() / 1024 / 1024 / 1024} `)
console.log(`Home DIR ${os.homedir()} `)
console.log(`Host Name ${os.hostname()} `)
console.log(`OS Name ${os.type()} `)