const chalk = require('chalk')

class Hater {
    constructor(a, n) {
        this.age = a
        this.name = n
    }
    printAll() {
        console.log(chalk.blue(`My name is ${this.name}, my age is ${this.age}`))
        console.log(chalk.blue('fdfdfd'))
    }
}

let h1 = new Hater(55, 'bugy')
h1.printAll()