/**
 * 添加课程title
 */
function addHeader() {
    let title = getUrlParam('title');
    let videoUrl = getUrlParam('video');

    let header = $("<div></div>");
    header.id = 'header';
    header.css('width', '100%');

    let backImg = $("<img>");
    backImg.attr({
        "id": "top",
        "margin-right": "10px",
        "width": "32px",
        "title": "返回上一页",
        "src": "../../res/images/back.png"
    });
    backImg.click(function () {
        goBack();
    });

    let h1 = $("<h1></h1>");
    h1.append(title);
    h1.css({
        "text-align": "center",
        "margin-left": "auto",
        "margin-right": "auto",
        "width": (getBodySize().width - 84) + "px"
    });

    let tDiv = $("<div></div>");
    tDiv.append(backImg);
    tDiv.append(h1);
    header.append(tDiv);

    let subDiv = $("<div></div>");
    subDiv.css({
        "float": "right",
        "text-align": "center",
        "margin": "0 10px 10px 0",
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
    header.append("<h2>学习内容：</h2>");

    $(document.body).prepend(header);

    document.title = title;
}