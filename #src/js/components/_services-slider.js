let options = {
	arrows: false,
	adaptiveHeight: true,
	mobileFirst: true,
	responsive: [
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 824,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 1127,
			settings: "unslick"
		}
	]
};

const servicesSlider = $('.services').on('init', function (slick) {
	multiSlideAdaptiveHeight(this);
}).on('beforeChange', function (slick, currentSlide, nextSlide) {

	multiSlideAdaptiveHeight(this);

}).slick(options);

function multiSlideAdaptiveHeight(slider) {

	let activeSlides = [];
	let tallestSlide = 0;

	setTimeout(function () {

		$('.slick-track .slick-active', slider).each(function (item) {

			activeSlides[item] = $(this).outerHeight();

		});

		activeSlides.forEach(function (item) {

			if (item > tallestSlide) {

				tallestSlide = item;

			}

		});

		$('.slick-list', slider).height(tallestSlide);

	}, 10);

}

$(window).on('resize', function () {
	multiSlideAdaptiveHeight(servicesSlider);
});