
import express from 'express';

const app = express();

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/script.js', (req, res) => {
  res.sendFile(path.join(__dirname, '/script.js'));
})
