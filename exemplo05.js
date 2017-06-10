//exemplo05.js
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req,res) {
	var content = {'Content-Type':'text/html'};
	var q = url.parse(req.url,true);
	var fileName = '.'+ q.pathname;

	console.log(req.url);
	console.log(q.host);
	console.log(q.pathname);
	console.log(q.search);
	console.log(q.query);

	fs.readFile(fileName, function(erro,dados) {
		if(erro) {
			res.writeHead(404,content);
			return res.end('Nao Encontrado');
		}

		res.writeHead(200,content);
		res.write(dados);
		return res.end();
	});
}).listen(8000);
