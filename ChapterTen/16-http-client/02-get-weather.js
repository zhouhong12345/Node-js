#!/usr/bin/node

const http=require('http'),
      city=process.argv[2] || '石家庄',
      log=console.log;

var addr='http://v.juhe.cn/weather/index?cityname='+city+'&key=70b20823f67b5f0ca3358b796fd83260';

//console.log(addr);
//console.log(global.encodeURI(addr));

http.get(global.encodeURI(addr),function(res){
  //print start line
  console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);

  //print response header
  log(res.headers);
  log('');
  //print response body
  //res.pipe(process.stdout);
  var weather='';
  res.on('data',function(data){
    weather+=data;
  });
  res.on('end',function(){
    weather=JSON.parse(weather);//json字符串解析成对象
    log(weather.result.today.temperature);
  });
  
});

