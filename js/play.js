var coloumns= new Array(100, 6, 6, 6, 6, 6, 6, 6);

var x;
var chance=1;
var grid= new Array(7); //creating 2d array
grid[1]= new Array(8);
grid[2]= new Array(8);
grid[3]= new Array(8);
grid[4]= new Array(8);
grid[5]= new Array(8);
grid[6]= new Array(8);
grid[7]= new Array(8);
//value of grid[x][y] is 0 for player2 and 1 for player 1 


function turn(x){
    
    if(chance%2!=0){    
            p=coloumns[x];
            document.getElementById(""+p+x).className='round1';
            coloumns[x]--;
            
            chance++;
    }

    else if(chance%2==0){
            p=coloumns[x];
            document.getElementById(""+p+x).className='round2';
            coloumns[x]--;
            chance++;
    }
    grid[p][x]=chance%2;
        
}