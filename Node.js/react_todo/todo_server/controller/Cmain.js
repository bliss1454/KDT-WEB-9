// const db = [
//     {
//         id: 1,
//         title: "추석 연휴가 시작되었습니다",
//         done: false,
//     },
//     {
//         id: 2,
//         title: "즐거운 추석연휴보내세요",
//         done: false,
//     },
//     {
//         id: 3,
//         title: "과제도 꼭 해주시기 바랍니다",
//         done: false,
//     },
//     {
//         id: 4,
//         title: "모두 고향 잘 다녀오세요",
//         done: false,
//     },
// ];

const modles = require('../models');

exports.main = (req,res) => {
    res.send('hi');
};
exports.get_todo = async (req, res) => {
    const result = await modles.Todo.findAll();
    res.send(result);
};
exports.post_todo = async (req, res) => {
    const result = await modles.Todo.create({
        id: req.body.id,
        title: req.body.title,
        done: req.body.done
    });
    res.send(result);
};
exports.patch_todo = async (req, res) => {
    const result = await modles.Todo.update({
        title: req.body.title,
        done: req.body.done,
    },
    {
        where: { id: req.params.todoId }
    }
    );
    res.end();
};

exports.delete_todo = async (req, res) => {
    await modles.Todo.destroy({
        where: { id: req.params.todoId },
    });
    res.end();
};
