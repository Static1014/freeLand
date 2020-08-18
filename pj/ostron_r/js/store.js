$(function () {
  let type = parseGetParam("type");
  let typeName = "商户";
  if (type === "sj") {
    typeName = "商家";
  }
  $(document).attr("title", typeName);
  $(".header-content h3").html(typeName);

  $(".join-now").click(function () {
  });
});