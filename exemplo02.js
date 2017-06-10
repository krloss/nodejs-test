//exemplo02.js
var http = require('http');
var dh = require('./modulo01');

http.createServer(function(req,res) {
	console.log('> Inicio...');
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write('Data/Hora atual: '+ dh.dataHora());
	res.end();
	console.log('> Fim!!!');
}).listen(8000);
