let done = true

let isItDoneYet = new Promise((resolve, reject) => {
    console.log('Start decision logic...')
    if (done == true) {
        setTimeout(() => {
            resolve('OK, its done! :-)')
        }, 4000)
    }
    else {
        setTimeout(() => {
            reject('BAD, it is not done :-(')
        }, 4000)
    }
})

let checkIfItsDone = () => {
    isItDoneYet
        .then((ok) => {
            console.log(ok)
        })
        .catch((err) => {
            console.log(err)
        })
}

checkIfItsDone()