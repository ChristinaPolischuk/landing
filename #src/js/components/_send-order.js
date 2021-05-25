$('.js-advantages-form').on('submit', sendOrder);
$('.js-order-form').on('submit', sendOrder);
$('.js-contacts-form').on('submit', sendOrder);

function sendOrder(e) {
	e.preventDefault();
	let form = $(this);
	let error = formValidate(form);
	if (error == 0) {
		$.ajax({
			type: "POST",
			url: "php/send-order.php",
			data: form.serialize(),
		}).done(function () {
			form.trigger('reset');
			$(location).attr('href', 'thanks.html');
		});
	}
}

function formValidate(form) {
	let error = 0;
	let fieldRequired = form.find('.required');
	fieldRequired.each(function () {
		removeError($(this));
		if ($(this).hasClass('phone')) {
			if (phoneTest($(this))) {
				addError($(this));
				error++;
			}
		} else if ($(this).attr('type') == 'checkbox' && !$(this).prop('checked')) {
			addError($(this));
			error++;
		} else {
			if ($(this).val() == '') {
				addError($(this));
				error++;
			}
		}
	});
	return error;
}

function addError(input) {
	input.parent().addClass('error');
	input.addClass('error');
}
function removeError(input) {
	input.parent().removeClass('error');
	input.removeClass('error');
}
function phoneTest(input) {
	return !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(input.val());
}