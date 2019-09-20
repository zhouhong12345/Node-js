#!/usr/bin/node

const fs=require('fs'),
      src=process.argv[2]
      dst=process.argv[3];

//src.pip(dst)
//src=fs.createreadstream
//dst=fs.createrwritestream
fs.createReadStream(src).pipe(fs.createWriteStream(dst));



