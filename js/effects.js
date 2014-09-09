/*global $, alert, console*/

function reload() {
	"use strict";
	
	location.reload();

	$(window).bind('beforeunload', function () {
		return 'Your game progress will not be saved.';
	});
}

function disableButtons() {
	"use strict";
	
    document.getElementById("1").disabled = true;
    document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("4").disabled = true;
    document.getElementById("5").disabled = true;
    document.getElementById("6").disabled = true;
    document.getElementById("7").disabled = true;
}

function enableButtons() {
	"use strict";
	
    document.getElementById("1").disabled = false;
    document.getElementById("2").disabled = false;
    document.getElementById("3").disabled = false;
    document.getElementById("4").disabled = false;
    document.getElementById("5").disabled = false;
    document.getElementById("6").disabled = false;
    document.getElementById("7").disabled = false;
}

function includeJS(x) {
	"use strict";
	var fileref = document.createElement('script');
	fileref.setAttribute("type", "text/javascript");
	fileref.setAttribute("src", x);
	document.getElementsByTagName("head")[0].appendChild(fileref);
}

function removeJS(x) {
	"use strict";
	var scripts = document.getElementsByTagName('script'), fileref, i;
	for (i = 0; i < scripts.length; i += 1) {
		if (scripts[i].getAttribute("src") === x) {
			fileref = scripts[i];
			document.getElementsByTagName("head")[0].removeChild(fileref);
			break;
		}
	}
}

var rules_light_box_flag = 0, player1Name = document.getElementById('player-name1').value, player2Name = document.getElementById('player-name2').value, player2Flag = 0;

function setGameOptions() {
	"use strict";
	
	player1Name = document.getElementById('player-name1').value;
	if (player1Name.length === 0) {
		player1Name = "Player1";
	}
	
	player2Name = document.getElementById('player-name2').value;
	if (player2Name.length === 0) {
		if (player2Flag === 0) {
			player2Name = "Amateur S.A.M.";
		} else if (player2Flag === 1) {
			player2Name = "Expert S.A.M.";
		} else {
			player2Name = "Player2";
		}
	}
	
	document.getElementById('player1').innerHTML = player1Name;
	document.getElementById('player2').innerHTML = player2Name;
	$('#game-options').fadeOut(200);
	$('#game-options-lightbox').fadeOut(200);
	enableButtons();
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
	
	disableButtons();
	
	$('input[type=radio][name=level]').change(function () {
		if (this.value === '2') { //Expert
			$('#game-options-lightbox').css("height", "418px");
			$('#player-name2').fadeOut(100);
			player2Name = document.getElementById('player-name2').value;
			player2Flag = 1;
			removeJS('js/multiplayer.js');
			removeJS('js/amateur.js');
			includeJS('js/expert.js');
		} else if (this.value === '3') { //Multiplayer
			removeJS('js/expert.js');
			removeJS('js/amateur.js');
			includeJS('js/multiplayer.js');
			player2Flag = 2;
			$('#game-options-lightbox').css("height", "455px");
			$('#player-name2').fadeIn(100);
		} else { //Amateur
			removeJS('js/expert.js');
			removeJS('js/multiplayer.js');
			includeJS('js/amateur.js');
			player2Flag = 0;
			$('#game-options-lightbox').css("height", "418px");
			$('#player-name2').fadeOut(100);
		}
	});

	$(document).keyup(function (e) {
		if (e.keyCode === 27 && rules_light_box_flag === 1) { //Esc Key
			$("#rules-lightbox").fadeOut(100);
			rules_light_box_flag = 0;
			$('#wrapper').removeClass('blur-back');
		}
	});
});

$(window).load(function () {
    "use strict";
    
    var sahil = $('#sahil'), aman = $('#aman'), mihir = $('#mihir');
    
    sahil.hover(function () {
		aman.css("background-image", 'url(images/aman-left.jpg)');
		mihir.css("background-image", 'url(images/mihir-left.jpg)');
	}, function () {
		aman.css("background-image", 'url(images/aman.jpg)');
		mihir.css("background-image", 'url(images/mihir.jpg)');
	});
	
	aman.hover(function () {
		sahil.css("background-image", 'url(images/sahil-right.jpg)');
		mihir.css("background-image", 'url(images/mihir-left.jpg)');
	}, function () {
		sahil.css("background-image", 'url(images/sahil.jpg)');
		mihir.css("background-image", 'url(images/mihir.jpg)');
	});
	
	mihir.hover(function () {
		aman.css("background-image", 'url(images/aman-right.jpg)');
		sahil.css("background-image", 'url(images/sahil-right.jpg)');
	}, function () {
		aman.css("background-image", 'url(images/aman.jpg)');
		sahil.css("background-image", 'url(images/sahil.jpg)');
	});
});