const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
const myConnection = require('express-myconnection');


app.set('port', process.env.PORT || 4000);
app.use(express.static(path.join(__dirname, './views')));


app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res) {
  res.render('index');
});

app.use('/api/users', require('./controller/user'));
app.use('/api/products', require('./controller/product'));

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});