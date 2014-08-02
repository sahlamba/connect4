/*global $, confirm*/

function reload() {
	"use strict";
	
	location.reload();

	$(window).bind('beforeunload', function () {
		return 'Your game progress will not be saved.';
	});
}

var rules_light_box_flag = 0;

function viewRules() {
	"use strict";

	if (rules_light_box_flag === 0) {
		$("#rules-lightbox").fadeIn(200);
		rules_light_box_flag = 1;
	}
}

function hideRules() {
	"use strict";

	if (rules_light_box_flag === 1) {
		$("#rules-lightbox").fadeOut(200);
		rules_light_box_flag = 0;
	}
}

$(document).ready(function () {
	"use strict";

	$(document).keyup(function (e) {
		if (e.keyCode === 27 && rules_light_box_flag === 1) { //Esc Key
			$("#rules-lightbox").fadeOut(200);
			rules_light_box_flag = 0;
		}
	});
});