const express = require('express'),
  app = express();

require('./database');

const { globalMiddlewares } = require('./services');
globalMiddlewares(app, express);

const routes = require('./routes');
routes(app);
if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
const keys = require('./config/keys');
sgMail.setApiKey(keys.sendGridApiKey);
const msg = {
  to: 'oliv.cleidson@gmail.com',
  from: 'gk.cleidson@yahoo.com.br',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(`Server is on port ${PORT}, welcome to Emaily!`);