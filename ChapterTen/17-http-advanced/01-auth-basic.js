#!/usr/bin/node


const http = require('http'),
      log=console.log;

http.createServer((req, res) => {
  

  var auth=req.headers.authorization;

  if(typeof auth !== 'undefined'){
    auth=auth.split(' ');
    if(auth[0]==='Basic'){
      var buf=new Buffer(auth[1],'base64');
      log('username & password:',buf.toString('utf8'));
    }
  }

  res.end('OK!');
}).listen(8080);

