const router = require('express').Router();
const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

router.post('/', async (req, res) => {
  const charge = await stripe.charges.create({
    amount: 500,
    currency: 'BRL',
    source: req.body.id,
    description: 'Pay R$5 for 5 credit email',
  });
  req.user.credits += 5;
  console.log(req.user);
  const user = await req.user.save();
  res.status(200).send(user);
});

module.exports = router;