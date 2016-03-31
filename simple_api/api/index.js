var router = require('express').Router();
var mocks = require('./mock');
var assign = require('object-assign');

router.get('/account', function (req, res, next) {
    var accounts = withComments(mocks.accounts).map(function (account) {
            return assign({}, account, {
                text: undefined
            })
        }),
        limit = Number(req.query.limit) || accounts.length,
        offset = Number(req.query.offset) || 0;

    res.json(accounts.slice(offset, limit + offset))
});

router.get('/account/:id', function (req, res, next) {
    var account = withComments(mocks.accounts).filter(function (account) {
        return account.id == req.params.id
    })[0];
    if (account) return res.json(account);

    res.status(404).json({error: "not found"});
});

router.post('/account', function (req, res, next) {
    var body = req.body;
    var account = {
        text: body.text,
        id: mocks.accounts.length + 1,
        user: body.user,
        timeStamp: new Date()
    };
    mocks.accounts.push(account);
    res.json(account)
});

router.get('/comment', function (req, res, next) {
    var aid = req.query.account;
    if (aid) return res.json(mocks.comments.filter(function (comment) {
        return comment.account == aid
    }))

    var limit = Number(req.query.limit) || mocks.comments.length,
        offset = Number(req.query.offset) || 0;
    res.json({
        total: mocks.comments.length,
        records: mocks.comments.slice(offset, limit + offset)
    })
});

router.post('/comment', function (req, res, next) {
    var comment = {
        id : mocks.comments.length + 1,
        text : req.body.text,
        timeStamp: new Date(),
        user: req.body.user,
        account : req.body.account
    };
    mocks.comments.push(comment);
    res.json(comment)
});

router.post('/report', function (req, res) {
    res.json({})
})

module.exports = router;

function withComments(accounts) {
    return accounts.map(function (q) {
        q.comments = mocks.comments.filter(function (comment) {
            return comment.account == q.id
        }).map(function (comment) {
            return comment.id
        });
        return q
    })
}