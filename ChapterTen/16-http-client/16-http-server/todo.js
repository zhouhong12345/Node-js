/*global fetch:true*/
$(function(){
  var $todo=$('#todo'),
      $btnOk=$('#okButton'),
      $out=$('#output');
  var items=[];

  getItems();
  $btnOk.click(function(){
    if($todo.val()==='') return;
    //有了fetch功能，在后端中的数组添加内容，通过getHTML函数获取到后端item数组，显示到页面中，起到刷新后仍保留数组内容的作用
    fetch('http://192.168.239.144:8080',{method:'POST',body:$todo.val()});
    // console.log($todo.val());
    items.push($todo.val());
    // console.log(items);
    showData();
  });
  function getItems(){
    fetch('http://192.168.239.144:8080/').then(function(res){
         res.text().then(function(txt){
            console.log(txt);
             items=JSON.parse(txt);
             console.log(items);
             showData();
         });
     });
  }
  function showData(){
    console.log(items);
    $out.html('');
    
    var $ul=$('<ul></ul>');
    $ul.html(items.map(function(item){return'<li>'+item+'</li>';}).join('\n'));
    $out.append($ul);
  }
});
