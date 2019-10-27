#!/usr/bin/node

const http = require('http'),
      log=console.log,
      fs=require('fs'),
      qs=require('querystring');

http.createServer((req, res) => {
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');
  
  var fl='';

  req.setEncoding('binary');//设置编码为binary
  req.on('data',(data)=>{
    fl+=data;
  });
  req.on('end',()=>{
    //step 1:parse fl
    //step 1.1:get file name
    var filename=qs.parse(fl.split('\r\n')[1].split(';')[2].trim()).filename;//解析完就是简单对象自变量

    filename=filename.slice(1,filename.length-1);
    log(filename);
    
    //step 1.2:get file data
    var filedata=fl.split('\r\n')[4];
    //log(new Buffer(fl.split('\r\n')[4]).toString('utf8'));
    log(filedata);
    //step 2:save file
    fs.writeFileSync(filename,filedata,{'encoding':'binary'});//文件存在当前目录下
  })

  res.end('OK!'); 
 }).listen(8080);

