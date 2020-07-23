const passport = require('./passport');
const globalMiddlewares = require('./middlewares');
const requireLogin = require('./requireLogin');
module.exports = {
  passport,
  globalMiddlewares,
  requireLogin
}