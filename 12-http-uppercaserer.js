// HTTP UPPERCASERER (Exercise 12 of 13)

const http = require('http')
const map = require('through2-map')

const [ PORT ] = process.argv.slice(2)

var server = http.createServer()

server.on('request', function(request, response) {

    if (req.method !== 'POST') {
        return res.end('send me a POST\n')
    }

    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(response)
})

server.listen(PORT)