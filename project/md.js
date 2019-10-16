#!/usr/bin/node

const fs=require('fs'),
      cmd=process.argv[2],
      file=process.argv[3] || __dirname;

if(cmd=='list'){
  list();
}
else if(cmd=='mkdir'){
  makeDir();
}
else{
  console.log('命令行参数错误');
}
function makeDir(){
  fs.mkdir(file,function(err){
    if(err){
      console.log(err);
    }
    else{
      console.log('创建成功！');
    }
  });
}

function list(){
  var arr=[];
  for(var i=0;i<fs.readdirSync(file).length;i++){
    arr.push({"filename":fs.readdirSync(file)[i],"fileSzie":fs.statSync(fs.readdirSync(file)[i]).size});
  }
  console.log(arr);
}


