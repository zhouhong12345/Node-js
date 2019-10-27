#!/usr/bin/node


const http = require('http'),
      qs=require('querystring'),
      fs=require('fs')//读文件需要
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
//read html file
  var html=fs.readFileSync('todo.html').toString('utf8');

//write real data 
  html=html.replace('%',items.map(function(item){
    return '<li>'+item+'</li>'
  }).join('\n'));
//return html string
  return html;


//return html string

}

