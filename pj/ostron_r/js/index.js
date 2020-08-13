$(function () {
  let video = document.getElementById("bgVideo");
  let btnMute = document.getElementById("mute");
  btnMute.onclick = function () {
    video.muted = !video.muted;
    btnMute.style.backgroundImage = video.muted ? "url('img/icons/mute.png')" : "url('img/icons/unmute.png')"
  }
});