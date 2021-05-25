$('html, body').on('click', '.nav-menu__link, .mobile-menu__link, .link-order, .link-target, .mobile-menu__btn, .popup-info__btn', function (e) {
	e.preventDefault();
	$('.mobile-menu').removeClass('opened');
	$('.popup').removeClass('opened');
	$('body').removeClass('fixed');
	smoothScroll($(this).attr('data-target'));
	if ($(this).hasClass('link-order')) {
		$('.section-advantages__group:first-of-type .section-advantages__field').focus();
	}
});
function smoothScroll(id) {
	$('html, body').animate({
		scrollTop: $(id).offset().top
	}, 1000);
}