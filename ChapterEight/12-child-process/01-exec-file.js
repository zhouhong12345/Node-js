#!/usr/bin/node

const cp=require('child_process');
/*
cp.execFile('cat',['-n','01-exec-file.js'],function(err,out,error){
  if(err){
    console.log(err.message);
    process.exit(1);
  }
  console.log(out);
});
*/
cp.execFile('./02-child.js',[],function(err,out,error){
  if(err){
    console.log(err.message);
    process.exit(1);
  }
  console.log(out);
});
