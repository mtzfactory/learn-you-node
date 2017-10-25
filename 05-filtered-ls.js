// FILTERED LS

const fs = require('fs')
const path = require('path')

const [ pathDir, extension ] = process.argv.slice(2)

const readDirCallback = function (err, files) {
    var filtered = files.filter(function(file) {
        return path.extname(file) === '.' + extension
    })

    filtered.map(function(file) {
        console.log(file)
    })
}

fs.readdir(pathDir, readDirCallback)