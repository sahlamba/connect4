function tempcheck(a, b) {
	"use strict";
    

	
    var counter = 0, direction = 5;
	
	//Horizontal checking starts
	
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
				if (gridc[a][b] === 1) {
					return 1;
                    
				} else if (gridc[a][b] === 0) {
                    
                    return 2;
				}
				
			}
		}

		if (direction === 0) {

			if (gridc[a][b] === gridc[a][b - 1] && gridc[a][b] === gridc[a][b - 2] && gridc[a][b] === gridc[a][b - 3]) {
				if (gridc[a][b] === 1) {
                   
					return 1;
				} else if (gridc[a][b] === 0) {
					
				    return 2;
                }
				
			}
		}

	} else if (counter === 2) {
		if (gridc[a][b] === gridc[a][b + 2]) {
			
            if (gridc[a][b] === 1) {
                    
					return 1;
				} else if (gridc[a][b] === 0) {
                    return 2;
				    
                }
		}
        if (gridc[a][b] === gridc[a][b - 2]){
            
             if (gridc[a][b] === 1) {
                    
					return 1;
				} else if (gridc[a][b] === 0) {
					return 2;
				    
                }
        
        }


	}
	
	//Horixontal checking ends
	//Verticle checking starts
	
    if (gridc[a][b] === gridc[a + 1][b] && gridc[a][b] === gridc[a + 2][b] && gridc[a][b] === gridc[a + 3][b]) {
		if (gridc[a][b] === 1) {
			return 1;
		} else if (gridc[a][b] === 0) {
			return 2;
		}
		
	}
	
	//Verticle checking ends
	//Forward slash diagonal checking starts
	
    var counter2 = 0, direction2 = 5;
	
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
				if (gridc[a][b] === 1) {
                     
					return 1;
				} else if (gridc[a][b] === 0) {
                    return 2;
				}
				
			}
		}
            
		if (direction2 === 0) {
			
			if (gridc[a][b] === gridc[a + 1][b - 1] && gridc[a][b] === gridc[a + 2][b - 2] && gridc[a][b] === gridc[a + 3][b - 3]) {
				if (gridc[a][b] === 1) {
                     
					return 1;
				} else if (gridc[a][b] === 0) {
					return 2;
                }
				
			}
		}
	} else if (counter2 === 2) {
		
        if (gridc[a][b] === gridc[a - 2][b + 2]) {
			if (gridc[a][b] === 1) {
                    
					return 1;
            } else if (gridc[a][b] === 0) {
                   return 2;                   
                }
			
        } 
        if (gridc[a][b] === gridc[a + 2][b - 2]){
            
           if (gridc[a][b] === 1) {
                    
                     
					return 1;
				
            
            } else if (gridc[a][b] === 0) {
                    return 2;
				    
                    
                }
            
		}
        
	}
	
	//Forward slash diagonal checking ends
	//Backward slash diagonal checking starts
	
    var counter3 = 0, direction3 = 5;
	
	if (gridc[a][b] === gridc[a + 1][b + 1]) {
		counter3 += 1;
		direction3 = 1;
	}
	
	if (gridc[a][b] === gridc[a - 1][b - 1]) {
		counter3 += 1;
		direction3 = 0;
	}
	
	if (counter3 === 1) {
		if (direction3 === 1) {
			if (gridc[a][b] === gridc[a + 1][b + 1] && gridc[a][b] === gridc[a + 2][b + 2] && gridc[a][b] === gridc[a + 3][b + 3]) {
				if (gridc[a][b] === 1) {
					return 1;
                     
				} else if (gridc[a][b] === 0) {
					return 2;
				}
				
			}
		}

		if (direction3 === 0) {
			if (gridc[a][b] === gridc[a - 1][b - 1] && gridc[a][b] === gridc[a - 2][b - 2] && gridc[a][b] === gridc[a - 3][b - 3]) {
				if (gridc[a][b] === 1) {
                     
					return 1;
				} else if (gridc[a][b] === 0) {
                   return 2;
				}
				

			}
		}

	} else if (counter3 === 2) {
		if (gridc[a][b] === gridc[a + 2][b + 2]) {
            
		      if (gridc[a][b] === 1) {
                    
                     
					return 1;
				
            
            } else if (gridc[a][b] === 0) {
                    return 2;
				    
                    
            }
        
        }
        
        
        if(gridc[a][b] === gridc[a - 2][b - 2]){
        
            if (gridc[a][b] === 1) {
                    
                     
					return 1;
				
            
            } else if (gridc[a][b] === 0) {
                    return 2;
				    
                    
            }
        
        }
	}
	
	//Backward slash diagonal checking ends

    return 3;

}