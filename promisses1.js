var util = require('util')

function scaryClown5() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('🤡')
        }, 1000)
    })
}

var scaryClown5Promisify = util.promisify(scaryClown5)

scaryClown5Promisify()
    .then((x) => console.log(x))
    .then(() => {
        console.log('oppa')
    })
    .then(() => {
        console.log('oppa')
    })