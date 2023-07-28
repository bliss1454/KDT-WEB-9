const express = require ('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views','./views');

app.use('/public_',express.static('./public_'))

app.get('/',(req, res) => {
    res.render('실습');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})