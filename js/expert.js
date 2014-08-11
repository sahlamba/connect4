/*global $*/

/**** Expert AI ****/

var columns = [100, 6, 6, 6, 6, 6, 6, 6];
var columnsCopy = [100, 6, 6, 6, 6, 6, 6];

var x, chance = 1, grid = new Array(8);//Creating 2d array
grid[0]= new Array(9);
grid[1] = new Array(9);
grid[2] = new Array(9);
grid[3] = new Array(9);
grid[4] = new Array(9);
grid[5] = new Array(9);
grid[6] = new Array(9);
grid[7] = new Array(9);


grid[0][0]=-100;

var gridc = new Array(9);
gridc[0]= new Array(9);
gridc[1] = new Array(9);
gridc[2] = new Array(9);
gridc[3] = new Array(9);
gridc[4] = new Array(9);
gridc[5] = new Array(9);
gridc[6] = new Array(9);
gridc[7] = new Array(9);

gridc[0][0]=-100;
var terminator=1; //1=on 2=off
//Value of grid[x][y] is 0 for Player2 and 1 for Player1

function result(i) {
	"use strict";
	var player1Name = document.getElementById('player1').innerHTML;
	var player2Name = document.getElementById('player2').innerHTML;
	
	if (i === 0) {
		document.getElementById("actual-result").innerHTML = '<h2>The game has hence been drawn.</h2>';
	} else if (i === 1) {
		document.getElementById("actual-result").innerHTML = '<h2>Go show off, <span style="color:#d83018; font-size: 20px">' + player1Name + '</span>, I gave you the win!<br>-' + player2Name + '</h2>';
		terminator = 2;
	} else if (i === 2) {
		document.getElementById("actual-result").innerHTML = '<h2>Artificial Intelligence beats natural stupidity! <span style="color:#ffd700; font-size: 20px">' + player2Name + '</span> wins!</h2>';
	}
	
	$("#result-lightbox").delay(2000).fadeIn(500);
	setTimeout(function () {
		$('#wrapper').addClass('blur-back');
	}, 2000);
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
    "use strict";
    var j1 = j - 1, j2 = j - 2, j3 = j - 3;
    var k1 = k +1, k2 = k + 2, k3 = k + 3;
    document.getElementById("" + j + k).className = " resultAnim1";
    document.getElementById(""+ j1 + k1).className = " resultAnim3";
    document.getElementById(""+ j2 + k2).className = " resultAnim3";
    document.getElementById(""+ j3 + k3).className = " resultAnim3"; 
}

function resultAnimForDia1b(j, k){
    "use strict";
    var j1 = j - 1, j2 = j - 2, j3 = j - 3;
    var k1 = k +1, k2 = k + 2, k3 = k + 3;
    document.getElementById("" + j + k).className = " resultAnim2";
    document.getElementById(""+ j1 + k1).className = " resultAnim4";
    document.getElementById(""+ j2 + k2).className = " resultAnim4";
    document.getElementById(""+ j3 + k3).className = " resultAnim4"; 
}


function resultAnimForDia2a(j, k){
    "use strict;"
    var j1 = j + 1, j2 = j + 2, j3 = j + 3;
    var k1 = k - 1, k2 = k - 2, k3 = k - 3;
    document.getElementById("" + j + k).className = " resultAnim1";
    document.getElementById(""+ j1 + k1).className = " resultAnim3";
    document.getElementById(""+ j2 + k2).className = " resultAnim3";
    document.getElementById(""+ j3 + k3).className = " resultAnim3"; 
}

function resultAnimForDia2b(j, k){
    "use strict";
    var j1 = j + 1, j2 = j + 2, j3 = j + 3;
    var k1 = k - 1, k2 = k - 2, k3 = k - 3;
    document.getElementById("" + j + k).className = " resultAnim2";
    document.getElementById(""+ j1 + k1).className = " resultAnim4";
    document.getElementById(""+ j2 + k2).className = " resultAnim4";
    document.getElementById(""+ j3 + k3).className = " resultAnim4"; 
}


function resultAnimForDia3a(j, k, l){
    "use strict;"
    var j1 = j - 1, j2 = j + 1, j3 = j + l;
    var k1 = k + 1, k2 = k - 1, k3 = k - l;
    document.getElementById("" + j + k).className = " resultAnim1";
    document.getElementById(""+ j1 + k1).className = " resultAnim3";
    document.getElementById(""+ j2 + k2).className = " resultAnim3";
    document.getElementById(""+ j3 + k3).className = " resultAnim3"; 
}

function resultAnimForDia3b(j, k, l){
    "use strict;"
    var j1 = j - 1, j2 = j + 1, j3 = j + l;
    var k1 = k + 1, k2 = k - 1, k3 = k - l;
    document.getElementById("" + j + k).className = " resultAnim2";
    document.getElementById(""+ j1 + k1).className = " resultAnim4";
    document.getElementById(""+ j2 + k2).className = " resultAnim4";
    document.getElementById(""+ j3 + k3).className = " resultAnim4"; 
}

function resultAnimBak1a(j, k){
    "use strict;"
    var j1 = j + 1, j2 = j + 2, j3 = j + 3;
    var k1 = k + 1, k2 = k + 2, k3 = k + 3;
    document.getElementById("" + j + k).className = " resultAnim1";
    document.getElementById(""+ j1 + k1).className = " resultAnim3";
    document.getElementById(""+ j2 + k2).className = " resultAnim3";
    document.getElementById(""+ j3 + k3).className = " resultAnim3"; 
}

function resultAnimBak1b(j, k){
    "use strict;"
    var j1 = j + 1, j2 = j + 2, j3 = j + 3;
    var k1 = k + 1, k2 = k + 2, k3 = k + 3;
    document.getElementById("" + j + k).className = " resultAnim2";
    document.getElementById(""+ j1 + k1).className = " resultAnim4";
    document.getElementById(""+ j2 + k2).className = " resultAnim4";
    document.getElementById(""+ j3 + k3).className = " resultAnim4";
}

function resultAnimBak2a(j, k){
    "use strict;"
    var j1 = j - 1, j2 = j - 2, j3 = j - 3;
    var k1 = k - 1, k2 = k - 2, k3 = k - 3;
    document.getElementById("" + j + k).className = " resultAnim1";
    document.getElementById(""+ j1 + k1).className = " resultAnim3";
    document.getElementById(""+ j2 + k2).className = " resultAnim3";
    document.getElementById(""+ j3 + k3).className = " resultAnim3"; 
}

