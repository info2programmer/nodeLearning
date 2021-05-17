const fs = require('fs');


const myBio = {
    name     : "Saikat Bhadury",
    age      : 26,
    location : "Kolkata"
}

const stringData = JSON.stringify(myBio);

fs.writeFile("myBio.json",stringData,err=>{
    if(!err){
        console.log("File created")
    }
})


fs.readFile("myBio.json","UTF-8",(err,data)=>{
    if(!err){
        let bioData = JSON.parse(data)
        console.log(bioData)
    }
})