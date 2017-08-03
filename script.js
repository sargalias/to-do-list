

function stripes() {
	$('li').removeClass('stripes');
	$('li:odd').addClass('stripes');
}

// add new item
$('input').on('keypress', function(event) {
	if (event.which === 13) {
		$('ul').append("<li><span class='li-span'><i class='fa fa-trash'></i></span> <span class='a'></span></li>");
		$('.a').last().text($(this).val());
		$(this).val("");
		stripes();
	}
})

// delete item
$('ul').on('click', 'span', function(event) {
	event.stopPropagation();
	$(this).parent().fadeOut(function() {
		$(this).remove()
		stripes();
	});
})

// cross out item
$('ul').on('click', 'li', function() {
	$(this).toggleClass('completed');
})

// click on + sign
$('.h1-span').on('click', function() {
	$('input').fadeToggle(100, function() {
		$(this).val('');
	});
	$('input').focus();
	$(this).toggleClass('input-on');
})

// need to figure out how to stripe items in css after deleting and adding.
