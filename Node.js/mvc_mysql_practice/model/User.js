const mysql = require ('mysql');
//mysql 연결
const conn = mysql.createConnection({
    host:'localhost',
    user: 'username3',
    password: '1234',
    database: 'kdt9'
})
conn.connect((err) => {
    if(err) {
        console.log('error');
        return;
    }
    console.log('connect')
});

exports.post_signup = (data, callback) => {
    const query = `INSERT INTO user (userid, pw, name) VALUES('${data.userid}','${data.pw}','${data.name}')`;
    conn.query(query, (err,rows) => {
        console.log('post_signup', rows);
        callback();
    });
};

exports.post_signin = (data, callback) => {
    const query = `SELECT * FROM user WHERE userid='${data.userid}' AND pw='${data.pw}'`;
    conn.query(query, (err,rows) => {
        console.log('post_signin', rows);
        callback(rows);
    });
}