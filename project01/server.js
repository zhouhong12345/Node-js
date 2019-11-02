#!/usr/bin/node

const http=require('http'),
      fs=require('fs'),
      log=console.log,
      addr=require('url'),
      qs=require('querystring');

      var chapterList = [
        {
            "chapterId": 1,
            "chapterName": "hello ,这是后台取到的数据",
            "imgPath": "images/1442457564979540.jpeg",
            "chapterDes": "注定，有些路，只能一个人走；有些事，",
            "chapterContent": "有人说，生活生活，就是生下来活下去，也有人说，生容易，活容易，生活不容易。有个朋友曾经和我说，这个世界，大多数人都没有生活，他们有的仅仅是生存。我赞同这种说法吧，只是生存，对于我们可能都是一种奢侈。每个人都在努力，努力为着这个本来不属于我们的生活和努力。对于含着金钥匙而成长的人，我们又羡慕又嫉妒。可我们没有想过，他们的先人在斩荆棘的时候，付出的艰辛和艰苦，才有了后代荣华。生活是什么,其实在我看来，生活是一种需要，在你最需要亲人的时候，亲人已经突然不在了。子欲养而亲不待，说得成其深，对于我们是一种思考。他们的离开，对于我们都是一种打击，可也是一种思考。离开时痛苦的，可是生活就是有生老病死，当你一直都习惯存在的人已经离开的时候，慢慢地，你会看透很多，这就是你面对生活所需要的。生活是什么？其实在我看来，生活就是一种打拼，当过年过节的时候你看着别人的父母带着自己的孩子快乐的回家的时候、尔你还只能在大街上流浪的时候。许多游子和打工的人或许都有这种感觉吧，为了赚钱，为了养家。当我们看到留守儿童那迷茫孤寂的眼神，不由得心痛的时候，或许你能理解那份父母为了儿女在外打拼的奔波吧。其实在我看来，生活就是一种漠然，当你真正遇到困难而朋友都不能帮你的时候、怕你还不了钱的时候。你只能自己默默面对这一切，这一切让你十分无奈，可是你明白了一个道理，借给你是道理，不借给你是合理。人之常情，所以，想怪不能怪的时候，你留下的只是无奈。</p><p>生活是什么？</p><p>其实生活就是无奈的活着，不得不无奈的活着。我们活在这个世界上，为的只是寻找一个目标，而生活，给我们的感受，却是无奈与绝望的迷茫。这时候你不能说生活是美好和美满的吧？可是正因为有痛苦，无奈与悲伤，我们才有开心的日子。也正因为有了生存，才有了生活。</p><p>无奈的生活，才给我们无奈的心情，无奈的心情才有了悠然见南山的豁达与开朗，这就是生活，这种生活才会有着无限的魅力，也只有这种魅力才能吸引我们一直向前",
            "publishTimer": "2019-08-19",
            "author": "admin",
            "views": 1022
        },
        {
            "chapterId": 2,
            "chapterName": "那些不是事",
            "imgPath": "images/1442201163344838-lp.jpg",
            "chapterDes": "人生，原本就该这样。再大的事，无非是个经历而己。明天的太阳照样升起，就像罗俊杰个人博客​的时候水来土掩，兵来将挡。任何事情都会成为过去，只要有好的心态，就可以面对人生的.",
            "chapterContent": "有人说，生活生活，就是生下来活下去，也有人说，生容易，活容易，生活不容易。有个朋友曾经和我说，这个世界，大多数人都没有生活，他们有的仅仅是生存。我赞同这种说法吧，只是生存，对于我们可能都是一种奢侈。每个人都在努力，努力为着这个本来不属于我们的生活和努力。对于含着金钥匙而成长的人，我们又羡慕又嫉妒。可我们没有想过，他们的先人在斩荆棘的时候，付出的艰辛和艰苦，才有了后代荣华。生活是什么,其实在我看来，生活是一种需要，在你最需要亲人的时候，亲人已经突然不在了。子欲养而亲不待，说得成其深，对于我们是一种思考。他们的离开，对于我们都是一种打击，可也是一种思考。离开时痛苦的，可是生活就是有生老病死，当你一直都习惯存在的人已经离开的时候，慢慢地，你会看透很多，这就是你面对生活所需要的。生活是什么？其实在我看来，生活就是一种打拼，当过年过节的时候你看着别人的父母带着自己的孩子快乐的回家的时候、尔你还只能在大街上流浪的时候。许多游子和打工的人或许都有这种感觉吧，为了赚钱，为了养家。当我们看到留守儿童那迷茫孤寂的眼神，不由得心痛的时候，或许你能理解那份父母为了儿女在外打拼的奔波吧。其实在我看来，生活就是一种漠然，当你真正遇到困难而朋友都不能帮你的时候、怕你还不了钱的时候。你只能自己默默面对这一切，这一切让你十分无奈，可是你明白了一个道理，借给你是道理，不借给你是合理。人之常情，所以，想怪不能怪的时候，你留下的只是无奈。</p><p>生活是什么？</p><p>其实生活就是无奈的活着，不得不无奈的活着。我们活在这个世界上，为的只是寻找一个目标，而生活，给我们的感受，却是无奈与绝望的迷茫。这时候你不能说生活是美好和美满的吧？可是正因为有痛苦，无奈与悲伤，我们才有开心的日子。也正因为有了生存，才有了生活。</p><p>无奈的生活，才给我们无奈的心情，无奈的心情才有了悠然见南山的豁达与开朗，这就是生活，这种生活才会有着无限的魅力，也只有这种魅力才能吸引我们一直向前",
            "publishTimer": "2019-08-19",
            "author": "admin",
            "views": 102
        },
        {
            "chapterId": 3,
            "chapterName": "只想，留住心中的那份静美",
            "imgPath": "images/1442642178239101-lp.jpg",
            "chapterDes": "在这个鸟语花香的季节,踏着早晨罗俊杰个人博客的一缕光芒在小路间走着,呼吸着这自然的清晰空气，只想，衣袂飘飘，信步于绿荫小道，或俯首听花开，或低眉赏花香，盈脉脉春意，于眼波中...",
            "chapterContent": "有人说，生活生活，就是生下来活下去，也有人说，生容易，活容易，生活不容易。有个朋友曾经和我说，这个世界，大多数人都没有生活，他们有的仅仅是生存。我赞同这种说法吧，只是生存，对于我们可能都是一种奢侈。每个人都在努力，努力为着这个本来不属于我们的生活和努力。对于含着金钥匙而成长的人，我们又羡慕又嫉妒。可我们没有想过，他们的先人在斩荆棘的时候，付出的艰辛和艰苦，才有了后代荣华。生活是什么,其实在我看来，生活是一种需要，在你最需要亲人的时候，亲人已经突然不在了。子欲养而亲不待，说得成其深，对于我们是一种思考。他们的离开，对于我们都是一种打击，可也是一种思考。离开时痛苦的，可是生活就是有生老病死，当你一直都习惯存在的人已经离开的时候，慢慢地，你会看透很多，这就是你面对生活所需要的。生活是什么？其实在我看来，生活就是一种打拼，当过年过节的时候你看着别人的父母带着自己的孩子快乐的回家的时候、尔你还只能在大街上流浪的时候。许多游子和打工的人或许都有这种感觉吧，为了赚钱，为了养家。当我们看到留守儿童那迷茫孤寂的眼神，不由得心痛的时候，或许你能理解那份父母为了儿女在外打拼的奔波吧。其实在我看来，生活就是一种漠然，当你真正遇到困难而朋友都不能帮你的时候、怕你还不了钱的时候。你只能自己默默面对这一切，这一切让你十分无奈，可是你明白了一个道理，借给你是道理，不借给你是合理。人之常情，所以，想怪不能怪的时候，你留下的只是无奈。</p><p>生活是什么？</p><p>其实生活就是无奈的活着，不得不无奈的活着。我们活在这个世界上，为的只是寻找一个目标，而生活，给我们的感受，却是无奈与绝望的迷茫。这时候你不能说生活是美好和美满的吧？可是正因为有痛苦，无奈与悲伤，我们才有开心的日子。也正因为有了生存，才有了生活。</p><p>无奈的生活，才给我们无奈的心情，无奈的心情才有了悠然见南山的豁达与开朗，这就是生活，这种生活才会有着无限的魅力，也只有这种魅力才能吸引我们一直向前",
            "publishTimer": "2019-08-19",
            "author": "admin",
            "views": 202
        },
        {
            "chapterId": 4,
            "chapterName": "所以才会美",
            "imgPath": "images/1442539025939884-lp.jpg",
            "chapterDes": "人，越简单就会越快乐;水，掺杂东西越少才会显得清澈靓丽。大自然越安静,才会体现它的本质。人生就是这样，倘若有运，不用祈求，因为祈求也是无用。倘若无运，无需悲伤，因为悲...",
            "chapterContent": "有人说，生活生活，就是生下来活下去，也有人说，生容易，活容易，生活不容易。有个朋友曾经和我说，这个世界，大多数人都没有生活，他们有的仅仅是生存。我赞同这种说法吧，只是生存，对于我们可能都是一种奢侈。每个人都在努力，努力为着这个本来不属于我们的生活和努力。对于含着金钥匙而成长的人，我们又羡慕又嫉妒。可我们没有想过，他们的先人在斩荆棘的时候，付出的艰辛和艰苦，才有了后代荣华。生活是什么,其实在我看来，生活是一种需要，在你最需要亲人的时候，亲人已经突然不在了。子欲养而亲不待，说得成其深，对于我们是一种思考。他们的离开，对于我们都是一种打击，可也是一种思考。离开时痛苦的，可是生活就是有生老病死，当你一直都习惯存在的人已经离开的时候，慢慢地，你会看透很多，这就是你面对生活所需要的。生活是什么？其实在我看来，生活就是一种打拼，当过年过节的时候你看着别人的父母带着自己的孩子快乐的回家的时候、尔你还只能在大街上流浪的时候。许多游子和打工的人或许都有这种感觉吧，为了赚钱，为了养家。当我们看到留守儿童那迷茫孤寂的眼神，不由得心痛的时候，或许你能理解那份父母为了儿女在外打拼的奔波吧。其实在我看来，生活就是一种漠然，当你真正遇到困难而朋友都不能帮你的时候、怕你还不了钱的时候。你只能自己默默面对这一切，这一切让你十分无奈，可是你明白了一个道理，借给你是道理，不借给你是合理。人之常情，所以，想怪不能怪的时候，你留下的只是无奈。</p><p>生活是什么？</p><p>其实生活就是无奈的活着，不得不无奈的活着。我们活在这个世界上，为的只是寻找一个目标，而生活，给我们的感受，却是无奈与绝望的迷茫。这时候你不能说生活是美好和美满的吧？可是正因为有痛苦，无奈与悲伤，我们才有开心的日子。也正因为有了生存，才有了生活。</p><p>无奈的生活，才给我们无奈的心情，无奈的心情才有了悠然见南山的豁达与开朗，这就是生活，这种生活才会有着无限的魅力，也只有这种魅力才能吸引我们一直向前",
            "publishTimer": "2019-08-19",
            "author": "admin",
            "views": 102
        }
        ];  

        var userList = [
          {username: "admin", pwd: "admin"}
        ];
        var login=[{judge:'false'}];
    
