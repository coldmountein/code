// ==UserScript==
// @name         云服务器asmr自动签到
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://eatasmr.com/*
// @grant        none
// ==/UserScript==

(function() {
  //方法一 while循环方式
  function sleep(ms) {
    let start = Date.now()
    let end = start + ms
    while(true) {
        if(Date.now() > end) {
            return
        }
    }
  }
  //
    let url = window.location.href;
    if (url==='https://eatasmr.com/') {
      //点击登录
      document.getElementById('menu-item-13336').firstChild.firstChild.click()
      sleep(5000)
      //点击登录按键
      document.getElementById('loginBtn').click()
    }
    else if (url==='https://eatasmr.com/tasks/attendance') {
      //点击签到按键
      document.querySelector(".abutton").click();
    }
    else{
      location.replace("https://eatasmr.com/home");
      sleep(1000)
      document.getElementsByClassName('barArea tc')[0].firstChild.click()
    }
  
  })();