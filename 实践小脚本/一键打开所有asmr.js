let a=document.getElementsByClassName('item-title')
let i=0
setInterval(() => {
  if (a[i].children[1].innerHTML=='隐藏置顶帖') {
    open(a[i].children[2].href)
    i++
  } else {
    open(a[i].children[1].href)
    i++  
  }
}, 100);
