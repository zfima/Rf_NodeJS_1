const http = require('http')

let server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/html'
    })
    res.write(`<h1> ${req.url.substr(1)}! zdohni</h1>`)
    res.write(`<h1><i> ${req.url.substr(1)}! zdohni</i></h1>`)
    res.write(`<h1><u> ${req.url.substr(1)}! zdohni</u></h1>`)
    res.end()
})

server.listen(3333)