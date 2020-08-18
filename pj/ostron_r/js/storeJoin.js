$(function () {

  let shTypes = [
    {
      name: "培训机构",
      value: "1"
    }, {
      name: "民宿",
      value: "2"
    }, {
      name: "轰趴",
      value: "3"
    }, {
      name: "农家院",
      value: "4"
    }, {
      name: "律师",
      value: "5"
    }, {
      name: "医生",
      value: "6"
    }, {
      name: "餐饮",
      value: "7"
    }, {
      name: "超市",
      value: "8"
    }, {
      name: "会计",
      value: "9"
    }, {
      name: "美发",
      value: "10"
    }, {
      name: "搬家公司",
      value: "11"
    }, {
      name: "其他",
      value: "999"
    },
  ];
  let sjTypes = [
    {
      name: "淘宝商家",
      value: "1"
    }, {
      name: "抖店",
      value: "2"
    }, {
      name: "工厂",
      value: "3"
    }, {
      name: "其他",
      value: "999"
    }
  ];

  let type = parseGetParam("type");
  let typeName = "商户入驻";
  let qyTypes = shTypes;
  if (type === "sj") {
    typeName = "商家入驻";
    qyTypes = sjTypes;
  }
  $(document).attr("title", typeName);
  $(".header-content h3").html(typeName);


  // 企业类型
  for (let i = 0; i < qyTypes.length; i++) {
    let type = qyTypes[i];
    $("#type").append($("<option value='" + type.value + "'>" + type.name + "</option>"))
  }

  let licenseUpload = new ImgUpload({
    ele: "#licenseUpload"
  });

  let codeJqEl = $("#codeCanvas");
  createRandomCode(codeJqEl);
  codeJqEl.click(function () {
    createRandomCode(codeJqEl);
  });

  $(".btn-submit").click(function () {
    let inputEl = $(".input-info");

    let name = inputEl.eq(0).val();
    if (name.length < 1) {
      showErrorToast(inputEl.eq(0)[0].placeholder);
      return;
    }
    let type = inputEl.eq(1).val();
    if (type.length < 1) {
      showErrorToast(inputEl.eq(1)[0].placeholder);
      return;
    }
    let sh = inputEl.eq(2).val();
    if (sh.length < 1) {
      showErrorToast(inputEl.eq(2)[0].placeholder);
      return;
    }
    let province = inputEl.eq(3).val();
    if (province.length < 1) {
      showErrorToast("请选择所在地区(省)");
      return;
    }
    let city = inputEl.eq(4).val();
    if (city.length < 1) {
      showErrorToast("请选择所在地区(市)");
      return;
    }
    let town = inputEl.eq(5).val();
    if (town.length < 1) {
      showErrorToast("请选择所在地区(区)");
      return;
    }
    let addr = inputEl.eq(6).val();
    if (addr.length < 1) {
      showErrorToast(inputEl.eq(6)[0].placeholder);
      return;
    }
    let code = codeJqEl.attr("data-code");
    let codeInput = inputEl.eq(7).val();
    if (codeInput.length < 1) {
      showErrorToast(inputEl.eq(7)[0].placeholder);
      return;
    }
    if (codeInput !== code) {
      showErrorToast("验证码错误");
      createRandomCode(codeJqEl);
      return;
    }

    logI("===  " + name + " - " + type + " - " + sh + " - " + province + " - " + city + " - " + town + " - " + addr + " - " + code);
    showSucToast("申请已提交，请等待审核...");
    setTimeout(function () {
      goBack();
    }, 3000);
  });

  addFooter();
});