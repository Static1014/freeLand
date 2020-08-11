$(function () {
  document.title = "《极客学院》Web前段开发教学 - 第一部分：H5+CSS+JS";

  var BASE_VIDEO_URL = "https://www.bilibili.com/video/BV1Mx411m7fd?p=";
  var menuList = [
    "观看视频前必读",
    "1.1.1. 走进前段工程师的世界",

    "2.1.1. HTML5开发前的准备",
    "2.1.2. 开发前的准备 - 快捷键",

    "2.2.1. HTML5简介",
    "2.2.2. HTML5集成开发环境搭建",
    "2.2.3. HTML5基础详解",

    "2.3.1. HTML5元素简介及使用方法",
    "2.3.2. HTML5属性使用方法",
    "2.3.3. HTML5格式化及使用",

    "2.4.1. HTML5样式的使用",
    "2.4.2. HTML5链接属性及使用",
    "2.4.2. HTML5表格使用",

    "2.5.1. HTML5列表的使用",
    "2.5.2. HTML5块元素标签的使用",
    "2.5.3. HTML5布局的使用",

    "2.6.1. HTML5表单的使用",
  ];

  /**
   * 创建目录
   */
  function createMenu() {
    let menu = $("<ul></ul>");

    for (let i = 0; i < menuList.length; i++) {

      let videoUrl = BASE_VIDEO_URL + (i + 1);
      let title = "P" + (i + 1) + " " + menuList[i];

      let li = $("<li></li>");

      let a = $("<a>" + title + "</a>");
      a.attr("href", videoUrl);
      setMenuLink(a, "p" + (i + 1) + ".html", videoUrl, title);
      li.append(a);

      menu.append(li);
    }

    $("body").append(menu);
  }

  function setMenuLink(a, url, videoUrl, title) {
    $.ajax({
      url: url,
      success: function (result, status, xhr) {
        if (xhr.status === 200) {
          a.attr("href", encodeURI(url + "?title=" + title + "&video=" + videoUrl));
          let sup = $("<sup style='color: red'>演示示例</sup>");
          a.append(sup);
        }
      },
      error: function (xhr) {
        let sup = $("<sup style='color: skyblue'>video</sup>");
        a.append(sup);
      }
    });
  }

  createMenu();
});