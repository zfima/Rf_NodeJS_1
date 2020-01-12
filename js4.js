let worker = {
    age: 40,
    name: 'Alex',
    cntnr: [1, 2, 3, 6.88, 'koshka'],
    printAll: () => {
        console.log(`My name is ${this.name}, my age is ${this.age}`)
    },
    printAll1() {
        console.log(`My name is ${this.name}, my age is ${this.age}`)
    },
    printAll2: function () {
        console.log(`My name is ${this.name}, my age is ${this.age}`)
    }
}

worker.printAll1()
worker.printAll2()