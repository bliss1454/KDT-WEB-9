const express = require ('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views','./views');

app.use('/public_',express.static('./public_'))

app.get('/',(req, res) => {
    res.render('app');
})

app.get('/page1',(req, res) => {
    res.send('이동성공1')
});
app.get('/page2',(req, res) => {
    res.send('이동성공2')
});
app.get('/page3',(req, res) => {
    res.send('이동성공3')
});


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})