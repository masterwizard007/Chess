const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;

app.use(cors({origin: 'https://localhost:5173/'}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('get');
});

app.post('/', (req, res) => {
  res.send('post');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});