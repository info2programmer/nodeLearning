const fs = require('fs');

fs.mkdir("./folder", err => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("Folder Created Successfully")
    }
})

fs.writeFile("./folder/bio.txt", "This is a demo text", err => {
    if (err) {
        console.error(err)
    }
    else {
        console.log("File created successfully")
    }
})


fs.appendFile("./folder/bio.txt", "\nHi, how are you? have a good day", err => {
    if (err) {
        console.error(err)
    }
    else {
        console.log("File Update successfully")
    }
})


fs.readFile("./folder/bio.txt", "UTF-8", (err, data) => {
    if (err) {
        console.error(err)
    }
    else {
        console.log(data)
    }
})

fs.rename("./folder/bio.txt", "./folder/mybio.txt", err => {
    if (err) {
        console.error(err)
    }
    else {
        console.log("File renamed successfully")
    }
})

fs.rmdir("./folder", { recursive: true }, err => {
    if (err) {
        console.error(err)
    }
    else {
        console.warn("Folder deleted successfully")
    }
})

