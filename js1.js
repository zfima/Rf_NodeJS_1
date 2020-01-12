
let jeep = {
    color: 'Red',
    maxSpeed: 200,
    engine: {
        HP: 300,
        Fuel: 'solar'
    }
}

console.log(`My color is ${jeep.color}`)
console.log(`My color is ${jeep['color']}`)
console.log(`My power is ${jeep.engine.HP}`)

console.log(`My speed is ${jeep.maxSpeed}`)
jeep.maxSpeed = 5555
console.log(`My speed is ${jeep.maxSpeed}`)
ResetJeepSpeed(jeep)
console.log(`My speed is ${jeep.maxSpeed}`)

let resetSpeedPtr = ResetJeepSpeed

jeep.maxSpeed = 5456
console.log(`My speed is ${jeep.maxSpeed}`)
resetSpeedPtr(jeep)
console.log(`My speed is ${jeep.maxSpeed}`)


function ResetJeepSpeed(jeep) {
    jeep.maxSpeed = 200
}