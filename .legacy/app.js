
$(function() {
	$('.welcome').children().addBack().contents().each(function() {
		if(this.nodeType == 3) {
			var $this = $(this);
			$this.replaceWith($this.text().replace(/(.)/g, "<span>$&</span>"));
		}
	});

	$('#enter_button').on('click', function() {
		scroll('#about_me', 750);
	});
	$('.menu li a[href^=#]').on('click', function(e) {
		e.preventDefault();
		var target = $(this).attr('href');
		scroll(target, 750);
	});
	$('#go_top_button a').on('click', function(e) {
		e.preventDefault();
		var target = $(this).attr('href');
		scroll(target, 750);
	});
	var scroll = function(target, time) {
		if(target === '#') {
			target = 'html';
		}
		var pos = $(target).offset().top;
		$('html, body').animate({scrollTop:pos}, time);
	};
	var nav = $('#navigation');
	var navtop = nav.offset().top;
	$(window).on('scroll', function() {
		if($(window).scrollTop() >= navtop) {
			nav.addClass('fixed');
			$('body').css('margin-top', '44px');
			//$('#about_me').css('padding-top', '8vh');
			$('#go_top_button').addClass('show');
		} else {
			nav.removeClass('fixed');
			$('body').css('margin-top', '0px');
			$('#go_top_button').removeClass('show');
			//$('#about_me').css('padding-top', '0vh');
		}
	});

	$('.tab a[href^=#]').on('click', function(e) {
		e.preventDefault();
		var _this = $(this);
		var parents = _this.parents();
		$(parents.get(1)).children().removeClass('current');
		$(parents.get(0)).addClass('current');
		var target = _this.attr('href');
		$($(target).parent()).children().removeClass('current');
		$(target).addClass('current');
	});
});

