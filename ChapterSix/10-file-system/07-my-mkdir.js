#!/usr/bin/node

const fs=require('fs'),
      dir=process.argv[3];

fs.mkdirSync(dir);
