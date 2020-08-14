/**
 * 日志打印开关
 * @type {boolean}
 */
let log = true;

/**
 * 打印错误信息
 * @param msg
 */
function loge(msg) {
  if (log) {
    console.error(msg);
  }
}

/**
 * 打印正常信息
 * @param msg
 */
function logi(msg) {
  if (log) {
    console.info(msg);
  }
}

/**
 * 打印警告信息
 * @param msg
 */
function logw(msg) {
  if (log) {
    console.warn(msg);
  }
}

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
    bodyHeight: document.body.offsetHeight || document.documentElement.offsetHeight
  };
  logi("设备尺寸：" + size);
  return size;
}

/**
 * 判断是否竖屏
 */
function isPortraitWindow() {
  let size = getDeviceSize();
  let is = size.screenHeight > size.screenWidth;
  logi("当前设备是竖屏：" + is);
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
      logi("复制成功: " + txt);
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
  showToast(txt, "#EE554A", "#FFF");
}

/**
 * 显示toast
 * @param txt 内容
 * @param bgColor 背景色
 * @param fontColor 字体颜色
 */
function showToast(txt, bgColor, fontColor) {
  if (txt) {
    let toast = document.getElementById("g-toast");
    if (!toast) {
      toast = document.createElement("span");
      toast.id = "g-toast";
      document.body.append(toast);
    }
    toast.style.maxWidth = isPortraitWindow() ? "80%" : "40%";
    toast.className = "toast-default-span";

    if (bgColor && fontColor) {
      toast.style.backgroundColor = bgColor;
      toast.style.color = fontColor;
    }
    toast.innerHTML = txt;

    toast.style.display = 'inline';
    setTimeout(() => {
      toast.style.opacity = "1";
    }, 300);
    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => {
        toast.style.display = 'none';
      }, 300);
    }, 2000);
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