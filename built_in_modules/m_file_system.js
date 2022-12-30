// https://nodejs.org/dist/latest-v18.x/docs/api/fs.html
const fs = require("fs")

for(let i = 0; i< 100; i++){
    fs.writeFileSync("./data.txt",`Hello world ${i}\n`,{flag:"a"})
}