const fs = require('fs');
const http = require('http');


const server = http.createServer()

server.on("request",(req,res)=>{
    // Oldschool Way
    // fs.readFile("input.txt",(err,data)=>{
    //     if(!err){
    //         res.end(data)
    //     }
    // })


    // Stream Way
    const rstream = fs.createReadStream("input.txt")

    rstream.on("data",(data) => {
        res.write(data)
    })

    rstream.on("end",()=>{
        res.end()
    });

    rstream.on("error",(err)=>{
        console.log(err)
        res.end("File not found")
    })

})

server.listen("8000","127.0.0.1",()=>{
    console.log("Server is running")
})