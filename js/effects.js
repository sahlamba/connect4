/*global $*/

window.onbeforeunload = function (e) {
	"use strict";
	
	e = e || window.event;
	
	//For IE and Firefox prior to version 4
	if (e) {
		e.returnValue = 'Your game progress will not be saved.';
	}
	
	//For others
	return 'Your game progress will not be saved.';
};

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