// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('이름은 : ' + req.query.name);
});

app.listen(8000, () => {
    console.log('Server is open, port : 8000');
});