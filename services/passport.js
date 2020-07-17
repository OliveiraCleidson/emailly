const passport = require('passport'),
  GoogleStrategy = require('passport-google-oauth20').Strategy,
  keys = require('../config/keys');
const { User } = require('../database/models');

passport.use(new GoogleStrategy({
  clientID: keys.googleClientId,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (acessToken, refreshToken, profile, done) => {
  new User({ googleId: profile.id }).save();
}));

module.exports = passport;