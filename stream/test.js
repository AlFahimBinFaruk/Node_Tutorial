// https://nodejs.dev/en/api/v19/stream/
const http = require("http")
const fs = require("fs")

http.createServer((req,res)=>{
    /**
     * this will send all the data at once.
     * **/
    // let text = fs.readFileSync("./data.txt","utf-8")
    // res.end(text)
    

    // this will send send in chunk which is more optimized.
    let fileSteam = fs.createReadStream("./data.txt","utf-8")
    
    fileSteam.on("open",()=>{
      fileSteam.pipe(res)
    })

    fileSteam.on("error",(err)=>{
        res.end(err)
    })
}).listen(5000)