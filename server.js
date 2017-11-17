var express = require('express');

const app = express();

app.use(express.static(__dirname + '/main'));

app.get('/', (request,response) => {
  response.sendFile('/main/index.html', {root: __dirname});
})

app.listen(8080);
