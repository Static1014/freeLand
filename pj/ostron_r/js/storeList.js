$(function () {
  let type = parseGetParam("type");
  let typeName = "商户";
  if (type === "sj") {
    typeName = "商家";
  }
  setTitle(typeName);

  // 所有地区列表，深拷贝地区列表
  let allAreaList = JSON.parse(JSON.stringify(provinceList));

  logI("所有地区个数：" + allAreaList.length);
  // 默认地区个数（所有地区前8位）
  let defaultAreaCount = 10;
  // 一行个数
  let topLineCount = 10;

  // 是否多选
  let isAreaMultiSelect = false;
  // 是否全显示
  let isAreaAllShow = false;

  /**
   点击更多
   */
  $(".r-btn.more").click(function () {
    isAreaAllShow = !isAreaAllShow;
    refreshRightMoreBtn();
  });

  /**
   * 点击多选
   */
  $(".r-btn.multi").click(function () {
    isAreaMultiSelect = true;
    $(".btn-bottom").show();
    $(".btn-right").hide();
    // 多选时，所有项都显示
    $(".no-default-area").css("display", "inline-block");

    // 清除样式
    $(".area-item").removeClass("selected");
  });

  /**
   * 点击多选的确认
   */
  $(".b-btn.confirm").click(function () {
    areaFilterResult();
    $(".filter").hide();
  });

  /**
   * 点击多选的取消
   */
  $(".b-btn.cancel").click(function () {
    isAreaMultiSelect = false;
    $(".btn-bottom").hide();
    $(".btn-right").show();
    // 隐藏非默认项
    $(".no-default-area").css("display", "none");
  });

  let areaListEl = $(".area-list");
  for (let i = 0; i < allAreaList.length; i++) {
    let area = allAreaList[i];
    let areaEl = $("<a class='area-item' value='" + area.name + "'>" + area.name + "</a>");

    if (i < topLineCount) {
      areaEl.addClass("top-line");
    }

    if (i >= defaultAreaCount) {
      // 初始化时不在默认列表中的不显示
      areaEl.addClass("no-default-area");
    }

    areaListEl.append(areaEl);
  }

  $(".area-item").click(function () {
    // 点击地区
    let index = $(this).index();
    logI("点击地区：" + allAreaList[index].name);

    if (isAreaMultiSelect) {
      // 多选
      $(this).toggleClass("selected");
    } else {
      // 单选
      $(this).addClass("selected");
      areaFilterResult();
      $(".filter").hide();
    }
  });

  /**
   * 点击清空所有地区选择
   */
  $(".area-result").click(function () {
    $(this).hide();
    $(".filter").show();

    areaFilterResult();
  });
  $(".all-clear").click(function () {
    $(".area-result").hide();
    $(".filter").show();

    areaFilterResult();
  });

  /**
   * 地区选择结果回调
   */
  function areaFilterResult() {
    let items = $(".area-item.selected");
    logI(items.length, "地区选择结果个数");
    let area = "";
    for (let i = 0; i < items.length; i++) {
      area += (area.length < 1 ? "" : "、") + $(".area-item.selected").eq(i).text();
    }
    if (area.length > 0) {
      $(".area-result").html(area + "<span></span>");
      $(".area-result").show();

      requestList(area);
    }

    resetFilter();
  }

  function resetFilter() {
    // 重置过滤器
    $(".area-item.selected").removeClass("selected");
    isAreaMultiSelect = false;
    isAreaAllShow = false;
    refreshRightMoreBtn();
    $(".b-btn.cancel").click();
  }

  /**
   * 刷新更多按钮
   */
  function refreshRightMoreBtn() {
    let moreBtn = $(".r-btn.more");
    if (isAreaAllShow) {
      // 全显示
      moreBtn.html("收起<span></span>").children("span").css("background-position-y", "-27px");
      moreBtn.mouseenter(function () {
        $(this).children("span").css("background-position-y", "-43px");
      }).mouseout(function () {
        $(this).children("span").css("background-position-y", "-27px");
      });
      // “非默认地区”显示
      $(".no-default-area").css("display", "inline-block");
    } else {
      // 显示默认
      moreBtn.html("更多<span></span>").children("span").css("background-position-y", "7px");
      moreBtn.mouseenter(function () {
        $(this).children("span").css("background-position-y", "-9px");
      }).mouseout(function () {
        $(this).children("span").css("background-position-y", "7px");
      });
      // “非默认地区”不显示
      $(".no-default-area").css("display", "none");
    }
  }

  function requestList(filter) {
    logI(filter);

  }

  addFooter();
});