$(document).ready(function(){
    

  new WOW().init();

    $('.feedback-slider').slick({
      
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: $('.feedback-prevArrow'),
      nextArrow: $('.feedback-nextArrow')

    });


    $('.offer-slider').slick({

      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: $('.offer-prevArrow'),
      nextArrow: $('.offer-nextArrow'),
      
      responsive: [
        {
          breakpoint: 1403,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });


});


      //1225 breakpoint - 1 slider
    //doresit vysku + respo slideru
  