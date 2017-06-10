//exemplo04.js
var http = require('http');
var fs = require('fs');

http.createServer(function(req,res) {
	fs.readFile('arquivo01.html',function(erro,dados) {
		//res.writeHead(200,{'Content-Type':'text/html'});
		res.write(dados);
		res.end();
	});
}).listen(8000);
