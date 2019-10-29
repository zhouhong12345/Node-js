#!/usr/bin/node

const mysql=require('mysql'),
      con=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'ddd',
        database:'test'
      });
con.connect();
//增
con.query('insert into books(book_id,title,status) values(?,?,?)',['103','wangding',0],(err,result)=>{
  if(err){
    console.lo(err.message);
    process.exit(1);
  }
})
//删

//改

//查

