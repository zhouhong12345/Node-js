#!/usr/bin/node


function Radio(station){
  var _listener={};

  setTimeout(()=>{
    emit('play',station);
  },0);
  setTimeout(()=>{
    emit('stop',station);
  },5000);

  function emit(evt,arg){
    if(typeof(_listener[evt])==='undefined'){
       console.error('Error:%s note defined',evt);
       process.exit(1);
    }

    _listener[evt].forEach((fn)=>{
      fn.call(this,arg);
    });
  }
  this.on=(evt,fn)=>{
    if(typeof _listener[evt]==='undefined'){
       _listener[evt]=[];
    }

    _listener[evt].push(fn);
  };
}

module.exports=Radio;

