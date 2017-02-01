const info = require('./api/v1/info');

module.exports = (app) => {
  app.use('/api/v1', info);
};
