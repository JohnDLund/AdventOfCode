const fs = require('fs')

let formattedInput = fs.readFileSync("./index.html")

console.log(formattedInput)