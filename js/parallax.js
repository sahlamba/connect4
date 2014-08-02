/*global $, window*/

$(document).ready(function () {
	"use strict";
	
	$('div[data-type="prllx-layer"').each(function () {
		var $layer = $(this);
		
		$(window).scroll(function () {
			var yPos = -($(window).scrollTop() / $layer.data('speed')), coords = '50% ' + yPos + 'px', down = $('.scroll-down-instruction'), up = $('.to-top');
			
			$layer.css({backgroundPosition: coords});
			
			if ($(window).scrollTop() > 300) {
				down.fadeOut(100);
				up.fadeIn(300);
			} else {
				up.fadeOut(100);
				down.fadeIn(300);
			}
			
		});
		
		$('a[href="#top"]').on('click', function (e) {
			e.preventDefault();

			var target = this.hash,
				$target = $(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 1000, 'swing', function () {
				window.location.hash = target;
			});
		});
		
	});
	
});