var fs = require('fs')

fs.readFile('generators.js', (err, data) => {
    if (err) {
        throw err
    }
    console.log(data)
})

function scaryClown1() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('🤡')
        }, 1000)
    })
}

function scaryClown2() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('😠')
        }, 300)
    })
}

function scaryClown3() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('🤡😠')
        }, 5000)
    })
}

async function msgAwaits() {
    var msg1 = await scaryClown1()
    var msg2 = await scaryClown2()
    console.log('msgAwaits:', msg1 + msg2)
}
msgAwaits()

async function msgPromiseAll() {
    var [a, b] = await Promise.race([scaryClown1(), scaryClown2()])
    console.log('msgPromiseAll:', a + b)
}
msgPromiseAll()

function scaryClown4() {
    return new Promise(resolve => {
        g.g
        resolve('🤡😠')
    })
}

scaryClown3()
    .then(scaryClown4()
        .then((x) => console.log(x))
        .catch((e) => console.log('error occured' + e)))
    .catch((e) => console.log('error occured' + e))
    .catch((e) => console.log('error occured' + e))

var util = require('util')

function scaryClown5() {
    console.log('🤡😠')
}

var scaryClown5Promisify = util.promisify(scaryClown5)

scaryClown5Promisify()
    .then(() => console.log('oppa'))
    .then(scaryClown1())