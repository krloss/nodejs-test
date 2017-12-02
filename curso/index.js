global.max = 100;

var modulo = require('./modulos/modulo.js')
var moduloCache = require('./modulos/modulo.js')

console.log(modulo);
console.log(modulo === moduloCache);
console.log(modulo.geraSerial());

var i = setInterval(function () {
	console.time('x');
	console.log('a ' + new Date());

	setTimeout(function () {
		console.log('b ' + new Date());
		clearInterval(i);
	},3000);

	setImmediate(function () {
		console.log('c ' + new Date());
	});

	console.log('d ' + new Date());
	console.timeEnd('x');
},1000);
