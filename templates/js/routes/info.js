var express = require('express');
var router = express.Router();

let info = require('../../../package.json');

router.get('/', (req, res) => {
    res.json({
        name: info.name,
        version: info.version
    });
});

module.exports = router;
