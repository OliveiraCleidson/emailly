const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const keys = require('./config/keys');

const app = express();
mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Middlewares
app.use(express.json());

// Routes
app.use("/auth", routes.authRoutes);

app.get('/', (req, res) => {
  res.send(`<p>Hello World!<p/>`);
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(`Server is on port ${PORT}`)