#!/usr/bin/node

const http=require('http'),
      addr='http://localhost:8080/',
      url=require('url');

var options=url.parse(addr);
options.method='POST';

//console.log(options);

var req=http.request(options,function(res){
  //print response 
  console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  //prit response header
  console.log(res.headers);
  console.log('');
  //print response body
  res.pipe(process.stdout);
});

req.end('hello server!');
