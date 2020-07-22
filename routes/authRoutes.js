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

router.get('/current_user', (req, res) => {
  res.send(req.user);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;