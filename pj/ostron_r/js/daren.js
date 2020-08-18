$(function () {
  let drList = [
    {
      name: "美女1",
      sub: "美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女",
      goods: 14,
      love: 1214,
      img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2150273871,2733635003&fm=26&gp=0.jpg",
    }, {
      name: "美女2",
      sub: "美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女",
      goods: 12,
      love: 1324,
      img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1135064372,163164656&fm=26&gp=0.jpg",
    }, {
      name: "美女33",
      sub: "美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女",
      goods: 12,
      love: 1524,
      img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2464709569,1785793044&fm=26&gp=0.jpg",
    }, {
      name: "美女4",
      sub: "美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女",
      goods: 12,
      love: 12444,
      img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2884987712,4200574275&fm=26&gp=0.jpg",
    }, {
      name: "美女5",
      sub: "美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女",
      goods: 12,
      love: 12234,
      img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3895443305,814628519&fm=26&gp=0.jpg",
    }, {
      name: "美女6",
      sub: "美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女",
      goods: 12,
      love: 122224,
      img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1509268037,92904482&fm=26&gp=0.jpg",
    }, {
      name: "美女7",
      sub: "美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女",
      goods: 12,
      love: 1274,
      img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1659012856,346800732&fm=26&gp=0.jpg",
    }, {
      name: "美女8",
      sub: "美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女",
      goods: 12,
      love: 124,
      img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3895443305,814628519&fm=26&gp=0.jpg",
    }, {
      name: "美女9",
      sub: "美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女",
      goods: 12,
      love: 124,
      img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1509268037,92904482&fm=26&gp=0.jpg",
    }, {
      name: "美女10",
      sub: "美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女",
      goods: 12,
      love: 124,
      img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1659012856,346800732&fm=26&gp=0.jpg",
    }, {
      name: "美女11",
      sub: "美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女",
      goods: 12,
      love: 124,
      img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1509268037,92904482&fm=26&gp=0.jpg",
    }, {
      name: "美女12",
      sub: "美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女",
      goods: 12,
      love: 124,
      img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1659012856,346800732&fm=26&gp=0.jpg",
    }, {
      name: "美女13",
      sub: "美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女",
      goods: 12,
      love: 124,
      img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1659012856,346800732&fm=26&gp=0.jpg",
    }, {
      name: "美女14",
      sub: "美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女",
      goods: 12,
      love: 124,
      img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1509268037,92904482&fm=26&gp=0.jpg",
    }, {
      name: "美女15",
      sub: "美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女",
      goods: 12,
      love: 124,
      img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1659012856,346800732&fm=26&gp=0.jpg",
    }, {
      name: "美女16",
      sub: "美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女",
      goods: 12,
      love: 124,
      img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1659012856,346800732&fm=26&gp=0.jpg",
    }
  ];

  // 奇数行显示排版
  let showStyleOdd = [0, 1, 1, 1];
  // 偶数行显示排版
  let showStyleEven = [1, 1, 1, 0];
  // 奇数行个数
  let rowSumOdd = sum(showStyleOdd);
  // 偶数行个数
  let rowSumEven = sum(showStyleEven);
  // 双行总个数
  let doubleRowSum = rowSumOdd + rowSumEven;
  let hotLength = 12;
  // 总行数
  let rowCount = Math.floor(hotLength / doubleRowSum) * 2 + (hotLength % doubleRowSum > rowSumOdd ? 2 : (hotLength % doubleRowSum === 0 ? 0 : 1));

  let left = $(".dr-list-container");
  left.css("height", (120 + 15) * rowCount - 15);
  let usedCount = 0;
  for (let i = 0; i < rowCount; i++) {
    let drs = [null, null, null, null];
    let style = i % 2 === 0 ? showStyleOdd : showStyleEven;
    for (let j = 0; j < style.length; j++) {
      if (style[j] === 1 && usedCount < drList.length) {
        drs[j] = drList[usedCount];
        usedCount++;
      }
    }
    left.append(createRow(drs));
  }

  function createRow(drs) {
    let row = $("<div></div>");
    row.addClass("dr-list");

    for (let i = 0; i < drs.length; i++) {
      row.append(createItem(drs[i]));
    }

    return row;
  }

  function createItem(dr) {
    let drItem = $("<div></div>");
    drItem.addClass("list-item");
    if (dr) {
      drItem.append(createImg(dr));
      drItem.append(createName(dr.name));
    } else {
      drItem.addClass("empty");
    }
    return drItem;
  }

  function createImg(dr) {
    let img = $("<img src='" + dr.img + "' alt='" + dr.name + "' title='" + dr.name + "'/>");
    img.addClass("dr-img");
    return img;
  }

  function createName(name) {
    let span = $("<span/>");
    span.addClass("dr-name");
    span.html(name);
    return span;
  }

  $(".join-now").click(function () {
    $(".join-container").stop().fadeIn();
  });
  $(".join-dialog").click(function (event) {
    stopActionBubble(event);
  });
  $(".join-container").click(function () {
    $(this).stop().fadeOut();
  });
  $("#btnJoin").click(function () {
    let nameEl = $("#name")[0];
    let typeEl = $("#type")[0];
    let dyNoEl = $("#dyNo")[0];
    let dyIDEl = $("#dyID")[0];
    let name = nameEl.value;
    let type = typeEl.value;
    let dyNo = dyNoEl.value;
    let dyID = dyIDEl.value;
    logI(name + " - " + type + " - " + dyNo + " - " + dyID);
    if (name.length < 1) {
      showErrorToast(nameEl.placeholder);
      return;
    }
    if (dyNo.length < 1) {
      showErrorToast(dyNoEl.placeholder);
      return;
    }
    if (dyID.length < 1) {
      showErrorToast(dyIDEl.placeholder);
      return;
    }
    showSucToast("申请成功，请等待审核...");
    $(".join-container").hide();
  });

  $(".dr-more").click(function () {
    $(".dr-home").hide();
    $(".dr-all").show();
    scrollToJqEl($(".content"));
  });
  $(".dr-all-header").click(function () {
    $(".dr-home").show();
    $(".dr-all").hide();
    scrollToJqEl($(".content"));
  });

  function createAllItem(index, dr) {
    let item = $("<div class='all-item'></div>");
    item.append($("<img class='all-item-img' src='" + dr.img + "' alt='" + dr.name + "' title='" + dr.name + "'/>"));
    let info = $("<div class='info'></div>");
    info.append($("<span class='title'>" + dr.name + "</span>"));
    info.append($("<span class='sub'>" + dr.sub + "</span>"));
    item.append(info);
    let count = $("<div class='count'></div>");
    count.append($("<span class='goods-count'>" + dr.goods + "</span>"));
    count.append($("<span class='love-count'>" + dr.love + "</span>"));
    info.append(count);
    let action = $("<div class='action'></div>");
    let doGood = $("<img class='clickGood' src='img/icons/action_good.png' alt='点赞' title='点赞'/>");
    action.append(doGood);
    doGood.click(function (event) {
      stopActionBubble(event);
      let loveEl = $(".count .love-count").eq(index);
      drList[index].love = parseInt(loveEl.html()) + 1;
      loveEl.html(drList[index].love);
      showSucToast("点赞成功");
    });
    let doDetail = $("<img class='clickDetail' src='img/icons/action_detail.png' alt='详情' title='详情'/>");
    action.append(doDetail);
    doDetail.click(function () {
      showSucToast("查看详情" + index);
    });
    item.append(action);
    return item;
  }

  for (let i = 0; i < drList.length; i++) {
    let dr = drList[i];
    $(".dr-all-list").append(createAllItem(i, dr));
  }

  addFooter();
});