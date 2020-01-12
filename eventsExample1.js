const eventEmmiter = require('events')

let emitter = new eventEmmiter()

emitter.on('anything', data => {
    console.log(data)
})

emitter.emit('anything', 'LOL')
emitter.emit('anything', { a: 1 })

setTimeout(() => {
    emitter.emit('anything', 'finitto')
}, 4000)