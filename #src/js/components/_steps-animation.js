$(window).scroll(function () {
	var top_of_element = $(".section-steps__list").offset().top;
	var bottom_of_element = $(".section-steps__list").offset().top + $(".section-steps__list").outerHeight();
	var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
	var top_of_screen = $(window).scrollTop();

	if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
		$('.section-steps__arrow').addClass('move');
		$(".section-steps__circle").each(function (i, el) {
			$(el).addClass(`circle-${i + 1}`);
		});
	} else {
		$('.section-steps__arrow').removeClass('move');
		$(".section-steps__circle").each(function (i, el) {
			$(el).removeClass(`circle-${i + 1}`);
		});
	}
});