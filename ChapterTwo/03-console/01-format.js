#!/usr/bin/node

const log=console.log;
var wd={
  'Name':'周弘',
  'QQ':'595853704',
  'Age':21
};

log('Name:%s\tAge:%d',wd.Name,wd.Age);
//log('Age:%d',wd.Age);
log('ZhouHong Info: %j',wd);

log('Name:',wd.Name);
log(`Age is ${wd.Age}`);


