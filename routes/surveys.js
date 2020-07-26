const router = require('express').Router();
const Survey = require('mongoose').model('surveys');

router.post('/', async (req, res) => {
  const { title, subject, body, recipients } = req.body;

  const survey = new Survey({
    title,
    subject,
    body,
    recipients: recipients.split(',').map(email => { email: email.trim() }),
    _user: req.user.id,
    dateSent: Date.now()
  })
  res.status(200).send();
});

module.exports = router;