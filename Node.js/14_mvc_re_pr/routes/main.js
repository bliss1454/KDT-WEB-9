const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

//메인페이지
router.get('/', controller.main);
//회원 정보 추가
router.post('/listplus', controller.gestplus)

module.exports = router;
