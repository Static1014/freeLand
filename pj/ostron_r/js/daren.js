$(function () {
  let drList = [
    {
      name: "",
      img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2150273871,2733635003&fm=26&gp=0.jpg",
    }, {
      name: "",
      img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1135064372,163164656&fm=26&gp=0.jpg",
    }, {
      name: "",
      img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2464709569,1785793044&fm=26&gp=0.jpg",
    }, {
      name: "",
      img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2884987712,4200574275&fm=26&gp=0.jpg",
    }, {
      name: "",
      img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3895443305,814628519&fm=26&gp=0.jpg",
    }, {
      name: "",
      img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1509268037,92904482&fm=26&gp=0.jpg",
    }, {
      name: "",
      img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1659012856,346800732&fm=26&gp=0.jpg",
    }
  ];

  let drDivs = document.getElementsByClassName("list-item");
  for (let i = 0; i < drDivs.length; i++) {
    let content = drDivs[i];
    if (content.className.indexOf("empty") === -1) {
      let img = document.createElement("img");
      let dr = drList[i % drList.length];
      img.src = dr.img;
      img.title = dr.name;
      img.className = "dr-img";

      content.append(img);
    }
  }

  addFooter();
});