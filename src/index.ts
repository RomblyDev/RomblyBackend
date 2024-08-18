import ws from 'ws';
import express from 'express';

import routes from './routes';
import handleMessage from './messageHandlers';

const app = express();
const port = 3000; // TODO: .env the shit out of this.

const wsServer = new ws.Server({ noServer: true });
wsServer.on('connection', socket => {
  console.log('connection handled');
  socket.on('message', message => {
    console.log(message);
    console.log(message.toString());
    socket.send(`Received: ${message}`);

    if (Array.isArray(message)) {
      console.error('Received message of type Buffer[]')
      console.error(`Received Buffer[]: ${message}`)
      socket.send('Error, check server logs')
      return
    }

    // Look at the first byte of the message, interpret it as a WSMessageType.
    let intArray = new Uint8Array(message)
    const messageType: WSMessageType = intArray[0]

    handleMessage(messageType, message.slice(1).toString())
  });
});

app.use(express.json());

app.use('/', routes);

const server = app.listen(port);

server.on('upgrade', (request, socket, head) => {
  console.log('ooh upgrade');
  wsServer.handleUpgrade(request, socket, head, socket => {
    wsServer.emit('connection', socket, request);
  });
});