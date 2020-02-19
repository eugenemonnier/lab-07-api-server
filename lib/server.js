const express = require('express');
const app = express();
app.use(express.json());

app.get('/artists', (req, rest) => {
  let data = { name: req.query.name }
  res.status(200).json(data);
});

app.get('/categories', (req, res) => {
  let data = { name: req.query.name }
  res.status(200).json(data);
});

app.post('/artists', (req, rest) => {
  artists.push(req.body);
  res.status(201).json(req.body);
});

app.post('/categories', (req, rest) => {
  categories.push(req.body);
  res.status(201).json(req.body);
});

app

module.exports = {
  server: app,
  start: function(port) {
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () = console.log(`Listening on port: ${PORT}`));
  }
}