#!/usr/bin/node


const http = require('http'),
      log=console.log,
      url=require('url'),
      qs=require('querystring');

http.createServer((req, res) => {
  log('request URL:',req.url);
   
  //请求头里的URL
  //var addr=url.parse(req.url);
  var addr=url.parse('https://wangding:1234@www.baidu.com:8000/a/b/c?age=20&color=green#/def/efg');
  //解析URL
  log('protocol:',addr.protocol);
  log('auth:',addr.auth);
  log('username:',addr.auth.username);
  log('password:',addr.password);
  log('host:',addr.host);
  log('port:',addr.port);


  log('path-name:',addr.pathname);
  log('path parse:',addr.pathname.split('/'));

  log('query string:',addr.query); 
  log('qs parse',qs.parse(addr.query));

  log('hash:',addr.hash);

  res.end('OK!');

}).listen(8080);

