$(function () {
    // 菜单列表
    let menuData = [
        {
            name: "首页",
            id: "home"
        },
        {
            name: "服务内容",
            id: "service"
        },
        {
            name: "能力展示",
            id: "skill"
        },
        {
            name: "接入流程",
            id: "service"
        },
        {
            name: "关于我们",
            id: "service"
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
            menuData: menuData,
            curData: curData
        },
        methods: {
            clickMenu: function (index) {
                if (index !== this.curData.curIndex) {
                    // 开始跳转
                    isJumping = true;
                    $("html,body").animate({
                        scrollTop: 400 * index
                    }, 300, function () {
                        // 停止跳转
                        isJumping = false;
                    });
                }
                curData.curIndex = index;
            }
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

        if (!isJumping && scrollH >= 0) {
            let pos = Math.floor(scrollH / 400);
            if (curData.curIndex !== pos) {
                // 切换选中菜单
                curData.curIndex = pos;
                console.info("当前滚动位置所属菜单 --- " + header.menuData[pos].name);
            }
        }

    });
});