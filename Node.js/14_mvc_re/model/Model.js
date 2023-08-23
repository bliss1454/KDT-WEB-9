const mysql = require('mysql');

//mysql연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'kdt',
    password: '',
    database: 'kdt',
    port: 3306,
});

//임시 데이터
const comments = [
    {
        id: 1,
        userid: 'hello',
        date: '2023-08-20',
        comment: '안녕하세요'
    },
    {
        id: 2,
        userid: 'hi',
        date: '2023-08-21',
        comment: '반갑습니다'
    },
    {
        id: 3,
        userid: 'sayhello',
        date: '2023-08-22',
        comment: '인사해요'
    },
    {
        id: 4,
        userid: 'bye',
        date: '2023-08-23',
        comment: '잘가'
    }
];

module.exports = comments;
