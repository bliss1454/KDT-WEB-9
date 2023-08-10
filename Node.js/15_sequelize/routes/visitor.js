const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

//GET /visitior : 방명록 전체 보이기
router.get('/', controller.getVisitors) 
//GET /visitor/get : 방명록 하나 조회
router.get('/get',controller.getVisitor);
//POST /visitor/write : 방명록 하나 생성
router.post('/write', controller.postVisitor);
//PATCH /visitor/edit : 방명록 수정
router.patch('/edit', controller.patchVisitor);
// /visitor/delete: 방명록 삭제
router.delete('/delete', controller.deleteVisitor);
module.exports = router;