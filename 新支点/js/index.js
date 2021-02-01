$(window).scroll(function() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    scrollTop > 0 ? $(".header").addClass("navbar-fixed-top"):$(".header_nav").removeClass("navbar-fixed-top");
    $(".banner_select").css({backgroundPosition: `0% ${scrollTop}px`});
    if (scrollTop>650) {
        let x;
        x = (640-scrollTop)/5;
        $(".section_box3").css({backgroundPosition: `0% ${x}px`})
    }
    if (scrollTop>1450) {
        let x;
        x = (1580-scrollTop)/2;
        $(".section_bg").css({backgroundPosition: `0% ${x}px`})
    }
  })
  
  if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
    new WOW().init();
};