var net = require('net');

var cliente  = net.connect(4321);

cliente.on('connect',function() {
	cliente.write('Olá!');
});

cliente.on('data',function(msg) {
	console.log(msg.toString());
});

cliente.on('end',function() {	
	console.log('Fim!');
	process.exit();
});

process.stdin.on('readable',function() {
	var msg = process.stdin.read();

	if(!msg) return;

	cliente.write(msg.toString().replace(/\n/,''));
});
