var columns = new Array(100, 6, 6, 6, 6, 6, 6, 6);

var x, chance = 1, grid = new Array(7); //creating 2d array
grid[1] = new Array(8);
grid[2] = new Array(8);
grid[3] = new Array(8);
grid[4] = new Array(8);
grid[5] = new Array(8);
grid[6] = new Array(8);
grid[7] = new Array(8);

//Value of grid[x][y] is 0 for Player2 and 1 for Player1

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

var a = 0, b = 0;
function check(a, b) {
	"use strict";
	
    var counter = 0, direction = 5;
	
	//Horizontal checking starts
	
	if (grid[a][b] === grid[a][b + 1]) {
		counter += 1;
		direction = 1;
	}


	if (grid[a][b] === grid[a][b - 1]) {
		counter += 1;
		direction = 0;
	}

	if (counter === 1) {
		if (direction === 1) {

			if (grid[a][b] === grid[a][b + 1] && grid[a][b] === grid[a][b + 2] && grid[a][b] === grid[a][b + 3]) {
				if (grid[a][b] === 1) {
					document.getElementById("result").innerHTML = '<h2 style="color:coral;">Player 1 Wins</h2>';
				} else if (grid[a][b] === 0) {
					document.getElementById("result").innerHTML = '<h2 style="color:#02e4ca;">Player 2 Wins</h2>';
				}
				disableButtons();
			}
		}

		if (direction === 0) {

			if (grid[a][b] === grid[a][b - 1] && grid[a][b] === grid[a][b - 2] && grid[a][b] === grid[a][b - 3]) {
				if (grid[a][b] === 1) {
					document.getElementById("result").innerHTML = '<h2 style="color:coral;">Player 1 Wins</h2>';
				} else if (grid[a][b] === 0) {
					document.getElementById("result").innerHTML = '<h2 style="color:#02e4ca;">Player 2 Wins</h2>';
				}
				disableButtons();
			}
		}

	} else if (counter === 2) {
		if (grid[a][b] === grid[a][b + 2] || grid[a][b] === grid[a][b - 2]) {
			document.getElementById("result").innerHTML = 'You Win';
			disableButtons();
		}



	}
	
	//Horixontal checking ends
	//Verticle checking starts
	
    if (grid[a][b] === grid[a + 1][b] && grid[a][b] === grid[a + 2][b] && grid[a][b] === grid[a + 3][b]) {
		if (grid[a][b] === 1) {
			document.getElementById("result").innerHTML = '<h2 style="color:coral;">Player 1 Wins</h2>';
		} else if (grid[a][b] === 0) {
			document.getElementById("result").innerHTML = '<h2 style="color:#02e4ca;">Player 2 Wins</h2>';
		}
		disableButtons();
	}
	
	//Verticle checking ends
	//Forward slash diagonal checking starts
	
    var counter2 = 0, direction2 = 5;
	
    if (grid[a][b] === grid[a - 1][b + 1]) {
		counter2 += 1;
		direction2 = 1;
	}
        
    if (grid[a][b] === grid[a + 1][b - 1]) {
		counter2 += 1;
		direction2 = 0;
	}
        
    if (counter2 === 1) {
		if (direction2 === 1) {
			if (grid[a][b] === grid[a - 1][b + 1] && grid[a][b] === grid[a - 2][b + 2] && grid[a][b] === grid[a - 3][b + 3]) {
				if (grid[a][b] === 1) {
					document.getElementById("result").innerHTML = '<h2 style="color:coral;">Player 1 Wins</h2>';
				} else if (grid[a][b] === 0) {
					document.getElementById("result").innerHTML = '<h2 style="color:#02e4ca;">Player 2 Wins</h2>';
				}
				disableButtons();
			}
		}
            
		if (direction2 === 0) {
			
			if (grid[a][b] === grid[a + 1][b - 1] && grid[a][b] === grid[a + 2][b - 2] && grid[a][b] === grid[a + 3][b - 3]) {
				if (grid[a][b] === 1) {
					document.getElementById("result").innerHTML = '<h2 style="color:coral;">Player 1 Wins</h2>';
				} else if (grid[a][b] === 0) {
					document.getElementById("result").innerHTML = '<h2 style="color:#02e4ca;">Player 2 Wins</h2>';
				}
				disableButtons();
			}
		}
	} else if (counter2 === 2) {
		if (grid[a][b] === grid[a - 2][b + 2] || grid[a][b] === grid[a + 2][b - 2]) {
			document.getElementById("result").innerHTML = 'You Win';
			disableButtons();
		}
	}
	
	//Forward slash diagonal checking ends
	//Backward slash diagonal checking starts
	
    var counter3 = 0, direction3 = 5;
	
	if (grid[a][b] === grid[a + 1][b + 1]) {
		counter3 += 1;
		direction3 = 1;
	}
	
	if (grid[a][b] === grid[a - 1][b - 1]) {
		counter += 1;
		direction = 0;
	}
	
	if (counter3 === 1) {
		if (direction3 === 1) {
			if (grid[a][b] === grid[a + 1][b + 1] && grid[a][b] === grid[a + 2][b + 2] && grid[a][b] === grid[a + 3][b + 3]) {
				if (grid[a][b] === 1) {
					document.getElementById("result").innerHTML = '<h2 style="color:coral;">Player 1 Wins</h2>';
				} else if (grid[a][b] === 0) {
					document.getElementById("result").innerHTML = '<h2 style="color:#02e4ca;">Player 2 Wins</h2>';
				}
				disableButtons();
			}
		}

		if (direction3 === 0) {
			if (grid[a][b] === grid[a][b - 1] && grid[a][b] === grid[a][b - 2] && grid[a][b] === grid[a][b - 3]) {
				if (grid[a][b] === 1) {
					document.getElementById("result").innerHTML = '<h2 style="color:coral;">Player 1 Wins</h2>';
				} else if (grid[a][b] === 0) {
					document.getElementById("result").innerHTML = '<h2 style="color:#02e4ca;">Player 2 Wins</h2>';
				}
				disableButtons();

			}
		}

	} else if (counter3 === 2) {
		if (grid[a][b] === grid[a + 2][b + 2] || grid[a][b] === grid[a - 2][b - 2]) {
			document.getElementById("result").innerHTML = 'You Win';
			disableButtons();
		}
	}
	
	//Backward slash diagonal checking ends
}

function turn(x) {
    "use strict";
	
	var p;
	
    if (chance % 2 !== 0) {
		p = columns[x];
		grid[p][x] = 1;
		document.getElementById("" + p + x).className = 'round1';
		//document.getElementById("" + p + x).innerHTML = '' + grid[p][x];
		columns[x] -= 1;
		chance += 1;
		check(p, x);
    } else if (chance % 2 === 0) {
		p = columns[x];
		grid[p][x] = 0;
		document.getElementById("" + p + x).className = 'round2';
		//document.getElementById("" + p + x).innerHTML = '' + grid[p][x];
		columns[x] -= 1;
		chance += 1;
		check(p, x);
    }
}
