$(document).ready(function(){
  $('.carousel__inner').slick({
    speed: 1200,
    infinite: true,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.png"></button>'
  });
 });