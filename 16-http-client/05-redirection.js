#!/usr/bin/node

const http=require('http'),
      addr='http://www.sian.com/',
      log=console.log;

function get(addr){
  http.get(addr,function(res){
    if(res.statusCode<400 && res.statusCode >=300)
      get(res.headers.location);
    //print start line 
    console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
    //prit response header
    console.log(res.headers);
    console.log('');
    //print response body
    res.pipe(process.stdout);
  });
}
get(addr);