function resultAnimBak2b(j, k){
    "use strict;"
    var j1 = j - 1, j2 = j - 2, j3 = j - 3;
    var k1 = k - 1, k2 = k - 2, k3 = k - 3;
    document.getElementById("" + j + k).className = " resultAnim2";
    document.getElementById(""+ j1 + k1).className = " resultAnim4";
    document.getElementById(""+ j2 + k2).className = " resultAnim4";
    document.getElementById(""+ j3 + k3).className = " resultAnim4"; 

}

function resultAnimBak3a(j, k, l){
    "use strict;"
    var j1 = j - 1, j2 = j + 1, j3 = j + l;
    var k1 = k - 1, k2 = k + 1, k3 = k + l;
    document.getElementById("" + j + k).className = " resultAnim1";
    document.getElementById(""+ j1 + k1).className = " resultAnim3";
    document.getElementById(""+ j2 + k2).className = " resultAnim3";
    document.getElementById(""+ j3 + k3).className = " resultAnim3"; 
}

function resultAnimBak3b(j, k, l){
    "use strict;"
    var j1 = j - 1, j2 = j + 1, j3 = j + l;
    var k1 = k - 1, k2 = k + 1, k3 = k + l;
    document.getElementById("" + j + k).className = " resultAnim2";
    document.getElementById(""+ j1 + k1).className = " resultAnim4";
    document.getElementById(""+ j2 + k2).className = " resultAnim4";
    document.getElementById(""+ j3 + k3).className = " resultAnim4"; 
}

var sum = 0;
function drawCondition() {
	"use strict";
	
    if (chance===42) {
        
		disableButtons();
        result(0);
        
    }
}




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
					result(1);
                    var b1 = b + 1, b2 = b + 2, b3 = b + 3;
                    resultAnim1(a, b, b1, b2, b3);
				} else if (grid[a][b] === 0) {
                    var b1 = b + 1, b2 = b + 2, b3 = b + 3;
                    resultAnim2(a, b, b1, b2, b3);
					result(2);
				}
				disableButtons();
			}
		}

		if (direction === 0) {

			if (grid[a][b] === grid[a][b - 1] && grid[a][b] === grid[a][b - 2] && grid[a][b] === grid[a][b - 3]) {
				if (grid[a][b] === 1) {
                    var b1 = b - 1, b2 = b - 2, b3 = b - 3;
                    resultAnim1(a, b, b1, b2, b3);
					result(1);
				} else if (grid[a][b] === 0) {
					result(2);
				    var b1 = b - 1, b2 = b - 2, b3 = b - 3;
                    resultAnim2(a, b, b1, b2, b3);
                }
				disableButtons();
			}
		}

	}  if (counter === 2) {
		if (grid[a][b] === grid[a][b + 2]) {
			
            if (grid[a][b] === 1) {
                    var b1 = b - 1, b2 = b + 1, b3 = b + 2;
                    resultAnim1(a, b, b1, b2, b3);
					result(1);
				} else if (grid[a][b] === 0) {
                    result(2);
				    var b1 = b - 1, b2 = b + 1, b3 = b + 2;
                    resultAnim2(a, b, b1, b2, b3);
                }
		}
        if (grid[a][b] === grid[a][b - 2]){
            
             if (grid[a][b] === 1) {
                    var b1 = b - 1, b2 = b + 1, b3 = b - 2;
                    resultAnim1(a, b, b1, b2, b3);
					result(1);
				} else if (grid[a][b] === 0) {
					result(2);
				    var b1 = b - 1, b2 = b + 1, b3 = b - 2;
                    resultAnim2(a, b, b1, b2, b3);
                }
        
        }


	}
	
	//Horixontal checking ends
	//Verticle checking starts
	
    if (grid[a][b] === grid[a + 1][b] && grid[a][b] === grid[a + 2][b] && grid[a][b] === grid[a + 3][b]) {
		if (grid[a][b] === 1) {
			result(1);
            resultAnimVer1(a, b, a+1, a+2, a+3);
		} else if (grid[a][b] === 0) {
			result(2);
            resultAnimVer2(a, b, a+1, a+2, a+3);
		}
		disableButtons();
	}
	
	//Verticle checking ends
	//Forward slash diagonal checking starts
	
    var counter2 = 0, direction2 = 5;
if(a>=1&&b<=7){ 	
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
					result(1);
				} else if (grid[a][b] === 0) {
                    resultAnimForDia1b(a,b);
					result(2);
				}
				disableButtons();
			}
		}
            
		if (direction2 === 0) {
			
			if (grid[a][b] === grid[a + 1][b - 1] && grid[a][b] === grid[a + 2][b - 2] && grid[a][b] === grid[a + 3][b - 3]) {
				if (grid[a][b] === 1) {
                    resultAnimForDia2a(a, b);
					result(1);
				} else if (grid[a][b] === 0) {
					result(2);
				    resultAnimForDia2b(a, b);
                }
				disableButtons();
			}
		}
	}  if (counter2 === 2) {
		
        if (grid[a][b] === grid[a - 2][b + 2]) {
			if (grid[a][b] === 1) {
                    resultAnimForDia3a(a, b, -2);
					result(1);
            } else if (grid[a][b] === 0) {
                    resultAnimForDia3b(a, b, -2);
                    result(2);                    
                }
			
        } 
        if (grid[a][b] === grid[a + 2][b - 2]){
            
           if (grid[a][b] === 1) {
                    
                    resultAnimForDia3a(a, b, 2);
					result(1);
				
            
            } else if (grid[a][b] === 0) {
                    resultAnimForDia3b(a, b, 2);
                    result(2);
				    
                    
                }
            
		}
        disableButtons();
	}
}        
	//Forward slash diagonal checking ends
	//Backward slash diagonal checking starts
