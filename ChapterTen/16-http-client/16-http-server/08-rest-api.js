#!/usr/bin/node


const http = require('http'),
      log=console.log;

var items=[];

http.createServer((req, res) => {
    log(`${req.method} ${req.url} ${req.httpVersion}`);
    log(req.headers);
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
}).listen(8080);

function select(req,res){
  var data=JSON.stringify(items);
  res.setHeader('Content-Length',Buffer.byteLength(data));
  res.setHeader('Content-Type','text/plain;charset="utf-8"');
  res.setHeader('Access-Control-Allow-Origin','*');//跨域访问

  res.end(data);//向客户端发一个响应
}
function update(req,res){
  //parse url get id修改id,validate id,type and range验证一下id是否合法
  //parse req get content获得修改前的数据validate content now blank
  //modify items, items[id]=new content修改数组
  res.end(req.method);
}
function insert(req,res){
  var item='';
  req.on('data',(data)=>{
    item +=data;
    log(item);

  });
  req.on('end',()=>{
    if(typeof item !=='undefined'){
      items.push(item);
      res.end('Insert OK!');
    }
    else{
      res.end('Insert Error!');
    }
  });
}
function remove(req,res){
  var id=req.url.slice(1,req.url.length);
  //validate id:1.type2.range
  
  //del items[id]
  items.splice(id,1);
  res.end('Delete OK!') ;
}
function err(){
  res.end('Somethind Wrong!');
}
