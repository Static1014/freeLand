
/**
 * 添加课程title
 */
function addHeader() {
  let css = document.createElement("link");
  css.setAttribute("rel", "stylesheet");
  css.setAttribute("href", "../../css/jike.css");
  document.head.appendChild(css);

  let title = getGetParam('title');
  let videoUrl = getGetParam('video');

  let header = $("<div></div>");
  header.id = 'header';
  header.css({
    "width": "100%"
  });

  let backImg = $("<img>");
  backImg.attr({
    "id": "top",
    "title": "返回上一页",
    "src": "../../res/imgs/back.png"
  });
  backImg.addClass("back-img");
  backImg.click(function () {
    goBack();
  });

  let h1 = $("<h1></h1>");
  h1.append(title);

  let tDiv = $("<div></div>");
  tDiv.append(backImg);
  tDiv.append(h1);
  tDiv.addClass("header-top");
  header.append(tDiv);

  let subDiv = $("<div></div>");
  subDiv.css({
    "text-align": "center",
    "width": "100%"
  });

  subDiv.append("学习时间：");
  subDiv.append("2020.07.28&nbsp;&nbsp;&nbsp;&nbsp;");

  subDiv.append("学习来源：");
  let videoLink = $("<a>B站视频链接</a>");
  videoLink.attr("href", videoUrl);
  videoLink.attr("target", "_blank");
  videoLink.css("color", "darkturquoise");
  subDiv.append(videoLink);

  subDiv.append("，侵权请");

  let delLink = $("<a>联系删除</a>");
  delLink.attr("href", "../../contact.html");
  delLink.attr("target", "_blank");
  delLink.css("color", "orangered");
  subDiv.append(delLink);
  subDiv.append("。");

  header.append(subDiv);
  header.append("<hr/>");

  $(document.body).prepend(header);

  document.title = title;
}