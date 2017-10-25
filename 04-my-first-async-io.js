// MY FIRST ASYNC I/O ~ asynchronous

const fs = require('fs')

const [ path ] = process.argv.slice(2)

const callback = function (err, data) {

    if (err) {
        return console.log(err)
    }

    const lines = data.toString().split('\n').length - 1

    console.log(lines)
}

fs.readFile(path, callback)
