var router = require('express').Router();
var mocks = require('./mock');
var assign = require('object-assign');

router.get('/account', function (req, res, next) {
    var accounts = mocks.accounts,
        limit = Number(req.query.limit) || accounts.length,
        offset = Number(req.query.offset) || 0;

    res.json(accounts.slice(offset, limit + offset))
});


router.get('/productCompatibility', function (req, res, next) {
    var productCompatibility = mocks.productCompatibility,
        limit = Number(req.query.limit) || productCompatibility.length,
        offset = Number(req.query.offset) || 0;

    res.json(productCompatibility.slice(offset, limit + offset))
});

module.exports = router;