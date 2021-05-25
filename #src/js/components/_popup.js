// const sailPath = document.querySelectorAll('.section-steps__circle circle');
// for (let i = 0; i < sailPath.length; i++) {
// 	console.log(`sailPath ${i} is ${sailPath[i].getTotalLength()}`);
// }

$(document).on('click', '.js-show-popup', function (e) {
	e.preventDefault();
	$('body').addClass('fixed');
	let titleText = $(this).closest('.services__block').find('.content-title').text();
	let descrText = $(this).closest('.services__block').find('.services__descr').text();
	let hiddenText = $(this).closest('.services__block').find('.services__block-popup').html();
	console.log(hiddenText);
	$('.js-services-title').html(hiddenText);
	$('.js-services-descr').text(descrText);
	$('.js-type-of-service').val(titleText);
	$('.popup-overlay').addClass('is-open');
});

$(document).on('click', function (e) {
	if ($(e.target).hasClass('popup-overlay') || $(e.target).closest('.close-icon').hasClass('js-close-popup')) {
		$('body').removeClass('fixed');
		$('.popup-overlay').removeClass('is-open');
	}
});

$(document).on('keyup', function (e) {
	if (e.key == "Escape") {
		$('.popup-overlay').removeClass('is-open');
		$('body').removeClass('fixed');
	}
});