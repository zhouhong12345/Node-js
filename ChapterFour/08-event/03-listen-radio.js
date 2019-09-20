#!/usr/bin/node


const EventEmitter=require('events').EventEmitter,
      util        =require('util');

function Radio(station){
 /* EventEmitter.call(this);*/

  var self=this;

  for(var n in EventEmitter.prototype){
    this[n]=EventEmitter.prototype[n];
  }

  setTimeout(()=>{
    self.emit('play',station);
  },0);
  setTimeout(()=>{
    self.emit('stop',station);
  },5000);
}

util.inherits(Radio,EventEmitter);

module.exports=Radio;

