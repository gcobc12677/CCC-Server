if (process.env.NODE_ENV === 'development') {
  require('babel-register');
}

const app = require('./index.js');
const debug = require('debug')('CCCServer');
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  debug(`API Server listen on ${PORT}`);
});
