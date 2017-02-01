const express = require('express');
const info = require('../../../package.json');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    name: info.name,
    version: info.version
  });
});

module.exports = router;
