// HTTP CLIENT (Exercise 7 of 13)

const http = require('http')

const [ url ] = process.argv.slice(2)

http.get(url, function (resp, err) {
    let body = '';
    
    resp.setEncoding('utf8')

    resp.on('data', function (chunk) {
        body += chunk
        console.log(chunk)
    })

    response.on('error', console.error)

    // resp.on('end', function () {
    //     console.log('http get end')
    // })
})
.on('error', error => {
    console.error(error)
})