$(document).ready(function(){
    
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
      slidesToScroll: 2
      
    });
    
   

  
  });