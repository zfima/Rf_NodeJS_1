let suka = function () {
    console.log('сука')
}

let ty = function (x) {
    console.log(x)
}

let nachalo = x => x + ' ' + x
let nutyi = () => console.log(nachalo('ну ты и'))

setTimeout(nutyi, 5000)
setTimeout(suka, 5000)
setTimeout(ty, 5000, 'ты')
setTimeout(function () {
    console.log('такая')
}, 5000)  