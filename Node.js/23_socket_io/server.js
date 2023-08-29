const http = require('http');
const express = require('express');
const SocketIo = require('socket.io');

const app = express();
const PORT = 8000;

///http서버
const server = http.createServer(app);
//socket서버
const io = SocketIo(server);

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('client')
});

io.on('connection', (socket) => {
    socket.on('open_message',(arg, cb) => { //이벤트를 받는 부분
        console.log(arg);
        cb(arg)
    }); 
});

//서버
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});