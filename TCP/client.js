const net = require('net');

const socket = new net.Socket()

socket.on('data', data => {
    console.log(data.toString())
})


socket.connect({
    port:3000,
    host:"127.0.0.1",
}, () => socket.write('hy', 'utf8'))