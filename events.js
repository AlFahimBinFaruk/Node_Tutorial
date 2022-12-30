// https://nodejs.dev/en/api/v19/events/
// a lot of build in node modules like http depends on events module.
const EventEmitter = require("events")

const customEmitter = new EventEmitter()

customEmitter.on("response",()=>{
   console.log("some logic here.")
})

customEmitter.on("response",()=>{
    console.log("some other logic here.")
})

customEmitter.emit("response")
