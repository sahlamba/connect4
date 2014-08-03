/*global $, confirm*/

function reload() {
	"use strict";
	
	location.reload();

	$(window).bind('beforeunload', function () {
		return 'Your game progress will not be saved.';
	});
}

var rules_light_box_flag = 0;

function setGameOptions() {
	"use strict";
	
	var playerForm = document.forms[0], playerName = playerForm.elements[0].value;
	document.getElementById('match-title').innerHTML = '<div><h2><span style="color: #d83018;" id="player1">' + playerName + '</span>&nbsp;&nbsp;Vs&nbsp;&nbsp;<span style="color: #ffd700;" id="player2">S.A.M.</span></h2></div>';
}

function hideOptions() {
	"use strict";
	
	$('#game-options').fadeOut(200);
}

function viewRules() {
	"use strict";

	if (rules_light_box_flag === 0) {
		$("#rules-lightbox").css('display', 'block');
		rules_light_box_flag = 1;
		$('#wrapper').addClass('blur-back');
	}
}

function hideRules() {
	"use strict";

	if (rules_light_box_flag === 1) {
		$("#rules-lightbox").fadeOut(100);
		rules_light_box_flag = 0;
		$('#wrapper').removeClass('blur-back');
	}
}

$(document).ready(function () {
	"use strict";

	$(document).keyup(function (e) {
		if (e.keyCode === 27 && rules_light_box_flag === 1) { //Esc Key
			$("#rules-lightbox").fadeOut(100);
			rules_light_box_flag = 0;
			$('#wrapper').removeClass('blur-back');
		}
	});
});