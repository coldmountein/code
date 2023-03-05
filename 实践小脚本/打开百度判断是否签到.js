// ==UserScript==
// @name         百度asmr自动签到
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.baidu.com/
// @match        https://eatasmr.com/tasks/attendance
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    /**
     * 日期格式化
     * @param Number time 时间戳
     * @param String format 格式
     */
    function dateFormat(time, format) {
      const t = new Date(time);
      // 日期格式
      format = format || "Y-m-d h:i:s";
      let year = t.getFullYear();
      // 由于 getMonth 返回值会比正常月份小 1
      let month = t.getMonth() + 1;
      let day = t.getDate();
      let hours = t.getHours();
      let minutes = t.getMinutes();
      let seconds = t.getSeconds();

      const hash = {
        y: year,
        m: month,
        d: day,
        h: hours,
        i: minutes,
        s: seconds,
      };
      // 是否补 0
      const isAddZero = (o) => {
        return /M|D|H|I|S/.test(o);
      };
      return format.replace(/\w/g, (o) => {
        let rt = hash[o.toLocaleLowerCase()];
        return rt > 10 || !isAddZero(o) ? rt : `0${rt}`;
      });
    }
    let url = window.location.href;
    let today = new Date();
    let todaynumber = new Date().getTime();
    let today2 = new Date();
    today2.setHours(1, 0, 0, 0);
    let jizhunnumber = today2.setHours(1, 0, 0, 0);
    let zhongjian = localStorage.getItem("zuotian");
    zhongjian = +zhongjian;
    console.log("现在时间为" + dateFormat(todaynumber, "Y-M-D H:I:S"));
    console.log("签到基准时间为" + dateFormat(jizhunnumber, "Y-M-D H:I:S"));
    console.log("上次签到时间为" + dateFormat(zhongjian, "Y-M-D H:I:S"));
    // console.log("today" + today);
    // console.log("today2" + today2);
    // console.log("zhongjian" + zhongjian);
    if (
      zhongjian < jizhunnumber &&
      today > today2 &&
      url != "https://eatasmr.com/tasks/attendance"
    ) {
      console.log("需要签到,执行跳转");
      open("https://eatasmr.com/tasks/attendance");
      localStorage.setItem("zuotian", todaynumber);
      let chakanshijian = localStorage.getItem("zuotian", "todaynumber");
      console.log("本次签到时间为" + today);
    } else if (
      zhongjian < jizhunnumber &&
      today > today2 &&
      url === "https://eatasmr.com/tasks/attendance"
    ) {
      console.log("需要签到且是签到页面");
      let btn = document.querySelector(".abutton");
      btn.click();
      localStorage.setItem("zuotian", todaynumber);
      let chakanshijian = localStorage.getItem("zuotian", "todaynumber");
      console.log("本次签到时间为" + today);
    }
    console.log("程序结束");

})();