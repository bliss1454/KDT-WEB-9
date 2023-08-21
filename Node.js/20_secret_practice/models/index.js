'use strict';
//이 줄은 엄격 모드(Strict Mode)를 활성화합니다. 엄격 모드는 코드 실행에 엄격한 규칙을 적용하고 오류를 빨리 발견할 수 있도록 도와줍니다.

//Sequelize를 사용하여 데이터베이스와의 연결을 설정하고 모델을 정의하는 중요한 부분을 처리합니다. 
//이것은 일반적으로 Node.js 애플리케이션에서 Sequelize를 사용하여 데이터베이스와 상호 작용하는 방법을 설정하는 초기화 코드입니다.

const Sequelize = require('sequelize');
//sequelize 라이브러리를 불러옵니다. Sequelize는 Node.js에서 데이터베이스와 상호 작용을 쉽게 할 수 있게 해주는 ORM(Object-Relational Mapping) 라이브러리입니다.
//ORM은 개발자가 데이터베이스를 객체로 다룰 수 있게 해주며 데이터베이스와의 상호 작용을 추상화합니다.
//ORM은 간단한 쿼리와 데이터 조작을 더 쉽게 만들어줌으로써 개발 생산성을 향상시키고 오류를 줄이는 데 도움이 됩니다.

const env = process.env.NODE_ENV || 'development';
//환경 변수 NODE_ENV를 가져오고, 만약 해당 변수가 정의되지 않았다면 'development'를 기본값으로 설정합니다. 이것은 어떤 환경(개발, 테스트, 프로덕션)에서 실행 중인지를 결정하는 데 사용됩니다.
const config = require(__dirname + '/../config/config.json')[env];
//config.json 파일에서 데이터베이스 연결 정보를 로드합니다. config.json 파일에는 각 환경에 대한 데이터베이스 연결 설정이 정의되어 있습니다.
const db = {};
//데이터베이스 모델을 저장하기 위한 빈 객체를 생성합니다.
const sequelize = new Sequelize(config.database, config.username, config.password, config);
//Sequelize를 사용하여 데이터베이스와의 연결을 설정합니다. config 객체에 있는 데이터베이스 연결 정보를 사용하여 연결을 생성합니다.

db.User = require('./User')(sequelize);
//User 모델을 정의하고, Sequelize와 연결된 데이터베이스에 매핑합니다. User 모델은 ./User 파일에서 가져와서 정의된 것으로 보입니다.

db.sequelize = sequelize;
//데이터베이스 연결 객체를 db 객체에 할당합니다. 이렇게 하면 다른 파일에서 이 연결을 사용할 수 있습니다.
db.Sequelize = Sequelize;
//Sequelize 라이브러리를 db 객체에 할당합니다. 이렇게 하면 다른 파일에서 Sequelize의 메서드와 클래스를 사용할 수 있습니다.

module.exports = db;
//db 객체를 모듈로 내보냅니다. 이 모듈은 다른 파일에서 Sequelize를 사용하여 데이터베이스와 상호 작용하는 데 사용됩니다.
//exports를 데이터베이스로 수출한다?
