const User = require('../model/Muser');

exports.main = (req,res) => { 
    res.render('practice1');
};

exports.axiosPost = (req, res) => {
    res.render('Post');
}

exports.axiosPost = (req, res) => {
    console.log(User.user().id);
    if (User.user().id === req.body.username && User.user().pw === req.body.password) {
        res.send({ result: true, userInfo: req.body });
    } else {
        res.send({ result: false, userInfo: null });
    }
};
