//exemplo03.js
var http = require('http');
var url = require('url');

http.createServer(function(req,res) {
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.write(req.url);

	var q = url.parse(req.url,true).query;

	res.end('\n'+ q.ano +'\t-\t'+ q.mes);
}).listen(8000);
