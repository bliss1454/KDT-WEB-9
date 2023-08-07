const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

router.get('practice1', controller.main);
router.get('/', controller.axiosPost);
router.post('/resultPost', controller.resultPost);

module.exports = router;