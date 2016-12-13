module.exports = app => {

  const info = require('./api/v1/info');

  app.use('/api/v1', info);
};
