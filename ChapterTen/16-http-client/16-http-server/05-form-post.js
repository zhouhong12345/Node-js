#!/usr/bin/node


const http = require('http'),
      qs=require('querystring'),
      log=console.log;

var items=['eat'];

http.createServer((req, res) => {
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log(''); 
  
   if(req.method==='GET' && req.url === '/'){
    //200 ok
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(getHTML()); 
  }
  else if(req.method ==='POST' && req.url =='/'){
    // submit data
    //POST方法数据在请求体里面
     var it='';
     req.on('data',(data)=>{
        it+=data;
     });
     req.on('end',()=>{
         if(typeof it !== 'undefined'){
             items.push(qs.parse(it).item);
         }
         res.end(getHTML());
     });
  }
   else{
     //error,错误处理
     res.end('error');
   }
}).listen(8080);

function getHTML(){
  return ''
   + '<!DOCTYPE html>'
   + '<html lang="en">'
   + '<head>'
   + '<meta charset="UTF-8">'
   + '<title>TODO List</title>'
   + '</head>'
   + '<body>'
   + '<h1>TODO List</h1>'
   +'<ul>'
   +items.map(function(a){
      return '<li>'+a+'</li>';
  }).join('\n')
  +'</ul>'
   +'<form method="POST" action="/">'
    +'<input type="text" name="item">'
    +'<input type="submit" value="提交">'
   +'</form>'
   + '</body>'
   + '</html>';
}

