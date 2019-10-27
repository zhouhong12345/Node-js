#!/usr/bin/node

/*
const http=require('http'),
      addr=process.argv[2] || 'http://sample.wangding.in/web/one-div.html';

http.get(addr,function(res){
  //print start line
  console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);

  //print response header
  console.log(res.headers);
  console.log('');
  //print response body
  res.pipe(process.stdout);
});
*/

const addr=process.argv[2] || 'http://sample.wangding.in/web/one-div.html',
      url=require('url');
//解析协议
var protocol=url.parse(addr).protocol;
console.log(protocol);

const http=(protocol ==='http:')?require('http'):require('https');

http.get(addr,function(res){
  //print start line
  console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);

  //print response header
  console.log(res.headers);
  console.log('');
  //print response body
  res.pipe(process.stdout);
});







