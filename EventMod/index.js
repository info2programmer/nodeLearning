const EventEmitter = require('events');

const event = new EventEmitter();

// event.on("sayHello",()=>{
//     console.log("Hello World")
// })

// event.emit("sayHello")


event.on("checkPage",(sc,msg)=>{
 console.log(`Your code is ${sc} and message ${msg}`)
})

event.emit("checkPage", 200, "ok")

