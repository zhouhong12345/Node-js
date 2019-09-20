#!/usr/bin/node

const msg=['Name','Email','QQ','Mobile'];
var usr={},i=0;//空对象

console.log(msg[0] + ':');

process.stdin.on('data',function(data){
  usr[msg[i]]=data.slice(0,data.length-1).toString('utf8');
  console.log(msg[++i] + ':');//相当于循环起来
});


process.stdin.on('end',function(){
  console.log(usr);
});
