var express = require('express')
const app = express()
const port = 3000
var controller=require('./controllers/user .controller')
var bodyParser = require('body-parser');
app.use('/', require('./routes/admin'));
app.use('/',require('./routes/user'))
app.use(express.static('public'));
app.use(express.static('files'));
app.set('view engine', 'pug');
app.set('views', './views/');


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
   extended: true
})); // for parsing application/x-www-form-urlencoded

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/study', { //process.env.MONGO_URL
   useNewUrlParser: true,
   useUnifiedTopology: true
});
app.get('/book', controller.index)
app.get('/all_desk',controller.desk)//ddeer show ra cac cai ban, cai nao da duoc chon se co mau rieng


app.listen(port, () => console.log(`Example app listening on port ${port}!`))