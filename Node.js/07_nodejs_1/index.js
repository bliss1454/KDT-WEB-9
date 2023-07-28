// const { a, b } = require("./module");
//const {} 로 가져올 때는 구조분해해 가져오기에 이름이 동일해야 한다.
// const returnString = require("./func.js");
//하나만 내보낸 모듈은 다른 이름이어도 불러올 수 있다.

// //key값을 불러와야함
// const{a,b} = require('./module');
// console.log(a,b);

// import {a,b} from './module'
// console.log(a+b);

const http =  require ('http');
const fs = require('fs');

//순서 : 요청req(프론트가 백한테 요청) 응답res(서버가 주는 응답)
const server = http.createServer(function(req,res) {
    // res.writeHead(200) //응답 헤더 작성
    // res.write("<h1>Hello World</h1>")  //응답 본문 작성
    // res.end("<p>End</p>")  //응답 본문 작성 후 응답 종료

    //html 파일전송 (try catch)
    try {
        const data = fs.readFileSync('./index.html'); //그 파일을 가져온다
        res.writeHead(200); //응답헤드에 200
        res.end(data);
    } catch (error) {
        //그 파일이 오류났을 때의 404를 띄워주고 메세지를 띄워준다
        console.log(error);
        res.writeHead(404);
        res.end(error.message);
        }
    });


server.listen(8000, function () {
    console.log('8000번 포트로 실행');
})

// function run () {
//     console.log ("3초 뒤 실행")
// }

// console.log("시작");
// setTimeout(run, 3000);
// console.log("끝")