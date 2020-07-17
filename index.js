const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`<p>Hello World!<p/>`);
});

const PORT = process.env.PORT || 5008;
app.listen(PORT);