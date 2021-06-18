const dgram = require('dgram');

const message = Buffer.from('hello')
const client = dgram.createSocket('udp4')

client.send(message, 3000, '127.0.0.1', console.log)