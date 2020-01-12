const eventEmmiter = require('events')

class Dispatcher extends eventEmmiter {

    constructor(eventName) {
        super()
        this.eventName = eventName
        console.log(`Evnt name: ${this.eventName}`)
    }

    subscribe(cb) {
        console.log(`Subscribed`)
        this.on(this.eventName, cb)
    }

    dispatch(data) {
        console.log(`Dispatch data: ${data}`)
        this.emit(this.eventName, data)
    }
}

let dispatcher = new Dispatcher('other')

dispatcher.subscribe(data => {
    console.log(`Handle data: ${data}`)
})

dispatcher.dispatch('MOL')

setTimeout(() => {
    dispatcher.dispatch('finitto finnitto')
}, 4000)