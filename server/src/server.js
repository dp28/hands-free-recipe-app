const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (request, response) => {
  console.log(`GET ${request.hostname}:${port}${request.path}`);
  response.send('Hello, world');
});

console.log('Listening on port', port);
app.listen(port);
