#!/usr/bin/node


const http = require('http'),
      log=console.log;

var items=items.loadDate();

http.createServer((req, res) => {
    log(`${req.method} ${req.url} ${req.httpVersion}`);
    log(req.header);
    log('');

    switch(req.method){
      case 'GET':
        select(req,res);
        break;
      case 'POST':
        insert(req,res);
        break;
      case 'PUT':
        update(req,res);
        break;
      case 'DELETE':
        remove(req,res);
        break;
      default:
        err(res);
    }
    res.end('OK!');
}).listen(8080);

function select(req,res){
  var data=JSON.stringify(items);
  res.setHeader('Content-Length',Buffer.byteLength(data));
  res.setHeader('Content-Type','text/plain;charset="utf-8"');
  res.setHeader('Access-Control-Allow-Origin','*');//跨域访问

  res.end(data);//向客户端发一个响应
}
function update(req,res){
  res.end(req.method);
}
function insert(req,res){
  res.end(req.method);
}
function remove(req,res){
  res.end(req.method) ;
}
function err(){
  res.end('Somethind Wrong!');
}

function 

