$(function () {
    "use strict";

    // 菜单列表
    let contentData = [
        {
            name: "供应商商品池",
            sub: "抖音开放平台现已为多个行业提供解决方案，目前已涵盖：智能硬件、工具类，生活类，电商类，广电媒体以及游戏行业。帮助企业更好的进行精细化运营，提升商业价值。",
            id: "goods",
            imgPath: "images/fruits/",
            items: [
                {
                    img: "ananas.png",
                    name: "菠萝",
                    price: "￥9.9"
                }, {
                    img: "anguria.png",
                    name: "西瓜",
                    price: "￥9.9"
                }, {
                    img: "avocado.png",
                    name: "柠檬",
                    price: "￥9.9"
                }, {
                    img: "ciliegia.png",
                    name: "苹果",
                    price: "￥9.9"
                }, {
                    img: "pera.png",
                    name: "梨",
                    price: "￥9.9"
                }, {
                    img: "mela.png",
                    name: "樱桃",
                    price: "￥9.9"
                }, {
                    img: "ciliegia.png",
                    name: "苹果",
                    price: "￥9.9"
                }, {
                    img: "pera.png",
                    name: "梨",
                    price: "￥9.9"
                }, {
                    img: "mela.png",
                    name: "樱桃",
                    price: "￥9.9"
                }
            ],
            more: "查看所有商品",
            moreStyle: "background: #999; color: white;",
        },
        {
            name: "达人池",
            sub: "抖音开放平台现已为多个行业提供解决方案，目前已涵盖：智能硬件、工具类，生活类，电商类，广电媒体以及游戏行业。帮助企业更好的进行精细化运营，提升商业价值。",
            id: "famous",
            imgPath: "images/",
            items: [
                {
                    img: "pexels-photo-206395.jpeg",
                    name: "小红帽1",
                    link: "https://images.pexels.com/photos/206395/pexels-photo-206395.jpeg"
                }, {
                    img: "pexels-photo-1391498.jpeg",
                    name: "小红帽2",
                    link: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg"
                }, {
                    img: "pexels-photo-1382731.jpeg",
                    name: "小红帽3",
                    link: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg"
                }, {
                    img: "pexels-photo-1758144.jpeg",
                    name: "小红帽4",
                    link: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg"
                }, {
                    img: "pexels-photo-1382734.jpeg",
                    name: "小红帽5",
                    link: "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg"
                }, {
                    img: "pexels-photo-1462636.jpeg",
                    name: "小红帽6",
                    link: "https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg"
                }, {
                    img: "pexels-photo-139829.jpeg",
                    name: "小红帽7",
                    link: "https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg"
                }
            ],
            more: "查看所有达人",
            moreStyle: "background: #999; color: white;",
        },
        {
            name: "经典案例",
            sub: "抖音开放平台现已为多个行业提供解决方案，目前已涵盖：智能硬件、工具类，生活类，电商类，广电媒体以及游戏行业。帮助企业更好的进行精细化运营，提升商业价值。",
            id: "case",
            imgPath: "images/",
            items: [
                {
                    name: "肚皮弹射",
                    sub: "肚皮弹射是简单易上手的休闲游戏，获得收益后，升级个人能力，让角色可以飞的更远。",
                    text: "游戏精彩瞬间直接分享，丰富游戏生态，和抖音用户一起共享游戏精彩时刻。游戏精彩瞬间直接分享，丰富游戏生态，和抖音用户一起共享游戏精彩时刻。",
                    img: "dupi.png"
                }, {
                    name: "大疆创新",
                    sub: "快剪辑是抖音开放平台早期接入方，将抖音开放平台和工具类应用结合起来。",
                    text: "快剪辑是抖音开放平台早期接入方，将抖音开放平台和工具类应用结合起来。快剪辑是抖音开放平台早期接入方，将抖音开放平台和工具类应用结合起来。快剪辑是抖音开放平台早期接入方，将抖音开放平台和工具类应用结合起来。",
                    img: "dji.png"
                }, {
                    name: "快剪辑",
                    sub: "DJI 大疆是以生产、研发无人飞行器及飞行影像系统为主的公司，在全球商用无人机领域占据领头羊地位，同时也是抖音开放平台首家接入合作的智能硬件厂商。",
                    text: "跟随分享的视频展示拍摄所属机型，强化用户体验，拓展以兴趣为导向的商业化边界。快剪辑是抖音开放平台早期接入方，将抖音开放平台和工具类应用结合起来。快剪辑是抖音开放平台早期接入方，将抖音开放平台和工具类应用结合起来。快剪辑是抖音开放平台早期接入方，将抖音开放平台和工具类应用结合起来。",
                    img: "kuai.png"
                }
            ],
            more: "查看所有案例",
            moreStyle: "background: #999; color: white;",
        },
        {
            name: "合作入驻",
            sub: "抖音开放平台现已为多个行业提供解决方案，目前已涵盖：智能硬件、工具类，生活类，电商类，广电媒体以及游戏行业。帮助企业更好的进行精细化运营，提升商业价值。",
            id: "join",
            items: [
                [
                    {
                        step: "01",
                        name: "互相了解",
                        sub: "互相了解互相了解互相了解互相了解互相了解互相了解"
                    },
                    {
                        step: "02",
                        name: "选定需求",
                        sub: "选定需求选定需求选定需求选定需求选定需求选定需求"
                    },
                    {
                        step: "03",
                        name: "签订合同",
                        sub: "签订合同签订合同选定需求选定需求选定需求签订合同"
                    }
                ], [
                    {
                        step: "04",
                        name: "经营管理",
                        sub: "经营管理经营管理经营管理经营管理"
                    }, {
                        step: "05",
                        name: "互利共赢",
                        sub: "互利共赢互利共赢互利共赢互利共赢互利共赢互利共赢"
                    }
                ]
            ],
            more: "立即加入"
        },
        {
            name: "更多",
            sub: "",
            id: "more",
            imgPath: "images/fruits/",
            items: [
                {
                    img: "ananas.png",
                    name: "后台",
                    sub: "达人、MCN、工作室、供应商"
                }, {
                    img: "anguria.png",
                    name: "训练营",
                    sub: "拍摄、运营、供应链训练营"
                }, {
                    img: "avocado.png",
                    name: "本地服务",
                    sub: "免费取景券"
                }, {
                    img: "ciliegia.png",
                    name: "联系我们",
                    sub: "合作共赢"
                }
            ],
            more: ""
        }
    ];

    // 当前选中菜单下标
    let curData = {
        curIndex: 0
    };

    // 点击菜单跳转时，不监听滚动
    let isJumping = false;

    // header
    let header = new Vue({
        el: "#header",
        data: {
            menuData: contentData,
            curData: curData
        },
        methods: {
            clickMenu: function (index) {
                if (index !== this.curData.curIndex) {
                    // 开始跳转
                    isJumping = true;
                    $("html,body").animate({
                        scrollTop: this.menuData[index].top - this.menuData[0].top + 1
                    }, 300, function () {
                        // 停止跳转
                        isJumping = false;
                    });
                    curData.curIndex = index;
                }
            }
        }
    });

    // 内容
    let container = new Vue({
        el: "#container",
        data: {
            contentData: contentData
        },
        mounted() {
            // 计算每个组位置
            for (let i = 0; i < this.contentData.length; i++) {
                let item = this.contentData[i];
                let top = $("#" + contentData[i].id).offset().top;
                console.info(item.id + " - " + top);
                item.top = top;
            }

            // 设置商品轮播图
            $('.slider_four_in_line').EasySlides({
                'autoplay': true,
                'show': this.contentData[0].items.length
            });
        },
        methods: {
            clickMoreItem: function (index, moreIndex) {
                let item = this.contentData[index].items[moreIndex];
                alert("“" + item.name + "”服务正在建设中，敬请期待...");
            },
            clickGroupBottomMore: function (index, text) {
                alert(this.contentData[index].name + " - " + text);
            }
        }
    });

    let footer = new Vue({
        el: "#footer",
        data: {
            items: [
                "天津欧思创科技有限公司",
                "助力抖音推广、直播带货、短视频拍摄",
                "地址: 天津市东丽区xxxxxx   邮箱：3231xxxx@qq.com",
            ]
        }
    });

    // 回到顶部
    let goTop = new Vue({
        el: "#goTop",
        data: {
            curData: curData
        },
        methods: {
            clickTop: function () {
                // 回到顶部
                header.clickMenu(0);
            }
        }
    });

    /**
     * 页面滚动监听
     */
    let doc = $(document);
    doc.scroll(function () {
        let scrollH = doc.scrollTop();
        // var viewH = $(window).height();
        // var contentH = doc.height();
        // console.info("scroll height : " + scrollH);

        if (!isJumping && scrollH >= 0) {
            let loc = contentData[0].top;
            let pos = curData.curIndex;
            for (let i = 0; i < contentData.length; i++) {
                if (i === contentData.length - 1) {
                    pos = contentData.length - 1;
                    break
                }
                let item = contentData[i + 1];
                if (item.top !== undefined && scrollH + loc < item.top) {
                    pos = i;
                    break
                }
            }
            if (curData.curIndex !== pos) {
                // 切换选中菜单
                curData.curIndex = pos;
                console.info("当前滚动位置:" + scrollH + "   所属菜单 --- " + header.menuData[pos].name);
            }
        }

    });
});