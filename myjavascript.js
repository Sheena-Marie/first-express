/* jshint esversion:6 */

const express = require('express');
const app = express();
const engine = require('ejs-mate');

const PORT = 3000;

app.engine('ejs', engine);

var person = {
  name: "Sheena",
  surname: "Takkenberg",
  currentDate: Date()
};

var favFood = {
  favFood: [
    { food: "Chocolate"},
    { food: "Pizza"},
    { food: "pasta"}
  ]
};

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index', favFood);
});

app.get('/about', function (req, res) {
  res.render('about');
});

app.get('/index', function (req, res) {
  res.render('index');
});

app.get('/contact', function (req, res) {
  res.render('contact');
});

app.listen(PORT, function() {
  console.log("app running on port " + PORT);
});
