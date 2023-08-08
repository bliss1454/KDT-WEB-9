const express = require('express');
const controller = require('../controller/Cuser');
const userRouter = require('./routes/user');

router.get('/', controller.index);
//회원가입
//GET localhost:8000/user/signup
router.get('/signup', controller.signup);
//POST localhost:8000/user/signup
router.post('/signup', controller.post_signup);

//로그인
router.get('/signin', controller.signin);
//POST localhost:8000/user/signin
router.post('/signin',controller.post_signin);

module.exports = router;