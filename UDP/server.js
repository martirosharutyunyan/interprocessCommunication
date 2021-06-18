const dgram = require('dgram');

const server = dgram.createSocket('udp4')

server.on('message', console.log)

server.bind(3000)