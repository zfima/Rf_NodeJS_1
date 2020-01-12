//vars
var hello = 'hello all!'
var undf = null

//objects
var myObj = {
    name: 'kolja',
    age: 25.534534
}

var friends = ['Godzilla', 'Kaiju', 'Aiceberg']
console.log(friends)
friends.push('Cold')
console.log(friends)

function sum(a, b) {
    return a + b
}

console.log(sum(5, 5)) 


let car = {
    name: 'mazda',
    engine: 2.0,

    getString: function () {
        return 'Name: ' + this.name + ', engine: ' + this.engine
    }
}

console.log(car.getString())

let str = 'Hello "big" boss'
console.log(str)

str = 'Hello \"""big\""" boss'
console.log(str)

str = 'Hello \big\s boss'
console.log(str)

str = 'Hello \\big\\s boss'
console.log(str)

str = 'molljusk'
console.log('i love ' + str + ' to eat')
console.log(`i love ${str} to eat`)

let a = '33'
console.log(a + 11)

let b = '33'
console.log(b / 11)