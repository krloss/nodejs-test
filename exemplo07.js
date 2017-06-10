//exemplo07.js
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function(req,res) {
	if('/upload' == req.url) {
		var form = new formidable.IncomingForm();

		form.parse(req,function(erro,campos,arquivos) {
			var newPath = './'+ arquivos.arquivo.name

			fs.rename(arquivos.arquivo.path,function(erro) {
				if(erro) throw erro;

				res.end('Arquivo movido!');
			});
		});
	}
	else {
		res.writeHead(200,{'Content-Type':'text/plain'});
		res.write('<form action="upload" method="post" enctype="multipart/form-data">');
		res.write('<input type="file" name="arquivo"><br>');
		res.write('<input type="submit">');
		res.end('</form>');
	}
}).listen(8000);
