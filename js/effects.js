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
		$("#rules-lightbox").css("display", "block");
		rules_light_box_flag = 1;
	}
}

function hideRules() {
	"use strict";
	
	if (rules_light_box_flag === 1) {
		$("#rules-lightbox").css("display", "none");
		rules_light_box_flag = 0;
	}
}