const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const { globalMiddlewares } = require('./services');
const path = require('path');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const app = express();

// Middlewares
globalMiddlewares(app, express);

// Routes
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', path.resolve(__dirname, 'client', 'build', 'index.html'));
}
routes(app);

app.get('/', (req, res) => {
  res.send(`<p>Hello World!<p/>`);
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(`Server is on port ${PORT}`)