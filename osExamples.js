const os = require('os')

console.log(`OS = ${os.platform()}`)
console.log(`CPU = ${os.arch()}`)
console.log(`CPUS = ${os.cpus()[0].model}`)
console.log(`Free RAM = ${Math.round(os.freemem() / (1024 * 1024 * 1024))} GByte`)
console.log(`Free RAM = ${Math.round(os.totalmem() / (1024 * 1024 * 1024))} GByte`)
console.log(`OS Home dir = ${os.homedir()}`)
console.log(`OS uptime = ${Math.floor(os.uptime() / (60 * 60 * 24))} days`)