$(function () {
  // $("#h_title").html("jquery test");
  // $("#content_box").css("height", window.screen.availHeight / 2);
  // $("#content_box").css("background-image", "url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595500028785&di=0cf22a478d30ebded2b409ca8dc560f0&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2017-11-29%2F5a1e22998f77f.jpg)");
  // $("#content_box").css("background-size", window.screen.availWidth + " " + window.screen.availHeight);
  // $("#img_box").css("background-image", "url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595500028785&di=0cf22a478d30ebded2b409ca8dc560f0&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2017-11-29%2F5a1e22998f77f.jpg)");
  // $("#img_box").css("width", 600);
  // $("#img_box").css("height", 360);
  // $("#img_box").css("background-size", "100% 100%");
  // $("#img_box").css("background-repeat", "no-repeat");

  // $("#img_box").css("background-attachment", "fixed");

  // console.info($("#content_box").css("height") + "  -  " + $("#content_box").css("background-color"));

  // $("#btn_contact").click(function () {
  //     // window.open("contact.html");
  //     $(this).val("点我干嘛");
  // });
  //
  console.info("document.body.clientWidth :" + document.body.clientWidth + " - " + document.body.clientHeight);
  console.info("document.body.offsetWidth :" + document.body.offsetWidth + " - " + document.body.offsetHeight);
  console.info("document.body.scrollWidth :" + document.body.scrollWidth + " - " + document.body.scrollHeight);
  console.info("document.body.scrollLeft :" + document.body.scrollLeft + " - " + document.body.scrollTop);
  console.info("window.screenLeft :" + window.screenLeft + " - " + window.screenTop);
  console.info("window.screen.width :" + window.screen.width + " - " + window.screen.height);
  console.info("window.screen.availWidth :" + window.screen.availWidth + " - " + window.screen.availHeight);
  console.info("window.devicePixelRatio :" + window.devicePixelRatio);

  document.title = INDEX_TITLE;

  let data = {
    title: INDEX_TITLE,
    fontColor: "#5C5753",
    groups: [
      {
        color: "#e68e17",
        subColor: "#eca444",
        title: "Web前端基础练习",
        subTitle: "零基础课程训练",
        classes: [
          {
            name: "《极客学院》Web前段开发教学 - 第一部分：H5+CSS+JS",
            link: "pj/jike/index.html",
          }, {
            name: "轮播图 - 手动无循环",
            link: "pj/banner/banner.html",
          }
        ]
      },
      {
        color: "#639F5A",
        subColor: "#7BB073",
        title: "Demo尝试",
        subTitle: "是骡子是马拉出来溜溜",
        classes: [
          {
            name: "改版抖音开放平台",
            link: "pj/ostron/index.html",
          }, {
            name: "欧思创",
            link: "pj/ostron_r/index.html",
          }
        ]
      },
      {
        color: "#EC3933",
        subColor: "#EE554A",
        title: "设计工具",
        subTitle: "如果不知道从哪开始，可以先到这里看看",
        classes: [
          {
            name: "Color Hunt - Color Palettes for Designers and Artists",
            sub: "配色",
            link: "https://colorhunt.co/",
          }, {
            name: "Colormind - Bootstrap UI colors",
            sub: "色彩设计",
            link: "http://colormind.io/bootstrap/",
          },
          {
            name: "Fresh Background Gradients | WebGradients.com 💎",
            sub: "渐变色",
            link: "https://webgradients.com/",
          },
          {
            name: "色值转换与对照",
            sub: "颜色转换",
            link: "https://www.sioe.cn/yingyong/yanse-rgb-16/",
          }
        ]
      },
      {
        color: "#0ba360",
        subColor: "#3cba92",
        title: "笔记",
        subTitle: "整理筹备中",
        classes: []
      },
      {
        color: "#B08D88",
        subColor: "#C2A7A3",
        title: "其他",
        subTitle: "还没想好呢",
        classes: []
      }
    ]
  };

  new Vue({
    el: "#home",
    data: {
      data: data
    },
    methods: {
      clickAction: function (mClass) {
        if (mClass.action === "copy") {
          copyToClipboard(mClass.name + " : " + mClass.sub);
        } else {
          showToast("指令错误");
        }
      }
    }
  });

  /**
   * 异步获取设备信息
   * @returns {Promise<*>}
   */
  async function getDeviceInfo() {
    return new Promise((resolve => {
      resolve(getDeviceSize());
    }));
  }

  /**
   * 添加设备信息group
   */
  getDeviceInfo().then((result) => {
    logI(result);
    // 插入到倒数第二个位置，第一个参数为插入位置，第二个为要删除的元素位置，第三个为值
    data.groups.splice(data.groups.length - 1, 0, {
      color: "#2b5876",
      subColor: "#4e4376",
      title: "设备信息",
      subTitle: "总有一些你想要又得不到的小东西",
      classes: [
        {
          name: "屏幕尺寸",
          sub: "width: " + result.screenWidth + "px, height: " + result.screenHeight + "px",
          title: "当前设备屏幕尺寸(单位像素)",
          action: "copy",
          actionName: "复制"
        }, {
          name: "屏幕可用区域尺寸",
          sub: "width: " + result.screenAvailWidth + "px, height: " + result.screenAvailHeight + "px",
          title: "当前设备屏幕可用区域尺寸(如Mac中去除Docker和MenuBar，单位像素)",
          action: "copy",
          actionName: "复制"
        }, {
          name: "屏幕像素比例",
          sub: "Window.devicePixelRatio: " + result.ratio,
          title: "当前设备屏幕屏幕像素比例",
          action: "copy",
          actionName: "复制"
        },
      ]
    });
  });
});