const fs = require('fs')


const buffer = fs.readFileSync('1-json.json')
const data = JSON.parse(buffer.toString())

data.name = "Anastassy"
data.age = 20

fs.writeFileSync('1-json.json',JSON.stringify(data))
