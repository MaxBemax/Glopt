$(document).ready(function(){
	$('.carousel__inner').slick({
		speed: 1200,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		variableWidth: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.png"></button>',
		responsive: [
			{
				breakpoint: 992,
			  settings: {
				 centerMode: true,
				 variableWidth: true,
				 arrows: true
				//  dots: true
			  }
			}
		 ]
	});

	//smooth scroll and page up

	$(window).scroll(function () {
		if ($(this).scrollTop() > 1200) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});

	$("a[href^='#']").click(function () {
		const _href = $(this).attr(".href");
		$("html,body").animate({ scrollTop: $(_href).offset().top + "px" });
		return false;
	});
 })
 

 const hamburger = document.querySelector('.hamburger'),
 	menu = document.querySelector('.header__menu'),
 	menuItem = document.querySelectorAll('.header__item');
 	closeElem = document.body

 hamburger.addEventListener('click', () => {
 	hamburger.classList.toggle('hamburger_active');
 	menu.classList.toggle('header__menu_active');
 });

 menu.addEventListener('click', () => {
 	menu.classList.toggle('header__menu_active');
 	hamburger.classList.toggle('hamburger_active');
 });

