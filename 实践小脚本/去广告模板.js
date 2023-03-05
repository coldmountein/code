(function () {

    // 只需要在此处定义需要隐藏元素
    var clearElementArr = [
        '#aniBox','#banner-container','#zuo','#you','.vm-skin vm-skin-left','.vm-skin vm-skin-right'
    ];

    // 这是架子代码，不用改动
    console.log("准备隐藏以下元素 >>> " + clearElementArr);

    window.pageC = function (clearElements) {
        let style = document.createElement("style");
        style.innerText += `html {overflow: auto !important;} `;
        if (typeof (clearElements) === "object") {
            clearElements.forEach(cE => {
                style.innerText += `${cE} {display: none !important;} `
            });
        } else { 
            console.error("param error,require array!"); 
        }
        var e = document.getElementsByClassName("vm-skin vm-skin-left");
        e[0].id = "zuo";
        var g = document.getElementById("zuo");
        g.remove();
        var f = document.getElementsByClassName("vm-skin vm-skin-right");
        f[0].id = "you";
        var h = document.getElementById("you");
        h.remove();
        document.head.appendChild(style);
    };
    pageC(clearElementArr);
    console.log("清理完成！");
})();