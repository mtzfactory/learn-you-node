// HTTP JSON API SERVER (Exercise 13 of 13)

const http = require('http')
const url = require('url')

const [ PORT ] = process.argv.slice(2)

var server = http.createServer()

server.on('request', function(request, response) {

    if (request.method !== 'GET') {
        response.writeHead(404)
        return response.end('send me a GET\n')
    }

    const pathname = url.parse(request.url, true).pathname

    if (pathname !== '/api/parsetime' && pathname !== '/api/unixtime') {
        response.writeHead(404)
        return response.end('path is not for API\n')
    }

    const query = url.parse(request.url, true).query

    if (!query.iso) {
        response.writeHead(404)
        return response.end('query is not \'iso\'\n')
    }
    
    const date = new Date(query.iso)
    let answer = {}

    switch (pathname) {
        case '/api/parsetime':
            answer = {
                'hour': date.getHours(),
                'minute': date.getMinutes(),
                'second': date.getSeconds()
            }
            break

        case '/api/unixtime':
            answer = {
                'unixtime': date.getTime()
            }
            break
    }
    
    response.writeHead(200, { 'content-type': 'application/json' })
    response.end(JSON.stringify(answer))
})

server.listen(PORT)