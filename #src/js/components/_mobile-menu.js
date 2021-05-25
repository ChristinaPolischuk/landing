$('.burger').on('click', () => {
	$('.mobile-menu').addClass('opened');
	$('body').addClass('fixed');
});
$('.js-close-menu').on('click', () => {
	$('.mobile-menu').removeClass('opened');
	$('body').removeClass('fixed');
});