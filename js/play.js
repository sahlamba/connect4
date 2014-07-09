var columns = [100, 6, 6, 6, 6, 6, 6, 6];

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
var j = 10, k = 10, l = 10, m = 10, n = 10;

function resultAnim1(j, k, l, m, n) {
    "use strict";
    document.getElementById(""+ j + k).className = " resultAnim1";
    document.getElementById(""+ j + l).className = " resultAnim3";
    document.getElementById(""+ j + m).className = " resultAnim3";
    document.getElementById(""+ j + n).className = " resultAnim3";

}

function resultAnim2(j, k, l, m, n) {
    "use strict";
    document.getElementById(""+ j + k).className = " resultAnim2";
    document.getElementById(""+ j + l).className = " resultAnim4";
    document.getElementById(""+ j + m).className = " resultAnim4";
    document.getElementById(""+ j + n).className = " resultAnim4";

}

function resultAnimVer1(j, k, l, m, n){
    "use strict";
    document.getElementById("" + j + k).className = " resultAnim1";
    document.getElementById(""+ l + k).className = " resultAnim3";
    document.getElementById(""+ m + k).className = " resultAnim3";
    document.getElementById(""+ n + k).className = " resultAnim3";
}

function resultAnimVer2(j, k, l, m, n){
    "use strict";
    document.getElementById(""+ j + k).className = " resultAnim2";
    document.getElementById(""+ l + k).className = " resultAnim4";
    document.getElementById(""+ m + k).className = " resultAnim4";
    document.getElementById(""+ n + k).className = " resultAnim4";

}

function resultAnimForDia1a(j, k){
    "use strict;"
    var j1 = j - 1, j2 = j - 2, j3 = j - 3;
    var k1 = k +1, k2 = k + 2; k3 = k + 3;
    document.getElementById("" + j + k).className = " resultAnim1";
    document.getElementById(""+ j1 + k1).className = " resultAnim3";
    document.getElementById(""+ j2 + k2).className = " resultAnim3";
    document.getElementById(""+ j3 + k3).className = " resultAnim3"; 
}

function resultAnimForDia1b(j, k){
    "use strict;"
    var j1 = j - 1, j2 = j - 2, j3 = j - 3;
    var k1 = k +1, k2 = k + 2; k3 = k + 3;
    document.getElementById("" + j + k).className = " resultAnim2";
    document.getElementById(""+ j1 + k1).className = " resultAnim4";
    document.getElementById(""+ j2 + k2).className = " resultAnim4";
    document.getElementById(""+ j3 + k3).className = " resultAnim4"; 
}


function resultAnimForDia2a(j, k){
    "use strict;"
    var j1 = j + 1, j2 = j + 2, j3 = j + 3;
    var k1 = k - 1, k2 = k - 2; k3 = k - 3;
    document.getElementById("" + j + k).className = " resultAnim1";
    document.getElementById(""+ j1 + k1).className = " resultAnim3";
    document.getElementById(""+ j2 + k2).className = " resultAnim3";
    document.getElementById(""+ j3 + k3).className = " resultAnim3"; 
}

function resultAnimForDia2b(j, k){
    "use strict;"
    var j1 = j + 1, j2 = j + 2, j3 = j + 3;
    var k1 = k - 1, k2 = k - 2; k3 = k - 3;
    document.getElementById("" + j + k).className = " resultAnim2";
    document.getElementById(""+ j1 + k1).className = " resultAnim4";
    document.getElementById(""+ j2 + k2).className = " resultAnim4";
    document.getElementById(""+ j3 + k3).className = " resultAnim4"; 
}


function resultAnimForDia3a(j, k, l){
    "use strict;"
    var j1 = j - 1, j2 = j + 1, j3 = j + l;
    var k1 = k + 1, k2 = k - 1; k3 = k - l;
    document.getElementById("" + j + k).className = " resultAnim1";
    document.getElementById(""+ j1 + k1).className = " resultAnim3";
    document.getElementById(""+ j2 + k2).className = " resultAnim3";
    document.getElementById(""+ j3 + k3).className = " resultAnim3"; 
}