if(a>=1&&b<=7){  	
    var counter3 = 0, direction3 = 5;
	
	if (grid[a][b] === grid[a + 1][b + 1]) {
		counter3 += 1;
		direction3 = 1;
	}
	
	if (grid[a][b] === grid[a - 1][b - 1]) {
		counter3 += 1;
		direction3 = 0;
	}
	
	if (counter3 === 1) {
		if (direction3 === 1) {
			if (grid[a][b] === grid[a + 1][b + 1] && grid[a][b] === grid[a + 2][b + 2] && grid[a][b] === grid[a + 3][b + 3]) {
				if (grid[a][b] === 1) {
					result(1);
                    resultAnimBak1a(a,b);
				} else if (grid[a][b] === 0) {
					result(2);
                    resultAnimBak1b(a,b);
				}
				disableButtons();
			}
		}

		if (direction3 === 0) {
			if (grid[a][b] === grid[a - 1][b - 1] && grid[a][b] === grid[a - 2][b - 2] && grid[a][b] === grid[a - 3][b - 3]) {
				if (grid[a][b] === 1) {
                    resultAnimBak2a(a, b);
					result(1);
				} else if (grid[a][b] === 0) {
                    resultAnimBak2b(a, b);
					result(2);
				}
				disableButtons();

			}
		}

	}  if (counter3 === 2) {
		if (grid[a][b] === grid[a + 2][b + 2]) {
            
		      if (grid[a][b] === 1) {
                    
                    resultAnimBak3a(a, b, 2);
					result(1);
				
            
            } else if (grid[a][b] === 0) {
                    resultAnimBak3b(a, b, 2);
                    result(2);
				    
                    
            }
        
        }
        
        
        if(grid[a][b] === grid[a - 2][b - 2]){
        
            if (grid[a][b] === 1) {
                    
                    resultAnimBak3a(a, b, -2);
					result(1);
				
            
            } else if (grid[a][b] === 0) {
                    resultAnimBak3b(a, b, -2);
                    result(2);
				    
                    
            }
        
        }
	}
}	
	//Backward slash diagonal checking ends



}

var del;

function turn(x) {
    "use strict";
	
	var p;
	
    
		p = columns[x];
		grid[p][x] = 1;
		document.getElementById("" + p + x).className = 'round1';
		//document.getElementById("" + p + x).innerHTML = '' + grid[p][x];
		columns[x] -= 1;
		if(columns[x]>0){
		  chance += 1;
        }
		check(p, x);
    
        if(terminator===2){
            return;
        }
     
    
    
        
        var r=AIMove();
        p = columns[r];
    if(columns[r]>=1){
        grid[p][r] = 0;

        disableButtons();

        del = setTimeout(function(){


            document.getElementById("" + p + r).className = 'round2';
            check(p, r); 
            //document.getElementById("" + p + x).innerHTML = '' + grid[p][x];
             }, 1000);


            if(columns[r]>0){
                  chance += 1;
            }






            setTimeout(function(){clearTimeout(del);

                             enableButtons();

                             }, 1000);

            columns[r]--;
            }

        drawCondition();
}


function copyGrid(){

    for(var i=1; i <= 6; i++){
        
        for(var j=1; j<=7; j++){
            gridc[i][j]=grid[i][j];
            
            columnsCopy[j]=columns[j];
            
        }
        
    }
}


    

