#!/usr/bin/node

const stdin=process.stdin,
      stdout=process.stdout;

stdin.resume();

stdin.on('data',function(data){
  stdout.write(data.toString('utf8').toUpperCase());
});

