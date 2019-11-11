var express = require('express');
var router = express.Router();

var data=require('../views/data.json');


var login=[{judge:'false'}];

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login',{Login:login});
});

router.post('/login',function(req,res,next){
  if(req.body.name===data.users[0].username && req.body.pwd===data.users[0].password){
    login[0].judge=true;
    res.render('login');
  }
  else{
    login[0].judge=false;
  }
})
router.get('/list',function(req,res,next){
  res.render('list',{titleOne:data.chapterList[0].title,titleTwo:data.chapterList[1].title,titleThree:data.chapterList[2].title,viewsOne:data.chapterList[0].views,viewsTwo:data.chapterList[1].views,viewsThree:data.chapterList[2].views});
})

router.get('/loginTo',function(req,res,next){
  var judge=JSON.stringify(login);
  res.setHeader('Content-Length',Buffer.byteLength(judge));
  res.setHeader('Content-Type','text/plain;charset="utf-8"');
  res.setHeader('Access-Control-Allow-Origin','*');
  res.end(judge);
})


module.exports = router;
