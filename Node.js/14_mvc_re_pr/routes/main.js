const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

//메인페이지
router.get('/', controller.main);

module.exports = router;
