const authRoutes = require('./authRoutes');
const stripe = require('./stripe');
const { requireLogin } = require('../services');

module.exports = (app) => {
  app.use("/auth", authRoutes);
  app.use('/api/stripe', requireLogin, stripe);
};