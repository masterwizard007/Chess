const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(cors({origin: 'https://localhost:5173/'}));
app.use(express.json());

let selection;

app.get('/', (req, res) => {
  res.send('get from chess');
});

app.post('/selection', (req, res) => {
  selection = req.body.selection;
  res.send(('post from chess with selection: ' + selection));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});