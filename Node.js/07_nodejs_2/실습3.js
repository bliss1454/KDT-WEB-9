const express = require ('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views','./views');

app.get('/',(req, res) => {
    res.render('실습3', {num : [2,3,4,5,6,7,8,9]} );
});
//배열을 담을때,[] 사용

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})