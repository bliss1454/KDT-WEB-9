const mysql = require('mysql');

const conn = mysql.createPool({
    host: 'localhost',
    user: 'username3',
    password: 'Love2026@@',
    database: 'kdt9',
    port: 3306,
    connectionLimit: 30, //최대 연결 수(기본값 10)
});

//회원가입 정보 데이터베이스 저장
const db_signup = (data, cb) => {
    const query = 'INSERT INTO user (userid, pw, name) VALUES (?,?,?)';
    conn.query(query, [data.userid, data.pw, data.name], (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('db_signup', rows);
        cb(r);
    });
};

//로그인
const db_signin = (data, cb) => {
    const query = 'SELECT * FROM user WHERE userid = ? AND pw = ?';
    conn.query(query, [data.userid, data.pw], (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('db_signin', rows);
        //select문의 쿼리문은 배열로 반환
        cb(rows);
    });
};
//회원정보 조회
const db_profile = (data, cb) => {
    const query = 'SELECT * FROM user WHERE id = ?';
    conn.query(query, data.number, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('db_profile', rows);
        cb(rows);
    });
};

module.exports = {
    db_signup,
    db_signin,
    db_profile,
};
