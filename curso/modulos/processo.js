
var criaProcesso = function () {
	console.log(process.argv.slice(2));

	Object.keys(process).forEach(function (value) { console.log(value); });

	var konsole = {
		log:function (msg) { process.stdout.write(msg +'\n'); },
		erro:function (msg) { process.stderr.write(msg +'\n') }
	};

	konsole.log('stdout TTY: '+ !!process.stdout.isTTY);
	konsole.erro('stderr TTY: '+ !!process.stderr.isTTY);

	var keyboard = function (opcao) {
		switch(opcao) {
			case 'a': console.log('pid: '+ process.pid); break;
			case 'b': console.log('title: '+ process.title); break;
			case 'c': console.log('arch: '+ process.arch); break;
			case 'd': console.log('platform: '+ process.platform); break;
			case 'e': console.dir(process.env); break;
			case 'm': console.log(process.memoryUsage()); break;
			case 'q': process.exit();
			case 'u': console.log('uptime: '+ process.uptime()); break;
			case 'v': console.dir(process.versions); break;
			default : console.log('Usage: node [a-e,m,q,u,v]');
		}
	};

	var onReadable = function () {
		process.stdin.on('readable',function () {
			var value = process.stdin.read();

			if(value) keyboard(value.toString().replace(/\W/g,''));
		});
	};

	process.on('exit',function () { console.log('Fim!') });
	process.on('uncaughtException',function () { console.log('Erro Identificado.') });
	
	return { onReadable:onReadable };
};

module.exports = criaProcesso();
