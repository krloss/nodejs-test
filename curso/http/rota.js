var http = require('http');

var criaRota = function(porta) {
	var api = { };
	var rotas = { };
	var metodos = ['GET','POST'];

	metodos.forEach(function(it) {
		rotas[it] = { };

		api[it.toLowerCase()] = function(caminho,funcao) {
			rotas[it][caminho] = funcao;
		}
	});

	http.createServer(function(req,res) {
		res.setHeader('Access-Control-Allow-Origin','*');

		if(rotas[req.method][req.url]) rotas[req.method][req.url](req,res);

		res.end();
	}).listen(porta);

	return api;
};

module.exports = criaRota;
