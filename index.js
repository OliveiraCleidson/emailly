const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const { globalMiddlewares } = require('./services');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const app = express();

// Middlewares
globalMiddlewares(app, express);

// Routes
routes(app);

if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(`Server is on port ${PORT}`)