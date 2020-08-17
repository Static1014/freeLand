$(function () {
  let drList = [
    {
      name: "美女",
      img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2150273871,2733635003&fm=26&gp=0.jpg",
    }, {
      name: "美女",
      img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1135064372,163164656&fm=26&gp=0.jpg",
    }, {
      name: "美女",
      img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2464709569,1785793044&fm=26&gp=0.jpg",
    }, {
      name: "美女",
      img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2884987712,4200574275&fm=26&gp=0.jpg",
    }, {
      name: "美女",
      img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3895443305,814628519&fm=26&gp=0.jpg",
    }, {
      name: "美女",
      img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1509268037,92904482&fm=26&gp=0.jpg",
    }, {
      name: "美女",
      img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1659012856,346800732&fm=26&gp=0.jpg",
    }, {
      name: "美女",
      img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3895443305,814628519&fm=26&gp=0.jpg",
    }, {
      name: "美女",
      img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1509268037,92904482&fm=26&gp=0.jpg",
    }, {
      name: "美女",
      img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1659012856,346800732&fm=26&gp=0.jpg",
    }, {
      name: "美女",
      img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1509268037,92904482&fm=26&gp=0.jpg",
    }, {
      name: "美女",
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
  // 总行数
  let rowCount = Math.floor(drList.length / doubleRowSum) * 2 + (drList.length % doubleRowSum > rowSumOdd ? 2 : (drList.length % doubleRowSum === 0 ? 0 : 1));

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
    // let span = document.createElement("span");
    // span.className = "dr-name";
    // span.innerHTML = name;

    let span = $("<span/>");
    span.addClass("dr-name");
    span.html(name);
    return span;
  }

  // let drDivs = document.getElementsByClassName("list-item");
  // for (let i = 0; i < drDivs.length; i++) {
  //   let content = drDivs[i];
  //   if (content.className.indexOf("empty") === -1) {
  //     let img = document.createElement("img");
  //     let dr = drList[i % drList.length];
  //     img.src = dr.img;
  //     img.title = dr.name;
  //     img.className = "dr-img";
  //
  //     content.append(img);
  //   }
  // }

  addFooter();
});