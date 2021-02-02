$(window).scroll(function () {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    scrollTop > 0 ? $(".header").addClass("navbar-fixed-top") : $(".header_nav").removeClass("navbar-fixed-top");
    const flag = browserRedirect();
    if (!flag) init(scrollTop);
   
})
//  动画加载
if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
    new WOW().init();
}

/**
 * @param 
 * 判断是不是手机设备
 */
function browserRedirect() {
    let sUserAgent = navigator.userAgent.toLowerCase(),
        bIsIpad = sUserAgent.match(/ipad/i) == "ipad",
        bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os",
        bIsMidp = sUserAgent.match(/midp/i) == "midp",
        bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4",
        bIsUc = sUserAgent.match(/ucweb/i) == "ucweb",
        bIsAndroid = sUserAgent.match(/android/i) == "android",
        bIsCE = sUserAgent.match(/windows ce/i) == "windows ce",
        bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) return true;
    return false;
}  

/**
 * @param 
 * 只在pc端上显示
 */
function init(scrollTop) {
    $(".banner_select").css({ backgroundPosition: `0% ${scrollTop}px` });
    if (scrollTop > 650) {
        let x;
        x = (640 - scrollTop) / 5;
        $(".section_box3").css({ backgroundPosition: `0% ${x}px` })
    }
    if (scrollTop > 1450) {
        let x;
        x = (1600 - scrollTop) / 4.6;
        $(".section_bg").css({ backgroundPosition: `0% ${x}px` })
    }
}
