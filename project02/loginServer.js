const http=require('http'),
      qs=require('querystring'),
      log=console.log;

var logincount=1;

http.createServer((req,res)=>{
    log(`${req.method} ${req.url} ${req.httpVersion}`);
    log(req.headers);
    log();

    var user='';

    if(req.method==='POST' && req.url==='/login'){
        req.on('data',(data)=>{
           user+=data; 
        })
        req.on('end',()=>{
            var use=qs.parse(user);
            if(use.username==='zhangsan' && use.pwd==='123'){
                showHome(req,res);
            }
            else{
                showErr(res);
            }
        });
    }
    if(req.method==='GET'){
            showLogin(res);
    }
}).listen(8081);

function showErr(res){
    res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
    res.end('用户或密码错误');
}

function showLogin(res){
    var html='<!DOCTYPE html>'
             +'<html lang="en">'
             +'<head>'
             +'<meta charset="UTF-8">'
             +'<meta name="viewport" content="width=device-width, initial-scale=1.0">'
             +'<meta http-equiv="X-UA-Compatible" content="ie=edge">'
             +'<title>Document</title>'
             +'</head>'
             +'<body>'
             +'    <form action="/login" method="post">'
             +'        <input type="text" name="username" />'
             +'        <input type="pwd" name="pwd" />'
             +'        <input type="submit" value="login" />'
             +'    </form>'
             +'</body>'
             +'</html>'

    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', Buffer.byteLength(html));
    res.statusCode = 200;
    res.end(html);
}
function showHome(req,res){
    //log(req.headers['cookie']);
    if(typeof req.headers['cookie']!=='undefined'){
        var data=req.headers['cookie'].split('=');
        logincount=Number(data[1])+1;
    }
    res.statusCode=200;
    res.setHeader('Set-cookie',`count=${logincount};max-age=600`);
    res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
    res.end(`zhangsan这是您第 ${logincount} 次登录`);
}