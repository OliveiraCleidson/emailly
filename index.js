const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const keys = require('./config/keys');
mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

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