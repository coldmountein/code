(function() {
    document.getElementsByClassName('gray')[0].setAttribute('class','')
   // 生成返回顶部按钮
   var btn = document.createElement('button');
   // 按钮文字
   btn.innerText = '⇧';
   // 添加按钮的样式类名class值为backTOP
   btn.setAttribute('class', 'backTOP');
   // 生成style标签
   var style = document.createElement('style');
   // 把样式写进去
   style.innerText = `.backTOP{position:fixed;top:650px;right:15px;width:75px;height:55px;padding:3px 5px;border:1px solid #0d6efd;cursor:pointer;color:#0d6efd;font-size:40px;background-color:transparent;border-radius:5px;transition:color .15s ease-in-out,background-color .15s ease-in-out;z-index:9999999999999;}.backTOP:hover{background-color:#0d6efd;color:#fff;}`;
   // 在head中添加style标签
   document.head.appendChild(style);
   // 在body中添加button按钮
   document.body.appendChild(btn);
   // 点击按钮去执行回到顶部函数
   document.querySelector('.backTOP').addEventListener('click', function () {
       window.scrollTo({
           top: 0,
           behavior: "smooth"
       });
   })
})();