// HTTP FILE SERVER (Exercise 11 of 13)

const http = require('http')
const fs = require('fs')

const [ PORT, FILE ] = process.argv.slice(2)

var server = http.createServer()

server.on('request', function(request, response) {
    response.writeHead(200, { 'content-type': 'text/plain' })

    fs.createReadStream(FILE)
        .pipe(response)
})

server.listen(PORT)