const chalk = require('chalk')

let jeep = {
    maxSpeed: 200,
    maxWeight: 3000,
    reset: ResetAll
}

function ResetJeepSpeed() {
    jeep.maxSpeed = 200
}

function ResetJeepWeight() {
    jeep.maxWeight = 3000
}

function ResetAll() {
    ResetJeepSpeed()
    ResetJeepWeight()
}

let resetSpeedPtr = ResetJeepSpeed
console.log(`typeof resetSpeedPtr is: ${typeof ResetJeepSpeed}`)
jeep.maxSpeed = 5456
console.log(`My speed is ${jeep.maxSpeed}`)
resetSpeedPtr(jeep)
console.log(`My speed is ${jeep.maxSpeed}`)

jeep.maxSpeed = 3
jeep.maxWeight = 3
console.log(`Jeep maxSpeed: ${jeep.maxSpeed}, Jeep maxWeight: ${jeep.maxWeight}`)
jeep.reset()
console.log(`Jeep maxSpeed: ${jeep.maxSpeed}, Jeep maxWeight: ${jeep.maxWeight}`)