const authRoutes = require('./authRoutes');
const stripe = require('./stripe');

module.exports = (app) => {
  app.use("/auth", authRoutes);
  app.use('/api/stripe', stripe);
};