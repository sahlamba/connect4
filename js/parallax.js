/*global $, window*/

$(document).ready(function () {
	"use strict";
	
	function parallaxScroll() {
		var scrollY = $(window).scrollTop();
		
		$('#prllx-layer1').css('top', '-' + ((scrollY + 0.4)) + 'px');
		$('#prllx-layer2').css('top', '-' + ((scrollY + 0.6)) + 'px');
		$('#prllx-layer3').css('top', '-' + ((scrollY + 0.8)) + 'px');
		$('#prllx-layer4').css('top', '-' + ((scrollY + 1)) + 'px');
	}
	
	$(window).bind('scroll', function (e) {
		parallaxScroll();
	});
});