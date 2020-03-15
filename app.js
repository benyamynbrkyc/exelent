const express = require('express');
//var server = express.createServer();
// express.createServer()  is deprecated.
const app = express(); // better instead

app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT | 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname, '/public/index.html');
});

app.listen(PORT, () => {
  console.log('Server listening on port,', PORT);
});
