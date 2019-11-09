#!/usr/bin/node


const http = require('http'),
      log=console.log;

var total=1;//server requested times

http.createServer((req, res) => {
  log(`${req.method} ${req.url} ${req.httpVersion}`);
  log(req.headers);
  log();

  if(req.url ==='/favicon.ico') return;

  log('I haved required %d times', total++);

  var count=1;
  log(req.headers.cookie);
  if( typeof req.headers.cookie !=='undefined'){
    //parse cookie解析cookie
    var data=req.headers.cookie.split('=');
    count=Number(data[1])+1;
    
  }
  res.statusCode=200;
  res.setHeader('Set-cookie',`count=${count};max-age=400`);
  res.end(`You have visited ${count} times!`);

}).listen(8083);

