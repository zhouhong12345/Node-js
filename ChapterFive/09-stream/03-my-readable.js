#!/usr/bin/node


const Read=require('stream').Readable;


MyReadable.prototype=Read.prototype;


function MyReadable(){
  Read.call(this);

  var c ='a'.charCodeAt(0);
  MyReadable.prototype._read=function(){
    this.push(String.fromCharCode(c++));
    if(c >'z'.charCodeAt(0)) this.push(null);
  }
}



module.exports=MyReadable;

