/**
 * 获取url参数
 * @param name 参数名
 * @returns {string|null}
 */
function getGetParam(name) {
    // 构造一个含有目标参数的正则表达式对象
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    // 匹配目标参数
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
        let val = decodeURI(r[2]);
        console.info("参数" + name + "：" + val);
        return val;
    }
    // 返回参数值
    return null;
}

/**
 * 判断地址是否存在
 * @return {boolean}
 */
function isExistFile(url) {
    let http;
    if (window.XMLHttpRequest) {
        http = new XMLHttpRequest();
    } else {
        http = new ActiveXObject("Microsoft.XMLHTTP");
    }
    http.open("HEAD", url, false);
    http.send();
    return http.status !== 404;
}

/**
 * 返回上一页
 */
function goBack() {
    window.history.back();
}

function getBodySize() {
    return {
        width: document.body.clientWidth,
        height: document.body.clientHeight
    };
}