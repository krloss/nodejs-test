var http = require('http');

http.createServer(function(req,res) {
	res.write('<html> '+
		'<head> <title> Bem Vindo </title> </head> '+
		'<body> <h1> Bem Vindo!!! </h1> </body> '+
	'</html> ');

	res.end();
}).listen(4321);
