#!/usr/bin/node
/*
const http=require('http'),
      addr=process.argv[2] || 'http://sample.wangding.in/web/one-div.html';

http.get(addr,function(res){
  //print response 
  console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  //prit response header
  console.log(res.headers);
  console.log('');
  //print response body
  res.pipe(process.stdout);
});
*/

const addr=process.argv[2] || 'http://sample.wangding.in/web/one-div.html',
      url=require('url');

//解析addr协议
 var protocol=url.parse(addr).protocol;
 console.log(protocol);
//process.exit();

const http=(protocol === 'http:')? require('http'):require('https');

http.get(addr,function(res){
  //print response 
  console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  //prit response header
  console.log(res.headers);
  console.log('');
  //print response body
  res.pipe(process.stdout);
});



