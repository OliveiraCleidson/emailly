const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const keys = require('../config/keys');
const passport = require('./passport');

module.exports = (app, express) => {
  app.use(express.json());
  app.use(cookieParser(keys.cookieKey));
  app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60000,
    keys: [keys.cookieKey]
  }));
  app.use(passport.initialize());
  app.use(passport.session());
}