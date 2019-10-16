#!/usr/bin/node

const cp=require('child_process');

console.log('I am father with id:',process.pid);

var child=cp.fork('./02-child.js');


/*
global.setTimeout(function(){
  console.log('father bye!');
  process.exit();
},5000);
*/

//向子进程发送信号
global.setTimeout(function(){
  child.send('Hello I your father!');
},2000);

