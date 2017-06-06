const express = require('express');

const { getCollection, insertInCollection } = require('./persistence');

const app = express();
const port = process.env.PORT || 3001;

app.get('/healthcheck', (request, response) => {
  console.log(`GET ${request.hostname}:${port}${request.path}`);
  response.send({ status: 'healthy' });
});

app.get('/', (request, response) => {
  console.log(`GET ${request.hostname}:${port}${request.path}`);
  getCollection('tests')
    .then(tests => response.send('Hello, world\n' + JSON.stringify(tests, null, 2)));
});

app.get('/test', (request, response) => {
  console.log(`GET ${request.hostname}:${port}${request.path}`);
  insertInCollection('tests', { data: new Date() })
    .then((res) => response.send('inserted ' + JSON.stringify(res, null, 2)));
});

console.log('Listening on port', port);
app.listen(port);
