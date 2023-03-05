(function () {

    // 只需要在此处定义需要隐藏元素
    var clearElementArr = [
        'csdn', '.passport-container', 'passport-login-mark',
        '知乎', '.css-1izy64v', '.css-ysn1om','.Modal-wrapper','.signFlowModal','.Modal-backdrop',
        '百度搜索', '#s-top-left', '#s_top_wrap', '.s-top-right', '#s_main', '.s-bottom-layer-content','#content_right'
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
        document.head.appendChild(style);
    };
    pageC(clearElementArr);
    console.log("清理完成！");
})();