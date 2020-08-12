$(function () {
  document.title = "《极客学院》Web前段开发教学 - 第一部分：H5+CSS+JS";

  var BASE_VIDEO_URL = "https://www.bilibili.com/video/BV1Mx411m7fd?p=";
  var menuList = [
    "观看视频前必读",
    "1.1.1.走进前端工程师的世界",
    "2.1.1.HTML5开发前的准备",
    "2.1.2.开发前的准备-快捷键",
    "2.2.1.HTML5 简介",
    "2.2.2.HTML5 集成开发环境搭建",
    "2.2.3.HTML5 基础详解",
    "2.3.1.HTML5元素简介及使用方法",
    "2.3.2.HTML5属性使用方法",
    "2.3.3.HTML5格式化及使用",
    "2.4.1.HTML5样式的使用",
    "2.4.2.HTML5链接属性及使用",
    "2.4.3.HTML5表格使用",
    "2.5.1.HTML5列表的使用",
    "2.5.2.HTML5块元素标签的使用",
    "2.5.3.HTML5布局的使用",
    "2.6.1.HTML5表单的创建",
    "2.6.2.PHP环境搭建",
    "2.6.3.HTML5表单与PHP交互",
    "2.7.1.HTML5框架",
    "2.7.2.HTML5背景",
    "2.7.3.HTML5实体",
    "2.8.1.XHTML的规范化",
    "2.9.1.推出的理由及目标和语法的改变",
    "2.9.2.新增的元素和废除的元素以及新增的属性和废除的属性",
    "2.9.3.全局属性",
    "2.10.1.article 元素",
    "2.10.2.section 元素",
    "2.10.3.nav 元素",
    "2.10.4.aside 元素",
    "2.10.5.time 元素和 pubdate 属性",
    "2.11.1.header 元素",
    "2.11.2.footer 元素和 hgroup 元素",
    "2.11.3.address 元素和网页编排规则",
    "2.12.1.form 属性和 formaction 属性",
    "2.12.2.formmethod 和 formenctype 属性",
    "2.12.3.formtarget 属性和 autofocus 属性",
    "2.12.4.required 属性和 labels 属性",
    "2.13.1.control属性与placeholder属性",
    "2.13.2.list属性和AutoComplete属性",
    "2.13.3.pattern属性和SelectionDirection属性",
    "2.13.4.indeterminate属性和image提交按钮的height属性与width属性",
    "3.1.1.CSS基础-介绍及语法",
    "3.1.2.CSS基础-派生选择器",
    "3.1.3.CSS基础-id选择器",
    "3.1.4.CSS基础-类选择器",
    "3.1.5.CSS基础-属性选择器",
    "3.2.1.CSS样式-背景",
    "3.2.2.CSS样式-文本",
    "3.2.3.CSS样式-字体",
    "3.2.4.CSS样式-链接",
    "3.2.5.CSS样式-列表",
    "3.2.6.CSS样式-表格",
    "3.2.7.CSS样式-轮廓",
    "3.3.1.CSS定位-定位",
    "3.3.2.CSS定位-浮动",
    "3.3.3.CSS定位-浮动的应用",
    "3.4.1.CSS盒子模型-概述",
    "3.4.2.CSS盒子模型-内边距",
    "3.4.3.CSS盒子模型-边框",
    "3.4.4.CSS盒子模型-外边距",
    "3.4.5.CSS盒子模型-外边距合并",
    "3.4.6.CSS盒子模型-盒子模型应用",
    "3.5.1.CSS常用操作-对齐",
    "3.5.2.CSS常用操作-分类",
    "3.5.3.CSS常用操作-导航栏",
    "3.5.4.CSS常用操作-图片",
    "3.6.1.选择器-选择器详解(1)",
    "3.6.2.选择器-选择器详解(2)",
    "3.7.1.CSS动画-2D、3D转换",
    "3.7.2.CSS动画-过渡",
    "3.7.3.CSS动画-动画",
    "3.7.4.CSS动画-多列",
    "3.7.5.CSS瀑布流效果",
    "3.8.1.HTML与CSS简单页面效果实例",
    "4.1.1.Javascript基础-介绍、实现、输出",
    "4.1.2.Javascript基础-语法和注释",
    "4.1.3.Javascript基础-变量和数据类型",
    "4.2.1.Javascript语法-运算符(1)",
    "4.2.2.Javascript语法-运算符(2)",
    "4.2.3.Javascript语法-条件语句if...else",
    "4.2.4.Javascript语法-条件语句switch",
    "4.2.5.Javascript语法-循环语句for循环",
    "4.2.6.Javascript语法-循环语句while循环",
    "4.2.7.Javascript语法-跳转语句",
    "4.3.1.Javascript函数-了解函数的用途",
    "4.3.2.Javascript函数-定义函数",
    "4.3.3.Javascript函数-调用函数",
    "4.3.4.Javascript函数-带参数的函数",
    "4.3.5.Javascript函数-带返回值的函数",
    "4.3.6.Javascript函数-局部变量和全局变量",
    "4.4.1.Javascript异常捕获",
    "4.4.2.Javascript事件",
    "4.5.1.Javascript-DOM简介",
    "4.5.2.Javascript-DOM操作HTML",
    "4.5.3.Javascript-DOM操作CSS",
    "4.5.4.Javascript-DOM EventListener",
    "4.6.1.JS事件详解-事件流",
    "4.6.2.JS事件详解-事件处理",
    "4.6.3.JS事件详解-事件对象",
    "4.7.1.JS内置对象-什么是对象",
    "4.7.2.JS内置对象-String字符串对象",
    "4.7.3.JS内置对象-Date日期对象",
    "4.7.4.JS内置对象-Array数组对象",
    "4.7.5.JS内置对象-Math对象",
    "4.8.1.JSDOM对象控制HTML元素详解-1",
    "4.8.2.JSDOM对象控制HTML元素详解-2",
    "4.9.1.JS浏览器对象-window对象",
    "4.9.2.JS浏览器对象-计时器",
    "4.9.3.JS浏览器对象-History对象",
    "4.9.4.JS浏览器对象-Location对象",
    "4.9.5.JS浏览器对象-Screen对象",
    "4.10.1.JS瀑布流效果-布局",
    "4.10.2.JS瀑布流效果-1",
    "4.10.3.JS瀑布流效果-2",
    "4.11.1.JS面向对象-认识面向对象",
    "4.11.2.JS面向对象-JS面向对象(1)",
    "4.11.3.JS面向对象-JS面向对象(2)"
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

    $(".container").append(menu);
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

  function addFooter() {
    $(".container").append($("<footer><p>这里是Footer，视频内容有点多，就不在此更新示例了。可通过零碎时间观看视频，在实际项目中运用。</p></footer>"));
  }

  createMenu();
  addFooter();
});