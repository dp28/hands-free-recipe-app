const express = require('express');
const path = require('path');

const { getCollection, insertInCollection } = require('./persistence');

const app = express();
const port = process.env.PORT || 3001;

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

app.get('/healthcheck', (request, response) => {
  console.log(`GET ${request.hostname}:${port}${request.path}`);
  response.send({ status: 'healthy' });
});

app.get('/', (request, response) => {
  console.log(`GET ${request.hostname}:${port}${request.path}`);
  response.render('index');
});

app.get('/test', (request, response) => {
  console.log(`GET ${request.hostname}:${port}${request.path}`);
  insertInCollection('tests', { data: new Date() })
    .then((res) => response.send('inserted ' + JSON.stringify(res, null, 2)));
});

console.log('Listening on port', port);
app.listen(port);
