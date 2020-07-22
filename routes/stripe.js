const router = require('express').Router();
const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

router.post('/', async (req, res) => {
  const charge = await stripe.charges.create({
    amount: 5,
    currency: 'BRL',
    source: req.body.id,
    description: 'Pay R$5 for 5 credit email',
  });
  req.user.credit += 5;
  const user = await req.user.save();
  res.json(user);
});

module.exports = router;