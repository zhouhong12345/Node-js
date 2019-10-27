#!/usr/bin/node

const http=require('https'),
      cheerio=require('cheerio'),
      log=console.log,
      print=require('util').debuglog('crawler'),
      addr='https://segmentfault.com/lives/free';

http.get(addr,function(res){
  var result='';
  res.on('data',function(data){
    result+=data;
  });
 //页面解析
  res.on('end',function(){
    print(result);
    
    //page parse
    
    var $=cheerio.load(result);//把result页面字符串载入变成一个页面的对象
    $('body').find('.card-body').each(function(){
      print($(this).html());
      var cName=$(this).find('.card-title>a').text(),
      cURL=$(this).find('.card-title>a').attr('href');
      cURL='http://segmentfault.com'+cURL;
      
      if(cName ==='') return;
      log('课程名称：',cName);
      log('课程地址：',cURL);
      log('');
     });
  });
});
