var express = require('express');
var ejs = require('ejs');
var app = express();

app.use(express.static(__dirname + '/assets'));
app.set('view engine', 'ejs'); // set up ejs for templating

app.get('/',function(req,res){
  res.render('login.ejs');
})
app.get('/admin',function(req,res){
  res.render('admin-dashboard.ejs');
})
app.get('/inprogress',function(req,res){
  res.render('test.ejs');
})
app.get('/index-hello',function(req,res){
	res.render('index-hello.ejs');
})
 app.get('/index-lisa',function(req,res){
  res.render('index-lisa.ejs');
})
var server = app.listen(process.env.PORT|| 3000,function(){
  console.log("Listenning on port 3000");
})
