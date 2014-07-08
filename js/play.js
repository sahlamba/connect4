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
var a=0;
var b=0;
function check(a,b){
    var counter=0;
    var direction=5;
    
        if(grid[a][b]==grid[a][b+1]){
            counter++;
            direction=1;
        }
       
        
        if(grid[a][b]==grid[a][b-1]){
            counter++;
            direction=0;
        }
        
        
       
        
        if(counter==1){
            if(direction==1){
                
                
                if(grid[a][b]==grid[a][b+1]&&grid[a][b]==grid[a][b+2]&&grid[a][b]==grid[a][b+3])
                {
                    if(grid[a][b]==1){
                        document.getElementById("result").innerHTML='<p style="color:coral;font-family:Ubuntu;font-size:15px;">Player 1 Wins</p>';
                    }
                    else if(grid[a][b]==0){
                        document.getElementById("result").innerHTML='<p style="color:#02e4ca;font-family:Ubuntu;font-size:15px;">Player 2 Wins</p>';
                    }
                    disableButtons();
                }
            }
            
            if(direction==0){
                
                
                if(grid[a][b]==grid[a][b-1]&&grid[a][b]==grid[a][b-2]&&grid[a][b]==grid[a][b-3])
                {
                    if(grid[a][b]==1){
                        document.getElementById("result").innerHTML='<p style="color:coral;font-family:Ubuntu;font-size:15px;">Player 1 Wins</p>';
                    }
                    else if(grid[a][b]==0){
                        document.getElementById("result").innerHTML='<p style="color:#02e4ca;font-family:Ubuntu;font-size:15px;">Player 2 Wins</p>';
                    }
                    disableButtons();

                }
            }
       
        }
    
        else if(counter==2){
            if(grid[a][b]==grid[a][b+2]||grid[a][b]==grid[a][b-2]){
                
                
                document.getElementById("result").innerHTML='You Win';
                disableButtons();
            }
        
        
        
        }

}

function turn(x){
    
    if(chance%2!=0){    
            p=coloumns[x];
            grid[p][x]=1;
            document.getElementById(""+p+x).className='round1';
//            document.getElementById(""+p+x).innerHTML=''+ grid[p][x];
            coloumns[x]--;
            
            chance++;
            check(p,x);
    }

    else if(chance%2==0){
            p=coloumns[x];
            grid[p][x]=0;
            document.getElementById(""+p+x).className='round2';
//            document.getElementById(""+p+x).innerHTML=''+ grid[p][x];
            coloumns[x]--;
            chance++;
            check(p,x);
    }
    
    
        
}

function disableButtons(){

    document.getElementById("1").disabled=true;
    document.getElementById("2").disabled=true;
    document.getElementById("3").disabled=true;
    document.getElementById("4").disabled=true;
    document.getElementById("5").disabled=true;
    document.getElementById("6").disabled=true;
    document.getElementById("7").disabled=true;
    


}
