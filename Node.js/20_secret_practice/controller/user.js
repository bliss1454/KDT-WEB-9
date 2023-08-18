const { User } = require('../models');

exports.index = (req, res) => {
    res.render('index');
};

exports.signup = (req, res) => {
    res.render('signup');
};
exports.signin = (req, res) => {
    res.render('signin');
};

exports.post_signup = (req, res) => {
    User.create({
        id: req.body.id,
        name: req.body.name,
        pw: req.body.pw,
    }).then((result) => {
        console.log('result', result);
        res.send({ result: true });
    });
};
exports.post_signin = (req, res) => {
    const { userid, pw } = req.body;
    User.findOne({
        where: { userid, pw },
    }).then((data) => {
        console.log('result', data);
        res.send({ result: true, data });
    });
};
