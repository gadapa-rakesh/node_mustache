var express = require('express');
var app = express();
var consolidate = require('consolidate');

app.set('views' , __dirname + '/public/views');
app.engine('html', consolidate.mustache);
app.set('view engine', 'html');

app.get('/', function(req, res){
	res.render('index', {message: 'Hi there!'});
});

app.listen(3000, function(){
	console.log('Application is running...');
});