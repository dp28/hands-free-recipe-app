const express = require('express');
const path = require('path');
const performRequest = require('request-promise');

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

app.get('/recipe/:recipeURL', (request, response) => {
  console.log(`GET ${request.hostname}:${port}${request.path}`);
  performRequest(request.params.recipeURL).then((result) => {
    response.send(result);
  });
});

console.log('Listening on port', port);
app.listen(port);