function resultAnimForDia3b(j, k, l){
    "use strict;"
    var j1 = j - 1, j2 = j + 1, j3 = j + l;
    var k1 = k + 1, k2 = k - 1; k3 = k - l;
    document.getElementById("" + j + k).className = " resultAnim2";
    document.getElementById(""+ j1 + k1).className = " resultAnim4";
    document.getElementById(""+ j2 + k2).className = " resultAnim4";
    document.getElementById(""+ j3 + k3).className = " resultAnim4"; 
}

function resultAnimBak1a(j, k){
    "use strict;"
    var j1 = j + 1, j2 = j + 2, j3 = j + 3;
    var k1 = k + 1, k2 = k + 2; k3 = k + 3;
    document.getElementById("" + j + k).className = " resultAnim1";
    document.getElementById(""+ j1 + k1).className = " resultAnim3";
    document.getElementById(""+ j2 + k2).className = " resultAnim3";
    document.getElementById(""+ j3 + k3).className = " resultAnim3"; 
}

function resultAnimBak1b(j, k){
    "use strict;"
    var j1 = j + 1, j2 = j + 2, j3 = j + 3;
    var k1 = k + 1, k2 = k + 2; k3 = k + 3;
    document.getElementById("" + j + k).className = " resultAnim2";
    document.getElementById(""+ j1 + k1).className = " resultAnim4";
    document.getElementById(""+ j2 + k2).className = " resultAnim4";
    document.getElementById(""+ j3 + k3).className = " resultAnim4"; 

}


function resultAnimBak2a(j, k){
    "use strict;"
    var j1 = j - 1, j2 = j - 2, j3 = j - 3;
    var k1 = k - 1, k2 = k - 2; k3 = k - 3;
    document.getElementById("" + j + k).className = " resultAnim1";
    document.getElementById(""+ j1 + k1).className = " resultAnim3";
    document.getElementById(""+ j2 + k2).className = " resultAnim3";
    document.getElementById(""+ j3 + k3).className = " resultAnim3"; 
}

function resultAnimBak2b(j, k){
    "use strict;"
    var j1 = j - 1, j2 = j - 2, j3 = j - 3;
    var k1 = k - 1, k2 = k - 2; k3 = k - 3;
    document.getElementById("" + j + k).className = " resultAnim2";
    document.getElementById(""+ j1 + k1).className = " resultAnim4";
    document.getElementById(""+ j2 + k2).className = " resultAnim4";
    document.getElementById(""+ j3 + k3).className = " resultAnim4"; 

}

function resultAnimBak3a(j, k, l){
    "use strict;"
    var j1 = j - 1, j2 = j + 1, j3 = j + l;
    var k1 = k + 1, k2 = k - 1; k3 = k + l;
    document.getElementById("" + j + k).className = " resultAnim1";
    document.getElementById(""+ j1 + k1).className = " resultAnim3";
    document.getElementById(""+ j2 + k2).className = " resultAnim3";
    document.getElementById(""+ j3 + k3).className = " resultAnim3"; 
}

function resultAnimBak3b(j, k, l){
    "use strict;"
    var j1 = j - 1, j2 = j + 1, j3 = j + l;
    var k1 = k + 1, k2 = k - 1; k3 = k + l;
    document.getElementById("" + j + k).className = " resultAnim2";
    document.getElementById(""+ j1 + k1).className = " resultAnim4";
    document.getElementById(""+ j2 + k2).className = " resultAnim4";
    document.getElementById(""+ j3 + k3).className = " resultAnim4"; 
}

