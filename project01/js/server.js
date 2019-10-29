#!/usr/bin/node

const http=require('http'),
      fs=require('fs'),
      log=console.log;

http.createServer((req,res)=>{
  log(`${req.method} ${req.url} ${req.httpVersion}`);
  log(req.headers);
  log('');

  if(req.url === '/list'){
    res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
    res.end(getHTML());  
  }
  else if(req.url != '/list' && req.url !='/favicon.ico'){
    //log(req.url);
    var cpurl = '.'+'.'+req.url;
    var type = req.url.split('.')[1];
    res.writeHead(200,{'Content-type':"text/"+type});
    var ns = fs.readFileSync(cpurl);
    res.end(ns);
  }
}).listen(8080);

function getHTML(){
  var html=fs.readFileSync('../chapterList.html');
  return html;
}
