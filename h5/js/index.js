window.onload = function () {
  let wrapp_icon = document.getElementById("wrapp_icon"),
      audio = document.getElementById("audio"),
      after = document.getElementById("after"),
      flag = false,
      timer = null,
      rotate = 0;

  wrapp_icon.addEventListener("click", function () {
      flag = !flag;
      flag ? hanelePlay() : handleStop();
  })

  // 开启音乐播放
  function hanelePlay() {
      clearInterval(timer);
      after.classList.add("active");
      audio.play();
      timer = setInterval(_ => {
          rotate += 5;
          if (rotate >=360) rotate  = 0;
          wrapp_icon.style.transform = `rotate(${rotate}deg)`;
      }, 25)
  }
  // 关闭播放
  function handleStop () {
      clearInterval(timer);
      after.classList.remove("active");
      audio.pause();
  }
}