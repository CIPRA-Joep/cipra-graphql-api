import express from 'express';
import debugModule from 'debug';

const debug = debugModule('CGAPI');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Babel');
});

app.listen(4000, () => {
  debug('app is listening to port 4000');
});
