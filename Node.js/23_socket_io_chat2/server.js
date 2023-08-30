const http = require("http");
const express = require("express");
const SocketIO = require("socket.io");

const app = express();
const PORT = 8000;


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("view engine", "ejs");

// http 서버
const server = http.createServer(app);
// socket 서버
const io = SocketIO(server);

app.get('/', (req, res)=>{
    res.render("chat");
})

io.on('connection', (socket)=>{
    // console.log('조인 전', socket.rooms);
    socket.on('join', (res)=>{
        // console.log(`${res} 방 입장`);
        // 채팅방을 생성하는 방법은 join(방아이디), 방이 존재하면 그 방으로 접속
        socket.join(res);
        socket.room = res;
        
        // broadcast 나를 제외한 전체사용자에게 메세지 전달
        //socket.broadcast.to(res).emit('create', `${socket.id} 입장하였습니다.`);
        //const roomInfo = io.sockets.adapter.rooms.get(res);
        //console.log("접속인원:", roomInfo.size);
    })

    socket.on('message', (res)=>{
        // 특정방의 전체사용자에게 메세지 전달
        // console.log(socket.room);
        socket.emit('chatMe', res);
        socket.broadcast.to(socket.room).emit('chat', res); //해당 톡방에 있는 사람들 중에 나를 제외하고 보내는 것
    })

    socket.on('leave', ()=>{
        socket.leave(socket.room);
        const roomInfo = io.sockets.adapter.rooms.get(socket.room);
        console.log("접속인원:", roomInfo.size);
    } )

    socket.on('open', (arg, cb)=>{
        console.log(arg);
        cb(arg);
    });

    socket.on('form_message', (arg)=>{
        io.emit('back_message', arg)
    })
})


server.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})