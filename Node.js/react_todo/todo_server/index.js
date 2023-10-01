const express = require('express');
const cors = require("cors");
const app = express();
const PORT = 8000;
const sequelize = require('./models').sequelize;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

//CORS오류방지
app.use(cors());

//router 분리
const router = require("./routes");
app.use("/", router);

//오류처리
app.use("*", (req, res) => {
    res.status(404).render("404");
});

app.get('/', (req, res) => {
    res.send('todos');
});

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
    });
  })
  .catch((error) => {
    console.error('서버 시작 중 오류 발생:', error);
  });

module.exports = router;