function drawCondition(){

    for(var i=1; i<=7; i++){
        
        sum+=columns[i];
            
    }
    if(sum==0){
        document.getElementById("result").innerHTML = '<h2 style="color:#d83018;">The game has hence been Drawn</h2>';
        disableButtons();
    }

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
                    var b1 = b + 1, b2 = b + 2, b3 = b + 3;
                    resultAnim1(a, b, b1, b2, b3);
				} else if (grid[a][b] === 0) {
                    var b1 = b + 1, b2 = b + 2, b3 = b + 3;
                    resultAnim2(a, b, b1, b2, b3);
					document.getElementById("result").innerHTML = '<h2 style="color:#02e4ca;">Player 2 Wins</h2>';
				}
				disableButtons();
			}
		}

		if (direction === 0) {

			if (grid[a][b] === grid[a][b - 1] && grid[a][b] === grid[a][b - 2] && grid[a][b] === grid[a][b - 3]) {
				if (grid[a][b] === 1) {
                    var b1 = b - 1, b2 = b - 2, b3 = b - 3;
                    resultAnim1(a, b, b1, b2, b3);
					document.getElementById("result").innerHTML = '<h2 style="color:coral;">Player 1 Wins</h2>';
				} else if (grid[a][b] === 0) {
					document.getElementById("result").innerHTML = '<h2 style="color:#02e4ca;">Player 2 Wins</h2>';
				    var b1 = b - 1, b2 = b - 2, b3 = b - 3;
                    resultAnim2(a, b, b1, b2, b3);
                }
				disableButtons();
			}
		}

	} else if (counter === 2) {
		if (grid[a][b] === grid[a][b + 2]) {
			
            if (grid[a][b] === 1) {
                    var b1 = b - 1, b2 = b + 1, b3 = b + 2;
                    resultAnim1(a, b, b1, b2, b3);
					document.getElementById("result").innerHTML = '<h2 style="color:coral;">Player 1 Wins</h2>';
				} else if (grid[a][b] === 0) {
                    document.getElementById("result").innerHTML = '<h2 style="color:#02e4ca;">Player 2 Wins</h2>';
				    var b1 = b - 1, b2 = b + 1, b3 = b + 2;
                    resultAnim2(a, b, b1, b2, b3);
                }
		}
        if (grid[a][b] === grid[a][b - 2]){
            
             if (grid[a][b] === 1) {
                    var b1 = b - 1, b2 = b + 1, b3 = b - 2;
                    resultAnim1(a, b, b1, b2, b3);
					document.getElementById("result").innerHTML = '<h2 style="color:coral;">Player 1 Wins</h2>';
				} else if (grid[a][b] === 0) {
					document.getElementById("result").innerHTML = '<h2 style="color:#02e4ca;">Player 2 Wins</h2>';
				    var b1 = b - 1, b2 = b + 1, b3 = b - 2;
                    resultAnim2(a, b, b1, b2, b3);
                }
        
        }


	}
	
	//Horixontal checking ends
	//Verticle checking starts
	
    if (grid[a][b] === grid[a + 1][b] && grid[a][b] === grid[a + 2][b] && grid[a][b] === grid[a + 3][b]) {
		if (grid[a][b] === 1) {
			document.getElementById("result").innerHTML = '<h2 style="color:coral;">Player 1 Wins</h2>';
            resultAnimVer1(a, b, a+1, a+2, a+3);
		} else if (grid[a][b] === 0) {
			document.getElementById("result").innerHTML = '<h2 style="color:#02e4ca;">Player 2 Wins</h2>';
            resultAnimVer2(a, b, a+1, a+2, a+3);
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
                    resultAnimForDia1a(a,b);
					document.getElementById("result").innerHTML = '<h2 style="color:coral;">Player 1 Wins</h2>';
				} else if (grid[a][b] === 0) {
                    resultAnimForDia1b(a,b);
					document.getElementById("result").innerHTML = '<h2 style="color:#02e4ca;">Player 2 Wins</h2>';
				}
				disableButtons();
			}
		}
            
		if (direction2 === 0) {
			
			if (grid[a][b] === grid[a + 1][b - 1] && grid[a][b] === grid[a + 2][b - 2] && grid[a][b] === grid[a + 3][b - 3]) {
				if (grid[a][b] === 1) {
                    resultAnimForDia2a(a, b);
					document.getElementById("result").innerHTML = '<h2 style="color:coral;">Player 1 Wins</h2>';
				} else if (grid[a][b] === 0) {
					document.getElementById("result").innerHTML = '<h2 style="color:#02e4ca;">Player 2 Wins</h2>';
				    resultAnimForDia2a(a, b);
                }
				disableButtons();
			}
		}
	} else if (counter2 === 2) {
		
        if (grid[a][b] === grid[a - 2][b + 2]) {
			if (grid[a][b] === 1) {
                    
                    resultAnimForDia3a(a, b, -2);
					document.getElementById("result").innerHTML = '<h2 style="color:coral;">Player 1 Wins</h2>';
				
            
            } else if (grid[a][b] === 0) {
                    resultAnimForDia3b(a, b, -2);
                    document.getElementById("result").innerHTML = '<h2 style="color:#02e4ca;">Player 2 Wins</h2>';
				    
                    
                }
			
        } 
        if (grid[a][b] === grid[a + 2][b - 2]){
            
           if (grid[a][b] === 1) {
                    
                    resultAnimForDia3a(a, b, 2);
					document.getElementById("result").innerHTML = '<h2 style="color:coral;">Player 1 Wins</h2>';
				
            
            } else if (grid[a][b] === 0) {
                    resultAnimForDia3b(a, b, 2);
                    document.getElementById("result").innerHTML = '<h2 style="color:#02e4ca;">Player 2 Wins</h2>';
				    
                    
                }
            
		}
        disableButtons();
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
                    resultAnimBak1a(a,b);
				} else if (grid[a][b] === 0) {
					document.getElementById("result").innerHTML = '<h2 style="color:#02e4ca;">Player 2 Wins</h2>';
                    resultAnimBak1b(a,b);
				}
				disableButtons();
			}
		}

		if (direction3 === 0) {
			if (grid[a][b] === grid[a - 1][b - 1] && grid[a][b] === grid[a - 2][b - 2] && grid[a][b] === grid[a - 3][b - 3]) {
				if (grid[a][b] === 1) {
                    resultAnimBak2a(a, b);
					document.getElementById("result").innerHTML = '<h2 style="color:coral;">Player 1 Wins</h2>';
				} else if (grid[a][b] === 0) {
                    resultAnimBak2b(a, b);
					document.getElementById("result").innerHTML = '<h2 style="color:#02e4ca;">Player 2 Wins</h2>';
				}
				disableButtons();

			}
		}

	} else if (counter3 === 2) {
		if (grid[a][b] === grid[a + 2][b + 2]) {
            
		      if (grid[a][b] === 1) {
                    
                    resultAnimBak3a(a, b, 2);
					document.getElementById("result").innerHTML = '<h2 style="color:coral;">Player 1 Wins</h2>';
				
            
            } else if (grid[a][b] === 0) {
                    resultAnimBak3b(a, b, 2);
                    document.getElementById("result").innerHTML = '<h2 style="color:#02e4ca;">Player 2 Wins</h2>';
				    
                    
            }
        
        }
        
        
        if(grid[a][b] === grid[a - 2][b - 2]){
        
            if (grid[a][b] === 1) {
                    
                    resultAnimBak3a(a, b, -2);
					document.getElementById("result").innerHTML = '<h2 style="color:coral;">Player 1 Wins</h2>';
				
            
            } else if (grid[a][b] === 0) {
                    resultAnimBak3b(a, b, -2);
                    document.getElementById("result").innerHTML = '<h2 style="color:#02e4ca;">Player 2 Wins</h2>';
				    
                    
            }
        
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
    drawCondition();
}
