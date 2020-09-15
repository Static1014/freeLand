/**
 * 获取当前时间
 */
function currentTimeStr() {
  let d = new Date();
  return d.getFullYear() + "." + (d.getMonth() + 1) + "." + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

/**
 * 日志打印开关
 * @type {boolean}
 */
let log = true;

/**
 * 打印错误信息
 * @param msg
 * @param tag 标记
 */
function logE(msg, tag) {
  if (log) {
    if (!tag) {
      tag = "";
    }
    console.error(currentTimeStr() + " : " + tag + "  ===>  " + JSON.stringify(msg));
  }
}

/**
 * 打印正常信息
 * @param msg
 * @param tag 标记
 */
function logI(msg, tag) {
  if (log) {
    if (!tag) {
      tag = "";
    }
    console.info(currentTimeStr() + " : " + tag + "  ===>  " + JSON.stringify(msg));
  }
}

/**
 * 打印警告信息
 * @param msg
 * @param tag 标记
 */
function logW(msg, tag) {
  if (log) {
    if (!tag) {
      tag = "";
    }
    console.warn(currentTimeStr() + " : " + tag + "  ===>  " + JSON.stringify(msg));
  }
}

/**
 * 获取url参数
 * @param name 参数名
 * @returns {string|null}
 */
function parseGetParam(name) {
  // 构造一个含有目标参数的正则表达式对象
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  // 匹配目标参数
  let r = window.location.search.substr(1).match(reg);
  if (r != null) {
    let val = decodeURI(r[2]);
    logI("参数" + name + "：" + val);
    return val;
  }
  // 返回参数值
  return null;
}

/**
 * 判断地址是否存在(同步)
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

/**
 * 获取屏幕尺寸
 * @returns {{screenWidth: number, screenHeight: number, bodyHeight: number, screenAvailWidth: number, screenAvailHeight: number, bodyWidth: number}}
 */
function getDeviceSize() {
  let size = {
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    screenAvailWidth: window.screen.availWidth,
    screenAvailHeight: window.screen.availHeight,
    bodyWidth: document.body.offsetWidth || document.documentElement.offsetWidth,
    bodyHeight: document.body.offsetHeight || document.documentElement.offsetHeight,
    ratio: window.devicePixelRatio
  };
  logI("设备尺寸：" + JSON.stringify(size));
  return size;
}

/**
 * 判断是否竖屏
 */
function isPortraitWindow() {
  let size = getDeviceSize();
  let is = size.screenHeight > size.screenWidth;
  logI("当前设备是竖屏：" + is);
  return is;
}

/**
 * 复制到剪切板
 * @param txt 内容
 */
function copyToClipboard(txt) {
  if (txt) {
    let i = document.createElement("input");
    i.setAttribute("readonly", 'readonly');
    i.setAttribute("value", txt);
    i.className = 'invisible';
    document.body.appendChild(i);
    i.setSelectionRange(0, txt.length);
    if (document.execCommand('copy')) {
      document.execCommand('copy');
      logI("复制成功: " + txt);
      showToast("复制成功");
    } else {
      showErrorToast("当前设备不支持复制到剪切板");
    }
    document.body.removeChild(i);
  }
}

/**
 * 显示红色Toast
 * @param txt 内容
 */
function showErrorToast(txt) {
  showToast(txt, "#EE554A", "#FFF", 2000);
}

function showSucToast(txt) {
  showToast(txt, "#73A04F", "#FFF", 1500);
}

/**
 * 显示toast
 * @param txt 内容
 * @param bgColor 背景色
 * @param fontColor 字体颜色
 * @param delayTime 停留时间
 */
function showToast(txt, bgColor, fontColor, delayTime) {
  if (txt) {
    let toast = $("#g-toast");
    if (toast.length < 1) {
      // 未添加toast元素
      toast = $("<span id='g-toast' class='toast-default-span'></span>");
      $("body").append(toast);
    }
    toast.css({
      bottom: "-1rem",
      maxWidth: isPortraitWindow() ? "80%" : "40%",
      backgroundColor: bgColor ? bgColor : "#777",
      color: fontColor ? fontColor : "#FFF"
    });
    toast.html(txt);

    if (!delayTime) {
      delayTime = 1000;
    }
    toast.stop().animate({
      bottom: "4rem",
      opacity: 1
    }).delay(delayTime).animate({
      bottom: -100,
      opacity: 0
    });
  }
}

/**
 * 获取元素jq对象实际尺寸
 * @param jqEl
 * @returns {ClientRect | DOMRect}
 */
function getRealRectInJq(jqEl) {
  return jqEl[0].getBoundingClientRect();
}

/**
 * 数组求和
 * @param arr
 */
function sum(arr) {
  return eval(arr.join("+"));
}

/**
 * 滚动到指定元素
 * @param jqEl  jQuery元素
 */
function scrollToJqEl(jqEl) {
  $("html, body").animate({
    scrollTop: jqEl.offset().top
  }, 300);
}

/**
 * 停止事件冒泡
 * @param event
 */
function stopActionBubble(event) {
  if (event && event.stopPropagation) {
    event.stopPropagation();
  } else {
    window.event.cancelBubble = true;
  }
}

/**
 * 懒加载启动
 */
function lazyLoadImg() {
  // 检查是否需要启动懒加载
  if ($("img[data-lazy-src]").length < 1) {
    logI("EasyLazyload - 未找到包含data-lazy-src属性的img元素，无需启动懒加载!");
    return;
  }

  // 检查是否引入EasyLazyload.js
  let isLazyJsIncluded = false;
  let scripts = $("body script[src]");
  for (let i = 0; i < scripts.length; i++) {
    let src = scripts[i].src;
    if (src.indexOf("libs/EasyLazyload.js") > 0) {
      isLazyJsIncluded = true;
      break;
    }
  }
  if (!isLazyJsIncluded) {
    logE("EasyLazyload - 使用EasyLazyload前须在body最后引入EasyLazyload.js!!!")
    return;
  }

  logI("启动懒加载 lazyLoadInit");

  lazyLoadInit({
    // 颜色蒙层
    coverColor: "white",
    // 元素蒙层
    // coverDiv: "",
    // 不可见img距离底部offsetBottom距离时开始加载图片
    offsetBottom: 100,
    // 不可见img距离顶部offsetBottom距离时开始加载图片
    offsetTopm: 100,
    // 图片显示动画时间
    showTime: 300,
    // onLoadBackEnd: function (i, jqEle) {
    //   // 图片完全显示回调
    // },
    // onLoadBackStart: function (i, jqEle) {
    //   // 图片下载完成回调
    // }
  });
}