const mysql = require('mysql');

//mysql 연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'username3',
    password: '1234',
    database: 'kdt9',
});
conn.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('connect');
});

exports.post_signup = (data, callback) => {
    const query = `INSERT INTO user (userid, pw, name) VALUES ('${data.userid}', '${data.pw}', '${data.name}')`;
    conn.query(query, (err, rows) => {
        console.log('post_signup', rows);  //rows에 담긴 내용을 같이 출력
        callback(); //값을 넘겨줄때 사용함.
    });
};

exports.post_signin = (data, callback) => {
    const query = `SELECT * FROM user WHERE userid='${data.userid}' AND pw='${data.pw}'`;
    conn.query(query, (err, rows) => {
        console.log('post_signin', rows);
        callback(rows);
    });
};

exports.post_profile = (data, callback) => {
    const query = `SELECT * FROM user WHERE userid='${data.userid}' `;
    conn.query(query, (err, rows) => {
        console.log('post_profile', rows);
        callback(rows);
    });
};

exports.edit_profile = (data, callback) => {
    const query = `UPDATE user SET userid='${data.userid}', pw='${data.pw}', name='${data.name}' WHERE id=${data.id}  `;
    conn.query(query, (err, rows) => {
        callback();
    });
};

exports.delete_profile = (id, callback) => {
    const query = `DELETE FROM user WHERE id=${id}`;
    conn.query(query, (err, rows) => {
        callback();
    });
};