function AIMove(){
    
    var columnResult = [1, 0, 0, 0, 0, 0, 0, 0];
    var toContinue=1;
    var toReturn=0;
    copyGrid();
    
        
    for(var i = 1; i <= 7; i++){
        
        copyGrid();
        
        
        var l = columnsCopy[i];
        

        
        gridc[l][i]=0;
        
        var counter = 0, direction = 5;
        
        var a=l, b=i;
        
        //Horizontal self checking starts
    
        if (gridc[a][b] === gridc[a][b + 1]) {
            counter += 1;
            direction = 1;
        }


        if (gridc[a][b] === gridc[a][b - 1]) {
            counter += 1;
            direction = 0;
        }
        
        if (counter === 1) {
            if (direction === 1) {
                                                                    
                if (gridc[a][b] === gridc[a][b + 1] && gridc[a][b] === gridc[a][b + 2] && gridc[a][b] === gridc[a][b + 3]) {
                    
                    columnResult[i]+=120;
                    toContinue=0;
                }
            }

            if (direction === 0) {

                if (gridc[a][b] === gridc[a][b - 1] && gridc[a][b] === gridc[a][b - 2] && gridc[a][b] === gridc[a][b - 3]) {
                    
                    columnResult[i]+=120;
                    toContinue=0;
                }
            }

        } else if (counter === 2) {
            if (gridc[a][b] === gridc[a][b + 2]) {
                
                columnResult[i]+=120;
                toContinue=0;
            }
            if (gridc[a][b] === gridc[a][b - 2]){
                
                 columnResult[i]+=120;
                 toContinue=0;
            
            }
        }
            //horizontal self checking ends
                
            //horizontal opponent checking starts
        
        gridc[l][i]=1;
        counter = 0, direction = 5;
        
        if (gridc[a][b] === gridc[a][b + 1]) {
            counter += 1;
            direction = 1;
        }


        if (gridc[a][b] === gridc[a][b - 1]) {
            counter += 1;
            direction = 0;
        }
        
        if (counter === 1) {
            if (direction === 1) {
                                                                    
                if (gridc[a][b] === gridc[a][b + 1] && gridc[a][b] === gridc[a][b + 2] && gridc[a][b] === gridc[a][b + 3]) {
                    
                    columnResult[i]+=90;
                    toContinue=0;
                }
            }

            if (direction === 0) {

                if (gridc[a][b] === gridc[a][b - 1] && gridc[a][b] === gridc[a][b - 2] && gridc[a][b] === gridc[a][b - 3]) {
                    
                    columnResult[i]+=90;
                    toContinue=0;
                }
            }

        } else if (counter === 2) {
            if (gridc[a][b] === gridc[a][b + 2]) {
                
                columnResult[i]+=90;
                toContinue=0;
            }
            if (gridc[a][b] === gridc[a][b - 2]){
                
                columnResult[i]+=90;
                toContinue=0;           
            }
        }
        
            //horizontal opponent checking ends 
                
            //vertical self checking starts
        
        gridc[l][i]=0;
        
        if (gridc[a][b] === gridc[a + 1][b] && gridc[a][b] === gridc[a + 2][b] && gridc[a][b] === gridc[a + 3][b]) {

           columnResult[i]+=120;
           toContinue=0;
        }
        
            //vertical self checking ends
            //vertical opponent checking starts
        
        gridc[l][i]=1;
        
        if (gridc[a][b] === gridc[a + 1][b] && gridc[a][b] === gridc[a + 2][b] && gridc[a][b] === gridc[a + 3][b]) {

           columnResult[i]+=90;
           toContinue=0;
        }
            //vertical opponent checking ends
                
            //forward slash self checking starts
        gridc[l][i]=0;    
        var counter2 = 0, direction2 = 5;
        if(a>1&&b<=6){    
                
            if (gridc[a][b] === gridc[a - 1][b + 1]) {
                counter2 += 1;
                direction2 = 1;
            }

            if (gridc[a][b] === gridc[a + 1][b - 1]) {
                counter2 += 1;
                direction2 = 0;
            }

            if (counter2 === 1) {
                if (direction2 === 1) {
                    if (gridc[a][b] === gridc[a - 1][b + 1] && gridc[a][b] === gridc[a - 2][b + 2] && gridc[a][b] === gridc[a - 3][b + 3]) {
                        columnResult[i]+=120;
                        toContinue=0;
                    }
                }

                if (direction2 === 0) {

                    if (gridc[a][b] === gridc[a + 1][b - 1] && gridc[a][b] === gridc[a + 2][b - 2] && gridc[a][b] === gridc[a + 3][b - 3]) {

                        columnResult[i]+=120;
                        toContinue=0;    
                    }
                }
            } else if (counter2 === 2) {

                if(a>=2&&b<=5){
                        if (gridc[a][b] === gridc[a - 2][b + 2]) {

                            columnResult[i]+=120;
                            toContinue=0;

                        } 
                        if (gridc[a][b] === gridc[a + 2][b - 2]){

                            columnResult[i]+=120;
                            toContinue=0;

                        }
                    }

                }
                
        }        
        
            //forward slash self checking ends    
            //forward slash opponent checking starts
      
        gridc[l][i]=1;    
        counter2 = 0, direction2 = 5;
        if(a>1&&b<=6){    
            if (gridc[a][b] === gridc[a - 1][b + 1]) {
                counter2 += 1;
                direction2 = 1;
            }
                
            if (gridc[a][b] === gridc[a + 1][b - 1]) {
                counter2 += 1;
                direction2 = 0;
            }
                
            if (counter2 === 1) {
                if (direction2 === 1) {
                    if (gridc[a][b] === gridc[a - 1][b + 1] && gridc[a][b] === gridc[a - 2][b + 2] && gridc[a][b] === gridc[a - 3][b + 3]) {
                            
                        
                          
                        columnResult[i]+=90;
                        toContinue=0;
                        
                    }
                }
                    
                if (direction2 === 0) {
                    
                    if (gridc[a][b] === gridc[a + 1][b - 1] && gridc[a][b] === gridc[a + 2][b - 2] && gridc[a][b] === gridc[a + 3][b - 3]) {
                        
                        columnResult[i]+=90;
                        toContinue=0;
                    }
                }
            } else if (counter2 === 2) {
                
                if (gridc[a][b] === gridc[a - 2][b + 2]) {
                   
                    columnResult[i]+=90;
                    toContinue=0;
                } 
                if (gridc[a][b] === gridc[a + 2][b - 2]){
                    
                    columnResult[i]+=90;
                    toContinue=0;
                }
                
            }
        }        
            //forward slash opponent checking ends
                
                
                
            //backward slash self checking starts
        gridc[l][i]=0;
            
        var counter3 = 0, direction3 = 5;
    
        if (gridc[a][b] === gridc[a + 1][b + 1]) {
            counter3 += 1;
            direction3 = 1;
        }
        if(a>1&&b<=6){    
            if (gridc[a][b] === gridc[a - 1][b - 1]) {
                counter3 += 1;
                direction3 = 0;
            }
            
            if (counter3 === 1) {
                if (direction3 === 1) {
                    if (gridc[a][b] === gridc[a + 1][b + 1] && gridc[a][b] === gridc[a + 2][b + 2] && gridc[a][b] === gridc[a + 3][b + 3]) {
                        
                       columnResult[i]+=120;
                       toContinue=0; 
                    }
                }

                if (direction3 === 0) {
                    if (gridc[a][b] === gridc[a - 1][b - 1] && gridc[a][b] === gridc[a - 2][b - 2] && gridc[a][b] === gridc[a - 3][b - 3]) {
                        
                        columnResult[i]+=120;
                        toContinue=0;
                    }
                }

            } else if (counter3 === 2) {
                if (gridc[a][b] === gridc[a + 2][b + 2]) {
                    
                    columnResult[i]+=120;
                    toContinue=0;                
                }
                
                
                if(gridc[a][b] === gridc[a - 2][b - 2]){
                
                    columnResult[i]+=120;
                    toContinue=0;
                }
            }
    
        }
                
        //backward slash self ends
        //backward slash opponent starts
        
            
        
        gridc[l][i] = 1;
        
        counter3 = 0, direction3 = 5;
    
        if (gridc[a][b] === gridc[a + 1][b + 1]) {
            counter3 += 1;
            direction3 = 1;
        }
        if(a>1&&b<=6){    
            if (gridc[a][b] === gridc[a - 1][b - 1]) {
                counter3 += 1;
                direction3 = 0;
            }
            
            if (counter3 === 1) {
                if (direction3 === 1) {
                    if (gridc[a][b] === gridc[a + 1][b + 1] && gridc[a][b] === gridc[a + 2][b + 2] && gridc[a][b] === gridc[a + 3][b + 3]) {
                        
                       columnResult[i]+=90;
                       toContinue=0; 
                    }
                }

                if (direction3 === 0) {
                    if (gridc[a][b] === gridc[a - 1][b - 1] && gridc[a][b] === gridc[a - 2][b - 2] && gridc[a][b] === gridc[a - 3][b - 3]) {
                        
                        columnResult[i]+=90;
                        toContinue=0;
                    }
                }

            } else if (counter3 === 2) {
                if (gridc[a][b] === gridc[a + 2][b + 2]) {
                    
                    columnResult[i]+=90;
                    toContinue=0;
                }
                
                
                if(gridc[a][b] === gridc[a - 2][b - 2]){
                
                    columnResult[i]+=90;
                    toContinue=0;
                }
            }
                
            //backward slash opponent checking ends
        }
		
		// three with one gap starts
		gridc[l][i] = 1;

		//horizontal starts

		if(gridc[a][b+2] === 1 && gridc[a][b+3] === 1 && gridc[a][b+1] !== 0 && gridc[a][b+1] !== 1){
			columnResult[i] += 9;
		}

		if(gridc[a][b-2] === 1 && gridc[a][b-3] === 1 && gridc[a][b-1] !== 0 && gridc[a][b-1] !== 1){
			columnResult[i] += 9;
		}
		
		// horizontal ends
		// three with one gap ends
        
        //just above check start
        

         if(toContinue === 1){   
            a=(l-1), b=(i);
            if(b<7 && a>=1){
                gridc[l][i]=0;
                columnsCopy[i]--;
                gridc[a][b]=1;
                columnsCopy[b]--;
                    
                    
                //horizontal opponent checking starts
                    
                  
                    
                var counter5 = 0, direction5 = 5;
                if (gridc[a][b] === gridc[a][b + 1]) {
                    counter5 += 1;
                    direction5 = 1;
                }


                if (gridc[a][b] === gridc[a][b - 1]) {
                    counter5 += 1;
                    direction5 = 0;
                }

                if (counter5 === 1) {
                    if (direction5 === 1) {

                        if (gridc[a][b] === gridc[a][b + 1] && gridc[a][b] === gridc[a][b + 2] && gridc[a][b] === gridc[a][b + 3]) {

                            columnResult[i]-=80;
                        }
                    }

                    if (direction5 === 0) {

                        if (gridc[a][b] === gridc[a][b - 1] && gridc[a][b] === gridc[a][b - 2] && gridc[a][b] === gridc[a][b - 3]) {

                            columnResult[i]-=80;

                        }
                    }

                } else if (counter5 === 2) {
                    if (gridc[a][b] === gridc[a][b + 2]) {

                        columnResult[i]-=80;
                    }
                    if (gridc[a][b] === gridc[a][b - 2]){

                         columnResult[i]-=80;

                    }


                }
                columnsCopy[i]++;
                columnsCopy[b]++;
                
                //verticle check
                if (gridc[a][b] === gridc[a + 1][b] && gridc[a][b] === gridc[a + 2][b] && gridc[a][b] === gridc[a + 3][b]) {

                   columnResult[i]-=80;
                   
                }
            } 
            
                //horizontal opponent checking ends
                //forward slash opponent checking starts
                
            
        
            a=l-1, b=i; 
            if(a>1 && b<7){
                gridc[l][i]=0;
                gridc[a][b]=1; 
                columnsCopy[i]--;
                columnsCopy[b]--;   
                 
                counter2 = 0, direction2 = 5;
                
                if (gridc[a][b] === gridc[a - 1][b + 1]){
                    counter2 += 1;
                    direction2 = 1;
                }
                    
                if (gridc[a][b] === gridc[a + 1][b - 1]) {
                    counter2 += 1;
                    direction2 = 0;
                }
                    
                if (counter2 === 1) {
                    if (direction2 === 1) {
                        if (gridc[a][b] === gridc[a - 1][b + 1] && gridc[a][b] === gridc[a - 2][b + 2] && gridc[a][b] === gridc[a - 3][b + 3]) {
                                
                            
                              
                            columnResult[i]-=80;
                            
                            
                            
                        }
                    }
                        
                    if (direction2 === 0) {
                        
                        if (gridc[a][b] === gridc[a + 1][b - 1] && gridc[a][b] === gridc[a + 2][b - 2] && gridc[a][b] === gridc[a + 3][b - 3]) {
                            
                            columnResult[i]-=80;
                            
                        }
                    }
                } else if (counter2 === 2) {
                    
                    if (gridc[a][b] === gridc[a - 2][b + 2]) {
                       
                        columnResult[i]-=80;
                        
                    } 
                    if (gridc[a][b] === gridc[a + 2][b - 2]){
                        
                        columnResult[i]-=80;
                        
                        
                    }
                    
                }
                columnsCopy[i]++;
                columnsCopy[b]++;
                    
                //forward slash opponnent checking end    
            }        
            
            
                //backward slash checking starts
             
            a=l-1, b=i;

            
            var counter6 = 0, direction6 = 5;
            if(a>1&&b<7){    
                 
                gridc[l][i]=0;
                gridc[l-1][i]=1;
                columnsCopy[i]-=2;
                if (gridc[a][b] === gridc[a + 1][b + 1]) {
                    counter6 += 1;
                    direction6 = 1;
                }
               
                if (gridc[a][b] === gridc[a - 1][b - 1]) {
                    counter6 += 1;
                    direction6 = 0;
                }
                
                if (counter6 === 1) {
                    if (direction6 === 1) {
                        if (gridc[a][b] === gridc[a + 1][b + 1] && gridc[a][b] === gridc[a + 2][b + 2] && gridc[a][b] === gridc[a + 3][b + 3]) {
                            
                            columnResult[i]-=80;
                            
                        }
                    }

                    if (direction6 === 0) {
                        if (gridc[a][b] === gridc[a - 1][b - 1] && gridc[a][b] === gridc[a - 2][b - 2] && gridc[a][b] === gridc[a - 3][b - 3]) {
                            
                            columnResult[i]-=80;
                            
                        }
                    }

                } else if (counter6 === 2) {
                    if (gridc[a][b] === gridc[a + 2][b + 2]) {
                        
                        columnResult[i]-=80;
                        
                    }
                    
                    
                    if(gridc[a][b] === gridc[a - 2][b - 2]){
                    
                        columnResult[i]-=80;
                        
                    }
                }
                    
                //backward slash checking ends    
                //just above check end    
                columnsCopy[i]+=2;

            }
        

            
        for(var k=1; k<=7; k++){
            copyGrid();
            l=columnsCopy[i];
            gridc[l][i]=0;
            columnsCopy[i]--;
            var l2 = columnsCopy[k];
            if(columnsCopy[k]>0){
                gridc[l2][k]=1;
                columnsCopy[k]--;


                a=(l2), b=(k);
                if(b<7 && a>=1){
                    
                        
                        
                        //horizontal opponent checking starts
                        
                      
                        
                        var counter5 = 0, direction5 = 5;
                        if (gridc[a][b] === gridc[a][b + 1]) {
                            counter5 += 1;
                            direction5 = 1;
                        }


                        if (gridc[a][b] === gridc[a][b - 1]) {
                            counter5 += 1;
                            direction5 = 0;
                        }
                        
                        if (counter5 === 1) {
                            if (direction5 === 1) {
                                                                                    
                                if (gridc[a][b] === gridc[a][b + 1] && gridc[a][b] === gridc[a][b + 2] && gridc[a][b] === gridc[a][b + 3]) {
                                    
                                    columnResult[i]-=75;
                                }
                            }

                            if (direction5 === 0) {

                                if (gridc[a][b] === gridc[a][b - 1] && gridc[a][b] === gridc[a][b - 2] && gridc[a][b] === gridc[a][b - 3]) {
                                    
                                    columnResult[i]-=75;
                                    
                                }
                            }

                    } else if (counter5 === 2) {
                        if (gridc[a][b] === gridc[a][b + 2]) {
                            
                            columnResult[i]-=75;
                        }
                        if (gridc[a][b] === gridc[a][b - 2]){
                            
                             columnResult[i]-=75;
                        
                        }
                        

                    }
                } 
                
                    //horizontal opponent checking ends
                    
                
                    //verticle check
                if (gridc[a][b] === gridc[a + 1][b] && gridc[a][b] === gridc[a + 2][b] && gridc[a][b] === gridc[a + 3][b]) {

                   columnResult[i]-=75;
                   
                }
                    //forward slash opponent checking starts
                    
                
            
                a=l2, b=k; 
                if(a>1 && b<7){
                       
                     
                    counter2 = 0, direction2 = 5;
                    
                    if (gridc[a][b] === gridc[a - 1][b + 1]){
                        counter2 += 1;
                        direction2 = 1;
                    }
                        
                    if (gridc[a][b] === gridc[a + 1][b - 1]) {
                        counter2 += 1;
                        direction2 = 0;
                    }
                        
                    if (counter2 === 1) {
                        if (direction2 === 1) {
                            if (gridc[a][b] === gridc[a - 1][b + 1] && gridc[a][b] === gridc[a - 2][b + 2] && gridc[a][b] === gridc[a - 3][b + 3]) {
                                    
                                
                                  
                                columnResult[i]-=75;
                                
                                
                            }
                        }
                            
                        if (direction2 === 0) {
                            
                            if (gridc[a][b] === gridc[a + 1][b - 1] && gridc[a][b] === gridc[a + 2][b - 2] && gridc[a][b] === gridc[a + 3][b - 3]) {
                                
                                columnResult[i]-=75;
                                
                            }
                        }
                    } else if (counter2 === 2) {
                        
                        if (gridc[a][b] === gridc[a - 2][b + 2]) {
                           
                            columnResult[i]-=75;
                            
                        } 
                        if (gridc[a][b] === gridc[a + 2][b - 2]){
                            
                          columnResult[i]-=75;
                            
                        }
                        
                    }
                        
                    //forward slash opponnent checking end    
                }        
                
                
                    //backward slash checking starts
                 
                

                
                var counter6 = 0, direction6 = 5;
                if(a>1&&b<7){    
                     
                    
                    if (gridc[a][b] === gridc[a + 1][b + 1]) {
                        counter6 += 1;
                        direction6 = 1;
                    }
                   
                    if (gridc[a][b] === gridc[a - 1][b - 1]) {
                        counter6 += 1;
                        direction6 = 0;
                    }
                    
                    if (counter6 === 1) {
                        if (direction6 === 1) {
                            if (gridc[a][b] === gridc[a + 1][b + 1] && gridc[a][b] === gridc[a + 2][b + 2] && gridc[a][b] === gridc[a + 3][b + 3]) {
                                
                               columnResult[i]-=75;
                                
                            }
                        }

                        if (direction6 === 0) {
                            if (gridc[a][b] === gridc[a - 1][b - 1] && gridc[a][b] === gridc[a - 2][b - 2] && gridc[a][b] === gridc[a - 3][b - 3]) {
                                
                                columnResult[i]-=75;
                                
                            }
                        }

                    } else if (counter6 === 2) {
                        if (gridc[a][b] === gridc[a + 2][b + 2]) {
                            
                            columnResult[i]-=75;
                        
                        }
                        
                        
                        if(gridc[a][b] === gridc[a - 2][b - 2]){
                        
                            columnResult[i]-=75;
                        
                        }
                    }
                        
                    //backward slash checking ends    
                    //just above check end    
                    

                }
                
                for(var m=1; m<=7; m++){
                    copyGrid();
                    gridc[l][i]=0;
                    columnsCopy[i]--;
                    gridc[l2][k]=1;
                    columnsCopy[k]--;
                    var l3 = columnsCopy[m];
                    if(columnsCopy[m]>0){
                        gridc[l3][m]=0;
                        columnsCopy[m]--;

                        a=(l3), b=(m);
                        if(b<7 && a>=1){
                            
                                
                                
                                    //horizontal opponent checking starts
                                
                              
                                
                            var counter5 = 0, direction5 = 5;
                            if (gridc[a][b] === gridc[a][b + 1]) {
                                counter5 += 1;
                                direction5 = 1;
                            }


                            if (gridc[a][b] === gridc[a][b - 1]) {
                                counter5 += 1;
                                direction5 = 0;
                            }
                            
                            if (counter5 === 1) {
                                if (direction5 === 1) {
                                                                                        
                                    if (gridc[a][b] === gridc[a][b + 1] && gridc[a][b] === gridc[a][b + 2] && gridc[a][b] === gridc[a][b + 3]) {
                                        
                                        columnResult[i]+=30;
                                    }
                                }

                                if (direction5 === 0) {

                                    if (gridc[a][b] === gridc[a][b - 1] && gridc[a][b] === gridc[a][b - 2] && gridc[a][b] === gridc[a][b - 3]) {
                                        
                                        columnResult[i]+=30;
                                        
                                    }
                                }10

                            } else if (counter5 === 2) {
                                if (gridc[a][b] === gridc[a][b + 2]) {
                                    
                                    columnResult[i]+=30;
                                }
                                if (gridc[a][b] === gridc[a][b - 2]){
                                    
                                     columnResult[i]+=30;
                                
                                }
                                

                            }
                        } 
                        
                            //horizontal opponent checking ends
                        
                        //verticle check
                        if (gridc[a][b] === gridc[a + 1][b] && gridc[a][b] === gridc[a + 2][b] && gridc[a][b] === gridc[a + 3][b]) {

                           columnResult[i]+=30;

                        }
                            //forward slash opponent checking starts
                            
                        
                    
                         
                        if(a>1 && b<7){ 
                               
                             
                            counter2 = 0, direction2 = 5;
                            
                            if (gridc[a][b] === gridc[a - 1][b + 1]){
                                counter2 += 1;
                                direction2 = 1;
                            }
                                
                            if (gridc[a][b] === gridc[a + 1][b - 1]) {
                                counter2 += 1;
                                direction2 = 0;
                            }
                                
                            if (counter2 === 1) {
                                if (direction2 === 1) {
                                    if (gridc[a][b] === gridc[a - 1][b + 1] && gridc[a][b] === gridc[a - 2][b + 2] && gridc[a][b] === gridc[a - 3][b + 3]) {
                                          
                                        columnResult[i]+=30;
                                        
                                    }
                                }
                                    
                                if (direction2 === 0) {
                                    
                                    if (gridc[a][b] === gridc[a + 1][b - 1] && gridc[a][b] === gridc[a + 2][b - 2] && gridc[a][b] === gridc[a + 3][b - 3]) {
                                        
                                        columnResult[i]+=20;
                                        
                                    }
                                }
                            } else if (counter2 === 2) {
                                
                                if (gridc[a][b] === gridc[a - 2][b + 2]) {
                                   
                                    columnResult[i]+=30;
                                    
                                } 
                                if (gridc[a][b] === gridc[a + 2][b - 2]){
                                    
                                  columnResult[i]+=30;
                                    
                                }
                                
                            }
                                
                            //forward slash opponnent checking end    
                        }        
                        
                        
                            //backward slash checking starts
                         
                        

                        
                        var counter6 = 0, direction6 = 5;
                        if(a>1&&b<7){    
                             
                            if (gridc[a][b] === gridc[a + 1][b + 1]) {
                                counter6 += 1;
                                direction6 = 1;
                            }
                           
                            if (gridc[a][b] === gridc[a - 1][b - 1]) {
                                counter6 += 1;
                                direction6 = 0;
                            }
                            
                            if (counter6 === 1) {
                                if (direction6 === 1) {
                                    if (gridc[a][b] === gridc[a + 1][b + 1] && gridc[a][b] === gridc[a + 2][b + 2] && gridc[a][b] === gridc[a + 3][b + 3]) {
                                        
                                       columnResult[i]+=30;
                                        
                                    }
                                }

                                if (direction6 === 0) {
                                    if (gridc[a][b] === gridc[a - 1][b - 1] && gridc[a][b] === gridc[a - 2][b - 2] && gridc[a][b] === gridc[a - 3][b - 3]) {
                                        
                                        columnResult[i]+=30;
                                        
                                    }
                                }

                            } else if (counter6 === 2) {
                                if (gridc[a][b] === gridc[a + 2][b + 2]) {
                                    
                                    columnResult[i]+=30;
                                
                                }
                                
                                
                                if(gridc[a][b] === gridc[a - 2][b - 2]){
                                
                                    columnResult[i]+=30;
                                
                                }
                            }
                                
                            //backward slash checking ends    
                            //just above check end    
                        }
                        
                        for(var n=1; n<=7; n++){
                            copyGrid();
                            gridc[l][i]=0;
                            columnsCopy[i]--;
                            gridc[l2][k]=1;
                            columnsCopy[k]--;
                            gridc[l3][m]=0;
                            columnsCopy[m]--;
                            var l4 = columnsCopy[n];
                            if(columnsCopy[n]>0){
                                gridc[l4][n]=1;
                                columnsCopy[n]--;

                                a=(l4), b=(n);
                                if(b<7 && a>=1){



                                    //horizontal opponent checking starts



                                    var counter5 = 0, direction5 = 5;
                                    if (gridc[a][b] === gridc[a][b + 1]) {
                                        counter5 += 1;
                                        direction5 = 1;
                                    }


                                    if (gridc[a][b] === gridc[a][b - 1]) {
                                        counter5 += 1;
                                        direction5 = 0;
                                    }

                                    if (counter5 === 1) {
                                        if (direction5 === 1) {

                                            if (gridc[a][b] === gridc[a][b + 1] && gridc[a][b] === gridc[a][b + 2] && gridc[a][b] === gridc[a][b + 3]) {

                                                columnResult[i]-=10;
                                            }
                                        }

                                        if (direction5 === 0) {

                                            if (gridc[a][b] === gridc[a][b - 1] && gridc[a][b] === gridc[a][b - 2] && gridc[a][b] === gridc[a][b - 3]) {

                                                columnResult[i]-=10;

                                            }
                                        }

                                    } else if (counter5 === 2) {
                                        if (gridc[a][b] === gridc[a][b + 2]) {

                                            columnResult[i]-=10;
                                        }
                                        if (gridc[a][b] === gridc[a][b - 2]){

                                             columnResult[i]-=10;

                                        }


                                    }
                                } 

                                    //horizontal opponent checking ends 
                                
                                //verticle check
                                if (gridc[a][b] === gridc[a + 1][b] && gridc[a][b] === gridc[a + 2][b] && gridc[a][b] === gridc[a + 3][b]) {

                                   columnResult[i]-=10;

                                }
                                    //forward slash opponent checking starts




                                if(a>1 && b<7){ 


                                    counter2 = 0, direction2 = 5;

                                    if (gridc[a][b] === gridc[a - 1][b + 1]){
                                        counter2 += 1;
                                        direction2 = 1;
                                    }

                                    if (gridc[a][b] === gridc[a + 1][b - 1]) {
                                        counter2 += 1;
                                        direction2 = 0;
                                    }

                                    if (counter2 === 1) {
                                        if (direction2 === 1) {
                                            if (gridc[a][b] === gridc[a - 1][b + 1] && gridc[a][b] === gridc[a - 2][b + 2] && gridc[a][b] === gridc[a - 3][b + 3]) {

                                                columnResult[i]-=10;
30
                                            }
                                        }

                                        if (direction2 === 0) {

                                            if (gridc[a][b] === gridc[a + 1][b - 1] && gridc[a][b] === gridc[a + 2][b - 2] && gridc[a][b] === gridc[a + 3][b - 3]) {

                                                columnResult[i]-=10;

                                            }
                                        }
                                    } else if (counter2 === 2) {

                                        if (gridc[a][b] === gridc[a - 2][b + 2]) {

                                            columnResult[i]-=10;

                                        } 
                                        if (gridc[a][b] === gridc[a + 2][b - 2]){

                                          columnResult[i]-=10;

                                        }

                                    }

                                //forward slash opponnent checking end    
                                }        


                                //backward slash checking starts




                                var counter6 = 0, direction6 = 5;
                                if(a>1&&b<7){    

                                    if (gridc[a][b] === gridc[a + 1][b + 1]) {
                                        counter6 += 1;
                                        direction6 = 1;
                                    }

                                    if (gridc[a][b] === gridc[a - 1][b - 1]) {
                                        counter6 += 1;
                                        direction6 = 0;
                                    }

                                    if (counter6 === 1) {
                                        if (direction6 === 1) {
                                            if (gridc[a][b] === gridc[a + 1][b + 1] && gridc[a][b] === gridc[a + 2][b + 2] && gridc[a][b] === gridc[a + 3][b + 3]) {

                                               columnResult[i]-=10;

                                            }
                                        }

                                        if (direction6 === 0) {
                                            if (gridc[a][b] === gridc[a - 1][b - 1] && gridc[a][b] === gridc[a - 2][b - 2] && gridc[a][b] === gridc[a - 3][b - 3]) {

                                                columnResult[i]-=10;

                                            }
                                        }

                                    } else if (counter6 === 2) {
                                        if (gridc[a][b] === gridc[a + 2][b + 2]) {

                                            columnResult[i]-=10;

                                        }


                                        if(gridc[a][b] === gridc[a - 2][b - 2]){

                                            columnResult[i]-=10;

                                        }
                                    }

                                    //backward slash checking ends    
                                    //just above check end    
                                }
                                
                                for(var i2; i2<=7; i2++){
                                    copyGrid();
                                    gridc[l][i]=0;
                                    columnsCopy[i]--;
                                    gridc[l2][k]=1;
                                    columnsCopy[k]--;
                                    gridc[l3][m]=0;
                                    columnsCopy[m]--;
                                    gridc[l4][n]=1;
                                    columnsCopy[n]--;
                                    var l5 = columnsCopy[i2];
                                    if(columnsCopy[i2]>0){
                                        gridc[l5][i2]=0;
                                        columnsCopy[i2]--;
                                        
                                        a=l5, b=i2;
                                        
                                        
                                        
                                        if(b<7 && a>=1){



                                            //horizontal opponent checking starts



                                            var counter5 = 0, direction5 = 5;
                                            if (gridc[a][b] === gridc[a][b + 1]) {
                                                counter5 += 1;
                                                direction5 = 1;
                                            }


                                            if (gridc[a][b] === gridc[a][b - 1]) {
                                                counter5 += 1;
                                                direction5 = 0;
                                            }

                                            if (counter5 === 1) {
                                                if (direction5 === 1) {

                                                    if (gridc[a][b] === gridc[a][b + 1] && gridc[a][b] === gridc[a][b + 2] && gridc[a][b] === gridc[a][b + 3]) {

                                                        columnResult[i]+=7;
                                                    }
                                                }

                                                if (direction5 === 0) {

                                                    if (gridc[a][b] === gridc[a][b - 1] && gridc[a][b] === gridc[a][b - 2] && gridc[a][b] === gridc[a][b - 3]) {

                                                        columnResult[i]+=7;

                                                    }
                                                }

                                            } else if (counter5 === 2) {
                                                if (gridc[a][b] === gridc[a][b + 2]) {

                                                    columnResult[i]+=7;
                                                }
                                                if (gridc[a][b] === gridc[a][b - 2]){

                                                     columnResult[i]+=7;

                                                }


                                            }
                                        } 

                                        //horizontal opponent checking ends 
                                        
                                        //vertical check
                                        
                                        if (gridc[a][b] === gridc[a + 1][b] && gridc[a][b] === gridc[a + 2][b] && gridc[a][b] === gridc[a + 3][b]) {

                                           columnResult[i]-=80;

                                        }
                                        //forward slash opponent checking starts




                                        if(a>1 && b<7){ 


                                            counter2 = 0, direction2 = 5;

                                            if (gridc[a][b] === gridc[a - 1][b + 1]){
                                                counter2 += 1;
                                                direction2 = 1;
                                            }

                                            if (gridc[a][b] === gridc[a + 1][b - 1]) {
                                                counter2 += 1;
                                                direction2 = 0;
                                            }

                                            if (counter2 === 1) {
                                                if (direction2 === 1) {
                                                    if (gridc[a][b] === gridc[a - 1][b + 1] && gridc[a][b] === gridc[a - 2][b + 2] && gridc[a][b] === gridc[a - 3][b + 3]) {

                                                        columnResult[i]+=7;

                                                    }
                                                }

                                                if (direction2 === 0) {

                                                    if (gridc[a][b] === gridc[a + 1][b - 1] && gridc[a][b] === gridc[a + 2][b - 2] && gridc[a][b] === gridc[a + 3][b - 3]) {

                                                        columnResult[i]+=7;

                                                    }
                                                }
                                            } else if (counter2 === 2) {

                                                if (gridc[a][b] === gridc[a - 2][b + 2]) {

                                                    columnResult[i]+=7;

                                                } 
                                                if (gridc[a][b] === gridc[a + 2][b - 2]){

                                                  columnResult[i]+=7;

                                                }

                                            }

                                            //forward slash opponnent checking end    
                                        }        


                                            //backward slash checking starts




                                        var counter6 = 0, direction6 = 5;
                                        if(a>1&&b<7){    

                                            if (gridc[a][b] === gridc[a + 1][b + 1]) {
                                                counter6 += 1;
                                                direction6 = 1;
                                            }

                                            if (gridc[a][b] === gridc[a - 1][b - 1]) {
                                                counter6 += 1;
                                                direction6 = 0;
                                            }

                                            if (counter6 === 1) {
                                                if (direction6 === 1) {
                                                    if (gridc[a][b] === gridc[a + 1][b + 1] && gridc[a][b] === gridc[a + 2][b + 2] && gridc[a][b] === gridc[a + 3][b + 3]) {

                                                       columnResult[i]+=7;

                                                    }
                                                }

                                                if (direction6 === 0) {
                                                    if (gridc[a][b] === gridc[a - 1][b - 1] && gridc[a][b] === gridc[a - 2][b - 2] && gridc[a][b] === gridc[a - 3][b - 3]) {

                                                        columnResult[i]+=7;

                                                    }
                                                }

                                            } else if (counter6 === 2) {
                                                if (gridc[a][b] === gridc[a + 2][b + 2]) {

                                                    columnResult[i]+=7;

                                                }


                                                if(gridc[a][b] === gridc[a - 2][b - 2]){

                                                    columnResult[i]+=7;

                                                }
                                            }

                                            //backward slash checking ends    
                                            //just above check end    
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
        
    var maxi=0;
    
    for(var j=1; j<=7; j++){
         
        if(columnResult[j]>maxi){
            if(columns[j]>=1){
                maxi=j;
            }
    
        }
    }
    if(maxi !== 0 && maxi<=7 && maxi >=1 && columns[maxi]>0){
        return maxi;
    } else {
		var checker = 0;
		while(checker === 0) {
			var k= Math.floor((Math.random() * 7) + 1);
			if(columns[k] > 0) {
				return k;
				checker = 1;
			}
		}
	}
}
