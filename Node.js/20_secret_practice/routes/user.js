const express = require('express');
const router = express.Router();
const controller = require('../controller/user');

router.get('/', controller.index);
//로그인
router.get('/signin', controller.signin);
router.post('/signin', controller.post_signin);
//회원가입
router.get('/signup', controller.signup);
router.post('/signup', controller.post_signup);

module.exports = router;

