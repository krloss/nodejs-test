global.max = 100;

var modulo = require('./modulos/modulo.js')
var moduloCache = require('./modulos/modulo.js')

console.log(modulo);
console.log(modulo === moduloCache);
console.log(modulo.geraSerial());
