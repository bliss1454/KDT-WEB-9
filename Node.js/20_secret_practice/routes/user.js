const express = require('express');
const router = express.Router();
const controller = require('../controller/user');

router.get('/', controller.index);
//회원가입
router.get('/signup', controller.signup); 
//get은 페이지이다.
//post는 내용을 주고받는거
//이렇게 router을 생성해준다. 그 다음 controller로 넘어가서 해당 컨트롤러를 생성해준다.
router.post('/signup', controller.post_signup);
//로그인
router.get('/signin', controller.signin);
router.post('/signin', controller.post_signin);

module.exports = router;

