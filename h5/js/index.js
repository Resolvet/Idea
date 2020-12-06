window.onload = function () {
    let banner = document.getElementById("banner").children,
        bg = document.getElementById("bg"),
        Index = 0,
        deg = 0;
      setInterval(_=>{
        SetClass()
      },5000)
      setInterval(() => {
          deg+=2;
          if (deg>=360) deg = 0;
          bg.style.transform = `rotate(${deg}deg)`;
      }, 12);
    function SetClass () {
        banner[Index].classList.remove("active");
        Index >= banner.length-1 ? Index = 0 : Index++;
        console.log(Index)
        banner[Index].classList.add("active");
    }
}