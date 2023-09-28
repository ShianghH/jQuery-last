$(document).ready(function () {
  $('.top').click(function (e) { 
    e.preventDefault();
    $('html,body').animate({
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