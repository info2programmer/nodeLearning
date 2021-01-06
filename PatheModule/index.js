const path = require('path');

console.log(path.dirname("/Users/saikatbhadury/Projects/NodeJS/nodeLearning/PatheModule/index.js"))
console.log(path.basename("/Users/saikatbhadury/Projects/NodeJS/nodeLearning/PatheModule/index.js"))
console.log(path.extname("/Users/saikatbhadury/Projects/NodeJS/nodeLearning/PatheModule/index.js"))

const fileData = path.parse("/Users/saikatbhadury/Projects/NodeJS/nodeLearning/PatheModule/index.js")
console.log(fileData.name)
