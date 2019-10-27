#!/usr/bin/node


const http=require('http'),
      fs=require('fs'),
      log=console.log;

http.createServer((req,res)=>{
  log(`${req.method} ${req.url} ${req.httpVersion}`);
  log(req.headers);
  log('');

  if(req.url === '/list'){
     // res.writeHead(200,{'Content-Type:':'text/html'});
      res.end(getHTML());
  }
}).listen(8080);

function getHTML(){
  var html=fs.readFileSync('a.html').toString('utf8');

  return html;
}
