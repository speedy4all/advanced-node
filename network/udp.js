const dgram = require('dgram');
const PORT = 3333;
const HOST = '127.0.0.1';

const server = dgram.createSocket('udp4');

server.on('listening', () => { console.log('UDP Server listening') });

server.on('message', (msg, info) => {
    console.log(`${info.address}:${info.port} - ${msg}`);
});

server.bind(PORT, HOST);

//Client
const client = dgram.createSocket('udp4');
const message = Buffer.from('UDP message sent');

client.send(message, 0, message.length, PORT, HOST, (err) => { 
    if (err) throw err;
    
    console.log('UDP message sent');
    client.close();
})