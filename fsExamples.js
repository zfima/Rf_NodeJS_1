const path = require('path')
const fs = require('fs')

console.log(path.dirname(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename))
console.log(path.parse(__filename).root)

let tmpDir = path.join(__dirname, 'test')
/*
fs.rmdir(tmpDir, (err) => {
    if (err) {
        throw err
    }
})

fs.mkdir(tmpDir, (err) => {
    if (err) {
        throw err
    }
})
*/
let tmpFile = path.join(tmpDir, 'test.txt')

fs.readFile(tmpFile, 'utf-8', (err, data) => {

    if (err) {
        return
    }
    console.log(data)

    data = data + 1

    fs.appendFile(tmpFile, data, err => {
        if (err) {
            throw err
        }
    })

})