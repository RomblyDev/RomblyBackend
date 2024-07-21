import ws from 'ws';
import express from 'express';

import routes from './routes';

const app = express();
const port = 3000; // TODO: .env the shit out of this.

const wsServer = new ws.Server({ noServer: true });
wsServer.on('connection', socket => {
  console.log('connection handled');
  socket.on('message', message => console.log(message));
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