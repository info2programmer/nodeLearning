const fs = require('fs');

// fs.writeFile("welcome.txt", "Hello this is an awesome day", err => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log("File created succesfully")
//     }
// })


fs.readFile("welcome.txt", "UTF-8", (err, data) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(data)
    }
})