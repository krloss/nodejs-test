var http = require('http');

var criaRota = function(porta) {
	var api = { };
	var rotas = { };
	var metodos = ['GET','POST','OPTIONS'];
	var interceptors = [ ];

	metodos.forEach(function(it) {
		rotas[it] = { };

		api[it.toLowerCase()] = function(caminho,funcao) {
			rotas[it][caminho] = funcao;
		}
	});

	api.interceptor = function(it) { interceptors.push(it); };

	var executeInterceptors = function(i,req,res) {
		if(i >= interceptors.length) return;

		interceptors[i](req,res,function() { executeInterceptors(++i,req,res); });
	};

	var handleBody = function(req,res,next) {
		var body = [ ];
		
		req.on('data',function(chunk) {
			console.log(chunk);
			body.push(chunk);
		});
		req.on('end',function() {
			console.log('Req Fim!');
			req.body = Buffer.concat(body).toString();
			next();
		});
	};

	http.createServer(function(req,res) {
		handleBody(req,res,function() {
			executeInterceptors(0,req,res);

			if(rotas[req.method][req.url]) rotas[req.method][req.url](req,res);
			else res.statusCode = 404;

			res.end();
		});
	}).listen(porta);

	return api;
};

module.exports = criaRota;
