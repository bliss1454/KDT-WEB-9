const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./models')

app.set('view engine','ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//route
app.get('/', (req,res) => {
    res.render('index')
})
const studentRouter = require ('./routes/student');
app.use('/student',studentRouter);

db.sequelize.sync({ force: false }).then( () => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});
