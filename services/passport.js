const passport = require('passport'),
  GoogleStrategy = require('passport-google-oauth20').Strategy,
  keys = require('../config/keys');
const { User } = require('../database/models');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user)
    });
});

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientId,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
    async (acessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await User({ googleId: profile.id }).save();
      done(null, user);
    }));

module.exports = passport;