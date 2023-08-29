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
app.get('/chat', (req,res) => {
    res.render('chat')
});

io.on('connection', (socket) => {
    console.log('조인 전', socket.rooms);
    socket.on('join', (res) => {  //ejs에서 prompt로 넣어뒀던 방이름이 res에 담긴게 된다.
        //채팅방을 생성하는 방법은 join(방 아이디)함수 사용한다. 방이 존재하면 그 방으로 접속된다.
        socket.join(res);
        socket.room = res; //방 id들을 담아준다. 채팅을 할 때, 어떤 방인지 알려줄 수 있음.
        console.log('조인 후', socket.rooms);
        //broadcast는 나를 제외한 전체사용자(브라우저)에게 메세지 전달
        socket.broadcast.to(res).emit('create', '새로운 브라우저가 입장하였습니다');
        const roomInfo = io.sockets.adapter.rooms.get(res)?.size;
        console.log(roomInfo);
    });
    socket.on('message', (res) => {
        //io.to(특정방id).emit(이벤트) : 특정방의 전체 사용자에게 메세지를 전달 한다.
        io.to(socket.room).emit('chat',res);
    });
    socket.on('leave', () => {
        socket.leave(socket.room);
        const roomInfo = io.sockets.adapter.rooms.get(socket.room)?.size;
        console.log(roomInfo);
    });
});

//서버
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});