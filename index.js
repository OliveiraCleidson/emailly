const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const { middlewares } = require('./services');


mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const app = express();

// Middlewares
middlewares(app, express);

// Routes
routes(app);

app.get('/', (req, res) => {
  res.send(`<p>Hello World!<p/>`);
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(`Server is on port ${PORT}`)