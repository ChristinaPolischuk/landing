$('.section-portfolio__works').slick({
	arrows: false,
	adaptiveHeight: true,
	mobileFirst: true,
	responsive: [
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 1127,
			settings: "unslick"
		}
	]
})