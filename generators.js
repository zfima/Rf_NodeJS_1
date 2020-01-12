function* someGenerator() {
    yield 'cat'
    yield 'dog'
}

const gen = someGenerator()

while (true) {
    var v = gen.next().value
    if (v != undefined) {
        console.log(v)
    }
    else {
        break
    }
}