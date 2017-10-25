const fs = require('fs')
const path = require('path');

module.exports = function (directory, extension, callback) {
    readDirCallback = function (err, files) {
        if (err)
            return callback(err)

        var filtered = files.filter(function(file) {
            return path.extname(file) === '.' + extension
        })

        callback(null, filtered)
    }

    fs.readdir(directory, readDirCallback)
}