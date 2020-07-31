var rel = {a: false, b: 111};
var aa = 9;
var bb = '222';
var cc = String('ccc');
var arr = [
    {
        key: 3,
        value: "1"
    },
    {
        key: 2,
        value: "2"
    }
];

var bbInfo = {
    zzs: {
        existed: true,
        visible: true,
        value: 'zzs'
    },
    zzs_fb: false,
    gs: false,
    fjs: false
};

var title = new Vue({
    el: "#title",
    data: {
        show: bbVisible
    }
});

var zzs = new Vue({
    el: "#zzs",
    data: {
        show: bbVisible,
        love: rel,
        aa: aa,
        bb: bb,
        cc: cc,
    },
    methods: {
        dd: function (val) {
            this.show.zzs = val === 'zzs';
        }
    }
});
var gs = new Vue({
    el: "#gs",
    data: {
        show: bbVisible,
    }
});

function changeA(value) {
    // Vue.set(test.love, 'a', value);
    rel.a = value;
}

function changeB(value) {
    // Vue.set(test, 'bb', value);
    test.bb = value;
    rel.b = value;
}

window.show = function (val) {
    bbVisible.zzs = val === 'zzs';
    bbVisible.zzs_fb = val === 'zzs_fb';
    bbVisible.gs = val === 'gs';
};