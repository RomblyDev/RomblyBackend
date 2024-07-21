import express from 'express';

import routes from './routes'

const app = express();
const port = 3000; // TODO: .env the shit out of this.

app.use(express.json());

app.use('/', routes);

app.listen(port);