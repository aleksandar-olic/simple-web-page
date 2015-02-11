
(function() {
	$('button#theme').click(function() {
		$('html').toggleClass("whiteBody");
	});
})();

(function() {
	$('dl').on('mouseenter', 'dt', function() {
	$(this)
		.next()
			.slideDown(200)
			.siblings('dd')
			.slideUp(200);
	});

	$('dl').on('mouseleave', 'dt', function() {
		$(this)
		.next()
			.slideUp(200);
	});
})();

(function() {
	var box = $('p');

	$.fn.FadeSlideToggle = function(speed, fn) {
		return $(this).animate({'height': 'toggle', 'opacity': 'toggle'}, speed || 200, function(){
			$.isFunction(fn) && fn.call(this);
		});
	};

	$('button.fade').on('click', function() {
		box.FadeSlideToggle(1000, function() {
			console.log('Hello');
		});
	});
})();



