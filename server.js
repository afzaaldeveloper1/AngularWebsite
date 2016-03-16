var express = require('express');
var app = express();
var morgan = require('morgan');

app.use(express.static(__dirname +'/public'));
app.use(morgan('dev'));



app.get('*', function(req, res) {
	res.sendfile('./public/index.html');
});

var server = app.listen(3000, function(){
	console.log('Listening on port 3000');
});