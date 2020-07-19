const router = require('express').Router();
const { passport } = require('../services');

router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    res.redirect("/surveys");
  });

module.exports = router;