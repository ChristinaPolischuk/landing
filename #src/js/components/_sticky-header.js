$(window).scroll(function () {
	if ($(window).scrollTop() >= 100) {
		$('.header').addClass('scrolled');
	}
	else {
		$('.header').removeClass('scrolled');
	}
});
