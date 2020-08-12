$(function () {

  let bannerData = {
    curIndex: 0,
    list: [
      {
        img: "img/banner/1.jpg",
        link: ""
      }, {
        img: "img/banner/2.jpg",
        link: ""
      }, {
        img: "img/banner/3.jpg",
        link: ""
      }, {
        img: "img/banner/4.jpg",
        link: ""
      }, {
        img: "img/banner/5.jpg",
        link: ""
      }, {
        img: "img/banner/6.jpg",
        link: ""
      }, {
        img: "img/banner/7.jpg",
        link: ""
      }, {
        img: "img/banner/8.jpg",
        link: ""
      }
    ]
  };

  let banner = new Vue({
    el: "#banner",
    data: {
      data: bannerData,
      imgWidth: 1200
    },
    methods: {
      clickPrev: function () {
        if (this.data.curIndex === 0) {
          return;
        }
        this.data.curIndex -= 1;
        $(".banner-list").animate({
          "left": "+=" + this.imgWidth + "px"
        });
      },
      clickNext: function () {
        if (this.data.curIndex === this.data.list.length - 1) {
          return;
        }
        this.data.curIndex += 1;
        $(".banner-list").animate({
          "left": "-=" + this.imgWidth + "px"
        });
      },
      clickPageIndex: function (index) {
        if (this.data.curIndex === index) {
          return
        }
        this.data.curIndex = index;
        $(".banner-list").animate({
          "left": -index * this.imgWidth + "px"
        });
      }
    },
    // mounted() {
    //   setInterval(this.autoScroll, 2000);
    // },
    // beforeDestroy() {
    //   clearInterval(this.autoScroll);
    // }
  });
});