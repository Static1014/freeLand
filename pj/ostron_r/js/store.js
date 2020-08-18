$(function () {
  let type = parseGetParam("type");
  let typeName = "商户";
  if (type === "sj") {
    typeName = "商家";
  }
  $(document).attr("title", typeName);
  $(".header-content h3").html(typeName);

  $(".join-now").click(function () {
    showToast("立刻入驻")
  });

  let conditions = [
    {
      img: "img/icons/logo.png",
      title: "条件1",
      sub: "条件1说明条件1说明条件1说明条件1说明条件1说明条件1说明"
    }, {
      img: "img/icons/logo.png",
      title: "条件2",
      sub: "条件1说明条件1说明条件1说明条件1说明条件1说明条件1说明"
    }, {
      img: "img/icons/logo.png",
      title: "条件3",
      sub: "条件1说明条件1说明条件1说明条件1说明条件1说明条件1说明"
    }, {
      img: "img/icons/logo.png",
      title: "条件4",
      sub: "条件1说明条件1说明条件1说明条件1说明条件1说明条件1说明"
    }
  ];

  for (let i = 0; i < conditions.length; i++) {
    $(".condition-container").append(createConditionItem(conditions[i]));
  }

  function createConditionItem(con) {
    let el = $("<div class='condition-item'></div>");
    let img = $("<img class='icon' src='" + con.img + "' alt='" + con.title + "'/>");
    let title = $("<h3 class='title'>" + con.title + "</h3>");
    let sub = $("<span class='sub'>" + con.sub + "</span>");
    el.append(img);
    el.append(title);
    el.append(sub);

    return el;
  }

  let steps = ["流程1流程1", "流程2流程2", "流程3流程3", "流程4流程4"];
  for (let i = 0; i < steps.length; i++) {
    $(".steps-container").append(createStepItem(i, steps[i]));
  }

  function createStepItem(i, step) {
    let el = $("<div class='step-item'></div>");
    let index = i + 1;
    let indexStr = index < 10 ? ("0" + index) : index;
    el.append($("<h1 class='no'>" + indexStr + "</h1>"));
    el.append($("<span class='name'>" + step + "</span>"));
    el.append($("<span class='bg-line'></span>"));
    el.append($("<span class='dot'></span>"));
    return el;
  }

  addFooter();
});