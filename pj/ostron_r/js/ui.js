function addFooter() {
  let footer = $("<div></div>");
  footer.addClass("footer");

  footer.append($("<p>2020 © 抖音  | 京ICP备16016397号-3 | 北京微播视界科技有限公司 |  地址 : 北京市海淀区知春路51号4层408 </p>"));
  footer.append($("<p>中国互联网举报中心 | 网络文化许可证-京网文-（2016）2282-264号 | 违法和不良信息举报：400-140-2108</p>"));

  $(".container").append(footer);

  let footerY = footer.offset().top;
  if (footerY < document.body.clientHeight) {
    footer.css({
      "position": "absolute",
      "left": 0,
      "bottom": 0
    });
  }
}