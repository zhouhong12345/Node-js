#!/usr/bin/node


const http = require('http'),
      log=console.log;
//解析客户端发来的请求
http.createServer((req, res) => {
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');

  req.pipe(process.stdout);
  res.end('hello client!');//做了个响应

}).listen(8080);

