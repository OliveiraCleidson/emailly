const authRoutes = require('./authRoutes'),
  stripe = require('./stripe'),
  { requireLogin, requireCredits } = require('./utils'),
  surveys = require('./surveys');

module.exports = (app) => {
  app.use("/auth", authRoutes);
  app.use('/api/stripe', requireLogin, stripe);
  app.use('/api/surveys', requireLogin, requireCredits, surveys);
};