const express = require('express');
const passport = require('passport'),
  GoogleStrategy = require('passport-google-oauth20').Strategy,
  keys = require('./config/keys');

const app = express();

passport.use(new GoogleStrategy({
  clientID: keys.googleClientId,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (acessToken) => {
  console.log(acessToken)
}));

app.get('/', (req, res) => {
  res.send(`<p>Hello World!<p/>`);
});

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(`Server is on port ${PORT}`)