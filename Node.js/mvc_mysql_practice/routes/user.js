const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router()

router.get('/', controller.index);

//회원가입
//GET localhost:8000/user/signup
router.get('/user/signup', controller.signup);
//POST localhost:8000/user/signup
router.post('/user/signup', controller.post_signup);

//로그인
router.get('/user/signin', controller.signin);
//POST localhost:8000/user/signin
router.post('/user/signin',controller.post_signin);

//profile페이지//수정
router.post('/user/profile',controller.post_profile);
router.patch('/user/profile/edit', controller.edit_profile);

//회원정보삭제
router.delete('/user/profile/delete', controller.delete_profile);

module.exports = router;