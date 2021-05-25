// $(window).on('resize orientationChange', function (event) {
// 	$('.cascade-slider').slick('reinit');
// });

let rev = $('.cascade-slider');
rev.on('init', function (event, slick, currentSlide) {
	let
		cur = $(slick.$slides[slick.currentSlide]),
		next = cur.next(),
		prev = cur.prev();
	prev.addClass('slick-sprev');
	next.addClass('slick-snext');
	cur.removeClass('slick-snext').removeClass('slick-sprev');
	slick.$prev = prev;
	slick.$next = next;
}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
	let cur = $(slick.$slides[nextSlide]);
	slick.$prev.removeClass('slick-sprev');
	slick.$next.removeClass('slick-snext');
	let next = cur.next();
	let prev = cur.prev();
	prev.prev();
	prev.next();
	prev.addClass('slick-sprev');
	next.addClass('slick-snext');
	slick.$prev = prev;
	slick.$next = next;
	cur.removeClass('slick-next').removeClass('slick-sprev');
});
rev.slick({
	speed: 1000,
	arrows: true,
	dots: false,
	focusOnSelect: true,
	prevArrow: '<button class="cascade-slider__arrow left"> <svg> <use xlink:href="img/icons/icons.svg#cascade_left"></use> </svg> </button>',
	nextArrow: '<button class="cascade-slider__arrow right"> <svg> <use xlink:href="img/icons/icons.svg#cascade_right"></use> </svg> </button>',
	infinite: true,
	centerMode: true,
	slidesPerRow: 1,
	slidesToShow: 1,
	slidesToScroll: 1,
	centerPadding: '0',
	swipe: true,
	// waitForAnimate: false,
	mobileFirst: true,
	customPaging: function (slider, i) {
		return '';
	},
	/*infinite: false,*/
	responsive: [
		{
			breakpoint: 1127,
			settings: {
				autoplay: true
			}
		}
	]
});