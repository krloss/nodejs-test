var config = require('./config.js');

var createModulo = function() {
	console.log(max);
	
	var geraSerial = function() {
		return Math.floor(Math.random() * config.max);
	};

	return { geraSerial:geraSerial };
};

module.exports = createModulo();
