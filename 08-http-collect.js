// HTTP COLLECT (Exercise 8 of 13)

const http = require('http')
const bl = require('bl')

const [ url ] = process.argv.slice(2)

http.get(url, function (resp, err) {

    resp.pipe(bl(function (err, data) {
        if (err)
            return console.error(err)
        
        // `data` is a complete Buffer object containing the full data
        data = data.toString()

        console.log(data.length)
        console.log(data)
    }))
})
.on('error', error => {
    console.error(error);
})

/*

const http = require('http')
const concatStream = require('concat-stream')

const [ url ] = process.argv.slice(2)

http.get(url, response => {
  response.setEncoding('utf8')

  response.pipe(concatStream(data => {
    console.log(data.length)
    console.log(data)
  }))
})
.on('error', error => { 
    console.log(error) 
})

*/