var http = require('http');
var fs = require('fs');

var listenerResponse =  function(req,res){
	res.end(req.url+"hai...............");
};

var server = http.createServer(listenerResponse);
server.listen(4000);