http.createServer((req,res)=>{
  var sub=req.url.substr(req.url.indexOf("=") + 1);
  var qy=qs.parse(addr.parse(req.url).query).chapterId;
 //请求静态页面 
  if(req.url === '/list/'){
    var htmlOne=fs.readFileSync('./chapterList.html');
    res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
    res.end(htmlOne); 
  }
  else if(sub === '1'||sub==='2'||sub==='3'||sub==='4'){
    if(addr.parse(req.url).pathname==='/detail'){
      if(qy ==='1'){
       var data=JSON.stringify(chapterList[0]);
        res.setHeader('Content-Length',Buffer.byteLength(data));
        res.setHeader('Content-Type','text/plain;charset="utf-8"');
        res.setHeader('Access-Control-Allow-Origin','*');//跨域访问
        res.end(data);  
        return;
      }
      else if(qy==='2'){
        var data=JSON.stringify(chapterList[1]);
        res.setHeader('Content-Length',Buffer.byteLength(data));
        res.setHeader('Content-Type','text/plain;charset="utf-8"');
        res.setHeader('Access-Control-Allow-Origin','*');//跨域访问
        res.end(data);
        return;
      }
      else if(qy==='3'){
        var data=JSON.stringify(chapterList[2]);
        res.setHeader('Content-Length',Buffer.byteLength(data));
        res.setHeader('Content-Type','text/plain;charset="utf-8"');
        res.setHeader('Access-Control-Allow-Origin','*');//跨域访问
        res.end(data);
        return;
      }
      else if(qy==='4'){
        var data=JSON.stringify(chapterList[3]);
        res.setHeader('Content-Length',Buffer.byteLength(data));
        res.setHeader('Content-Type','text/plain;charset="utf-8"');
        res.setHeader('Access-Control-Allow-Origin','*');//跨域访问
        res.end(data);
        return;
      }
    }
      var htmlTwo=fs.readFileSync('./chapter.html');
      res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
      res.end(htmlTwo);
  }
  else if(req.url==='/login/'){
    var htmlThree=fs.readFileSync('./login.html');
    res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
    res.end(htmlThree);
  }
  else if(req.url==='/loginTo/'){
    var dataTwo=JSON.stringify(login);
    res.setHeader('Content-Length',Buffer.byteLength(dataTwo));
    res.setHeader('Content-Type','text/plain;charset="utf-8"');
    res.setHeader('Access-Control-Allow-Origin','*');//跨域访问
    res.end(dataTwo);
  }
  else if(req.url==='/listmanager/'){
    var htmlFour=fs.readFileSync('./list.html');
    res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
    res.end(htmlFour);
  }
  else if(req.url==='/addChapter/'){
    var htmlFive=fs.readFileSync('./addChapter.html');
    res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
    res.end(htmlFive);
  }
  else if(req.url==='/add'){
    var dataThree=JSON.stringify(chapterList);
    res.setHeader('Content-Length',Buffer.byteLength(dataThree));
    res.setHeader('Content-Type','text/plain;charset="utf-8"');
    res.setHeader('Access-Control-Allow-Origin','*');//跨域访问
    res.end(dataThree);
  }

  
  else if(req.url !=='/list/' && req.url!=='/favicon.ico'){
    var cpurl = '.'+req.url;
    var cpurls=cpurl.split('/');
    var url=cpurls[0]+'/'+cpurls[1];
    var url2=cpurl.replace(url,'.');
    var type = url2.split('.')[2];
    var ns = fs.readFileSync(url2);

    if(type === 'css') {
      res.writeHead(200,{'Content-type':"text/"+type});
      ns = ns.toString('utf8');
    } else {
      res.writeHead(200,{'Content-type':"image/"+type});  
    }
    res.end(ns);
    return;
  }
  if(req.method==='POST'){
    req.on('data',(data)=>{
      if(req.url==='/login/'){
        var inner=JSON.parse(data);
        if(inner.name===userList[0].username && inner.password===userList[0].pwd){
          login[0].judge=true;
        }  
      }
      else if(req.url==='/add'){
        var innerOne=JSON.parse(data);
        chapterList.push(innerOne);
      }
    });
    req.on('end',()=>{
      res.end();
    });
  } 
 }).listen(8083);
