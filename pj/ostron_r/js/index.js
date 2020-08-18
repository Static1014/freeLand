$(function () {
  let video = $("#bgVideo")[0];
  let btnMute = $("#mute")[0];
  btnMute.onclick = function () {
    video.muted = !video.muted;
    btnMute.style.backgroundImage = video.muted ? "url('img/icons/mute.png')" : "url('img/icons/unmute.png')"
  }

  $(".sub-menu").hover(function () {
    $(this).children(".sub-div").stop().slideToggle("fast");
  })
});