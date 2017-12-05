var net = require('net');

var conexoes = [];

var comunica = function(msg,origem) {
	conexoes.forEach(function(conexao) {
		if(conexao === origem) return;

		conexao.write(msg);
	});
};

net.createServer(function(conexao) {
	conexoes.push(conexao);
	conexao.write('Bem Vindo!');

	conexao.on('end',function() {
		comunica(conexao.apelido +' saiu!',conexao);
		conexoes.splice(conexoes.indexOf(conexao),1);
	});
	
	conexao.on('data',function(msg) {
		var mensagem = msg.toString();

		if(mensagem.indexOf('/apelido') === 0) {
			mensagem = mensagem.replace(/\/apelido\W+/,'');
			comunica(conexao.apelido +' --> '+ mensagem,conexao);
			conexao.apelido = mensagem;
			return;
		}

		comunica(conexao.apelido +' > '+ mensagem,conexao);
	});
}).listen(4321);
