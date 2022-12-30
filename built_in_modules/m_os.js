// https://nodejs.org/dist/latest-v18.x/docs/api/os.html
 
const os = require("os")

console.log("userinfo =>",os.userInfo())
console.log("uptime =>",os.uptime())

let systemInfo={
    type:os.type(),
    freeMemory:os.freemem(),
    totalMemory:os.totalmem()
}

console.log("system info =>",systemInfo)