#!/usr/bin/node

const http=require('http');//引用http模块
//监听8080端口 有访问则返回一个hello world
http.createServer((req,res)=>{
  res.end('hello world');//传递一个字符串
}).listen(8080);//监听
