const Comment = require('../model/MComment')  //import=require

exports.main = (req,res) => {   //view부분은 이렇게 설정을 해줌(controller에서)
    res.render('index');
};

exports.comments = (req,res) => {
    res.render('comments',{commentInfos:Comment.comments()});
};

exports.comment = (req,res) => {
    // console.log(req.params);
    // console.log(req.params.id);
    const commentId = req.params.id;
    const comments = Comment.comments();
    console.log(comments[commentId -1]);
    res.render('comment', {commentInfo: comments[commentId-1]});
};