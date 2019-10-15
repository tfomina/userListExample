const { join } = require('path');
const express = require('express');
const bodyParser = require('body-parser');

let { users } = require('./data.js');

const app = express();

app.use(bodyParser());

app.use(express.static(join(__dirname, 'dist')));

app.get('/', (_, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.get('/users', (_, res) => {
  res.send(users);
});

app.post('/user', (req, res) => {
  users.push(req.body);
  res.sendStatus(200);
});

app.delete('/user', (req, res) => {
  const userId = req.query.id;
  users = users.filter(user => user.id !== userId);
  res.sendStatus(200);
});

app.put('/user', (req, res) => {
  const userId = req.body.id;
  users[users.findIndex(user => user.id === userId)] = req.body;
  res.sendStatus(200);
});

app.listen(3000, () => console.log('port 3000'));
