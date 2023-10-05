$(document).ready(function () {
  // 設置滑動到指定位置顯示
  $(window).scroll(function () { 
    if ($(window).scrollTop() >= 200){
        $(".top").fadeIn();
    }
    else{
        $(".top").fadeOut();
    }
});
// 點擊按鈕回到上層
$(".top").click(function (e) { 
  e.preventDefault();
  $("html, body").animate({
      scrollTop: 0
  }, 800); 
});
  const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
          speed:3000,
          delay: 3000,
          disableOnInteraction: false,
        },

        effect : 'cube',
        cubeEffect: {
         slideShadows: true,
         shadow: true,
         shadowOffset: 100,
         shadowScale: 0.6
        },
  
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      });
});