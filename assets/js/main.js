$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    autoplay: false,
    autoplayTimeout: 3000,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        300: {
          items: 1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
    
  });