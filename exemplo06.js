//exemplo06.js
const express = require('express');
const app = express();

app.get('/',function(req,res) {
	res.send('Ola Mundo!!!');
});

app.listen(8000,function() {
	console.log('Inicio em 8000...');
});
