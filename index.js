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

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(`Server is on port ${PORT}, welcome to Emaily!`);