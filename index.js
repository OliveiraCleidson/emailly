const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
const keys = require('./config/keys');
const { passport } = require('./services');


mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser(keys.cookieKey));
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60000,
  keys: [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
routes(app);

app.get('/', (req, res) => {
  res.send(`<p>Hello World!<p/>`);
});

app.get('/api/current_user', (req, res) => {
  res.send(req.user);
});

app.get('/api/logout', (req, res) => {
  req.logout();
  res.send(req.user);
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(`Server is on port ${PORT}`)