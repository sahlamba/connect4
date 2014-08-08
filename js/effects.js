/*global $, confirm, console*/

function reload() {
	"use strict";
	
	location.reload();

	$(window).bind('beforeunload', function () {
		return 'Your game progress will not be saved.';
	});
}

var rules_light_box_flag = 0, playerName = document.getElementById('player-name').value;

function setGameOptions() {
	"use strict";
	
	playerName = document.getElementById('player-name').value;
	if (playerName.length === 0) {
		playerName = "You";
	}
	
	document.getElementById('player1').innerHTML = playerName;
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