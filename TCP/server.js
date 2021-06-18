const net = require('net');

const server = net.createServer(socket => {
    socket.on('data', data => {
        console.log(data.toString())
    })
    socket.on('error', console.log)
})


server.on('error', e => console.log(e))

const port = 3000

server.listen(port, () => console.log(`TCP server running in port: ${port}`))