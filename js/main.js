$(document).ready(function(){
  $('.btn-menu').click(function(){
    $(this).toggleClass('on');
    $('.header-menu').slideToggle();
  });
  $(".feedback-slider").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    navText: "",
    navSpeed: 700,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 6000,
    autoplaySpeed: 1000
  });
  $('.arrow-button').click(function(){
    $('html, body').animate({ scrollTop: $('.header').height()}, 'slow');
    return false;
  });
  $('.top').click(function(){
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });
  // $('.image-link').magnificPopup({type:'image'});
  $('.section-down__btn').click(function(){
    $('#callback h3').html($(this).text());
  }).magnificPopup({
    type:'inline',
    mainClass: 'mfp-forms'
  });
// $(".features").waypoint(function(){
//   $(".features .features-blocks .features-block").removeClass(".features-block-off").addClass(".features-block-on");
// });
//   var myAnimation = new drawFillSVG({
//     elementId: "work-svg1"
// });
// $(document).ready(function(){
  
// });
});