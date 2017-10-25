// MAKE IT MODULAR

const filterFunction = require('./learnyounode_program_module')

const [ path, extension ] = process.argv.slice(2)

const filterFunctionCallback = function (err, list) {
    if (err)
        return console.error('There was an error:', err)

    list.forEach(function (file) {
        console.log(file)
    })
}

filterFunction(path, extension, filterFunctionCallback)