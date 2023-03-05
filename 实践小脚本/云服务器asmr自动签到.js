// ==UserScript==
// @name         云服务器asmr自动签到
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://eatasmr.com/tasks/attendance
// @match        https://eatasmr.com/
// @grant        none
// ==/UserScript==

(function() {
  if (
    window.location.href === 'https://eatasmr.com/tasks/attendance'
  ) {
    let btn = document.querySelector(".abutton");
    btn.click();
    console.log("现在开始计时");
    function JISHI() {
      console.log("经过了一小时");
    }
    setInterval(JISHI,3600000 );//
    function QIANDAO() {
      location.replace("https://eatasmr.com/tasks/attendance");
    }
    setInterval(QIANDAO,21600000 );
  }
  else{
    console.log("现在开始计时");
    function JISHI() {
    console.log("经过了一小时");
    }
    setInterval(JISHI,3600000 );//
    function QIANDAO2() {
      location.replace("https://eatasmr.com/");
    }
    setInterval(QIANDAO2,21600000 );
    document.getElementById('menu-item-13336').firstChild.firstChild.click()
    document.getElementById('lwa_user_login').value = 'saruyama'
    document.getElementById('lwa_user_pass').value = 'f%Vq)Nl#iP#K'
    document.getElementById('loginBtn').click()
  }
})();