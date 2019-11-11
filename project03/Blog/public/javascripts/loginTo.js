
  var b=document.getElementById('login');
  var username=document.getElementById('username');
  var password=document.getElementById('pwd');
  b.onclick=function(){
    fetch('http://localhost:3000/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
          name:username.value,
          pwd:password.value
      })
    })
    fetch('http://localhost:3000/loginTo').then(function(res){
      res.text().then(function(txt){
          if(JSON.parse(txt)[0].judge==true){
             window.location.href='http://localhost:3000/list';
          }
          else{
          alert('用户名或密码错误！');
          }
      })
  });
 }

