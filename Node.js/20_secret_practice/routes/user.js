const express = require('express'); 
//Express.js 라이브러리를 가져오고, express 변수에 할당합니다.
//이 라이브러리를 사용하면 HTTP 요청 및 응답 처리, 라우팅, 미들웨어 등을 간편하게 관리할 수 있습니다.
const router = express.Router();
//이 코드는 Express에서 제공하는 Router 객체를 생성하고, 이를 router 변수에 할당합니다.
//라우터를 사용하면 특정 URL 경로에 대한 요청을 처리할 수 있으며, 관련된 미들웨어 및 컨트롤러 함수를 연결할 수 있습니다.
const controller = require('../controller/user'); 
//이 코드는 애플리케이션의 로직을 담당하는 컨트롤러 모듈을 가져옵니다.
//controller 변수에 해당 모듈을 할당합니다.
//이 모듈은 사용자와 관련된 다양한 동작을 수행하는 함수를 포함하고 있습니다. 이러한 함수들은 라우터에서 특정 경로와 HTTP 메서드에 매핑되어 사용자 요청에 대한 응답을 처리합니다.

//get은 가져온다는 개념, post는 수행한다는 개념
//즉, get은 서버에서 어떤 데이터를 가져와서 보여줄 때 사용한다. 어떤 값이나 내용, 상태 등을 바꾸지 않는 경우에 사용하는 거다.
//post는 서버상의 데이터 값이나 상태를 바꾸기 위해서 사용한다.

//회원가입 및 로그인 페이지가 필요한거니, 페이지는 메인페이지까지 총 3개이다. 페이지 기능을 하는 get의 3개, 그리고 데이터값을 받아와 데이터 처리를 수행하는 post페이지 2개를 route에 선언해준다.
router.get('/', controller.index); //get은 페이지를 열어준다
router.get('/signup', controller.get_signup); //컨트롤러에 get_signup 이름으로 만들거다
router.get('/signin', controller.get_signin); 

router.post('/signup', controller.signup);
router.post('/signin', controller.signin);

module.exports = router;

