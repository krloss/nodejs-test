var rota = require('./rota.js');

var pessoas = [
	{nome:'Primeiro', idade:10},
	{nome:'Segundo', idade:20},
	{nome:'Terceiro', idade:30}
];
var usuarios = [
	{id:10, pessoa:pessoas[0], senha:'um'},
	{id:20, pessoa:pessoas[1], senha:'dois'},
	{id:30, pessoa:pessoas[3], senha:'tres'}
];

var app = rota(4321);

app.interceptor(function(req,res,next) {
	console.log('Interceptor: 1');
	res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Headers','Content-Type');
	next();
});
app.interceptor(function(req,res,next) {
	console.log('Interceptor: 2');
	res.setHeader('Content-Type','application/json;charset=UTF-8');
	next();
});

app.get('/pessoas',function(req,res) {
	res.write(JSON.stringify(pessoas));
});
app.get('/usuarios',function(req,res) {
	res.write(JSON.stringify(usuarios));
});
app.post('/pessoas',function(req,res) {
	console.log('Post Pessoas: '+ req.body);
	pessoas.push(JSON.parse(req.body));
});
app.options('/pessoas',function(req,res) {
	console.log('Options Pessoas');
});
