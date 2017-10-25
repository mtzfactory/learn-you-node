// TIME SERVER (Exercise 10 of 13)

const net = require('net')
const strftime = require('strftime')

const [ PORT ] = process.argv.slice(2)

const socketListener = function (socket) {
    // socket.on('end', function() {
    //     console.log('client disconnected');
    //  });

     const time = strftime('%Y-%m-%d %H:%M', new Date())

    //  socket.write(time + '\n')
    //  socket.end()

    socket.end(time + '\n')
}

var server = net.createServer(socketListener)

server.listen(PORT)