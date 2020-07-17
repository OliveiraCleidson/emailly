const passport = require('passport'),
  GoogleStrategy = require('passport-google-oauth20').Strategy,
  keys = require('../config/keys');

passport.use(new GoogleStrategy({
  clientID: keys.googleClientId,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (acessToken, refreshToken, profile, done) => {
  console.log("acess token:", acessToken);
  console.log("refreshToken:", refreshToken);
  console.log("profile", profile);
  console.log("done", done);
}));

module.exports = passport;