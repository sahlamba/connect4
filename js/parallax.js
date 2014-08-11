/*global $, window*/

$(document).ready(function () {
	"use strict";
	
	$('div[data-type="prllx-layer"').each(function () {
		var $layer = $(this);
		
		$(window).scroll(function () {
			var yPos = -($(window).scrollTop() / $layer.data('speed')), coords = '50% ' + yPos + 'px';
			
			$layer.css({backgroundPosition: coords});
		});	
	});
	
});