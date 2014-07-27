/* Made by Nambiar - Game Dolphin 

Feel free to use and learn from */

Block = function(game,x,y,type,color,scale){

	this.centerX = x;

	this.centerY = y;

	this.blocktype = type;	

	this.blockcolor = color;

	this.game = game;

	this.squares = new Array();

	this.scale = scale;

	this.setupsquares();

};

var md = width/2;

Block.prototype = {

	setupsquares : function(){

		this.squares.length = 0;

		

		switch(this.blocktype){

			case 'o' : 	this.squares[0] = this.game.add.sprite(this.centerX-md,this.centerY-md,'blocks',this.blockcolor);

						this.squares[1] = this.game.add.sprite(this.centerX-md,this.centerY+md,'blocks',this.blockcolor);

						this.squares[2] = this.game.add.sprite(this.centerX+md,this.centerY+md,'blocks',this.blockcolor);

						this.squares[3] = this.game.add.sprite(this.centerX+md,this.centerY-md,'blocks',this.blockcolor);

						break;

			case 't' : 	this.squares[0] = this.game.add.sprite(this.centerX+md,this.centerY-md,'blocks',this.blockcolor);

						this.squares[1] = this.game.add.sprite(this.centerX+md,this.centerY+md,'blocks',this.blockcolor);

						this.squares[2] = this.game.add.sprite(this.centerX-md,this.centerY+md,'blocks',this.blockcolor);

						this.squares[3] = this.game.add.sprite(this.centerX+md*3,this.centerY+md,'blocks',this.blockcolor);

						break;

			case 'l' : 	this.squares[0] = this.game.add.sprite(this.centerX-md,this.centerY-md,'blocks',this.blockcolor);

						this.squares[1] = this.game.add.sprite(this.centerX-md,this.centerY+md,'blocks',this.blockcolor);

						this.squares[2] = this.game.add.sprite(this.centerX-md,this.centerY+md*3,'blocks',this.blockcolor);

						this.squares[3] = this.game.add.sprite(this.centerX+md,this.centerY+md*3,'blocks',this.blockcolor);

						break;

			case 'j' : 	this.squares[0] = this.game.add.sprite(this.centerX+md,this.centerY-md,'blocks',this.blockcolor);

						this.squares[1] = this.game.add.sprite(this.centerX+md,this.centerY+md,'blocks',this.blockcolor);

						this.squares[2] = this.game.add.sprite(this.centerX+md,this.centerY+md*3,'blocks',this.blockcolor);

						this.squares[3] = this.game.add.sprite(this.centerX-md,this.centerY+md*3,'blocks',this.blockcolor);

						break;

			case 'i' :  this.squares[0] = this.game.add.sprite(this.centerX+md,this.centerY-md*3,'blocks',this.blockcolor);

						this.squares[1] = this.game.add.sprite(this.centerX+md,this.centerY-md,'blocks',this.blockcolor);

						this.squares[2] = this.game.add.sprite(this.centerX+md,this.centerY+md,'blocks',this.blockcolor);

						this.squares[3] = this.game.add.sprite(this.centerX+md,this.centerY+md*3,'blocks',this.blockcolor);

						break;

			case 's' :  this.squares[0] = this.game.add.sprite(this.centerX+md*3,this.centerY-md,'blocks',this.blockcolor);

						this.squares[1] = this.game.add.sprite(this.centerX+md,this.centerY-md,'blocks',this.blockcolor);

						this.squares[2] = this.game.add.sprite(this.centerX+md,this.centerY+md,'blocks',this.blockcolor);

						this.squares[3] = this.game.add.sprite(this.centerX-md,this.centerY+md,'blocks',this.blockcolor);

						break;

			case 'z' :  this.squares[0] = this.game.add.sprite(this.centerX-md,this.centerY-md,'blocks',this.blockcolor);

						this.squares[1] = this.game.add.sprite(this.centerX+md,this.centerY-md,'blocks',this.blockcolor);

						this.squares[2] = this.game.add.sprite(this.centerX+md,this.centerY+md,'blocks',this.blockcolor);

						this.squares[3] = this.game.add.sprite(this.centerX+md*3,this.centerY+md,'blocks',this.blockcolor);

						break;

		}

		for(var i=0;i<this.squares.length;i++){

		this.squares[i].anchor.setTo(0.5,0.5);

		this.squares[i].scale.setTo(this.scale,this.scale)

		this.squares[i].collideWorldBounds = true;

		}	

	},



	move : function(dir){

		switch(dir){

			case 'left' : 	this.centerX -= width;

							for(var i=0;i<this.squares.length;i++){

								this.squares[i].x -= width;

							}

							break;

			case 'right' : 	this.centerX += width;

							for(var i=0;i<this.squares.length;i++){

								this.squares[i].x += width;

							}

							break;

			case 'down' : 	this.centerY += height;

							for(var i=0;i<this.squares.length;i++){

								this.squares[i].y += height;

							}

							break;

		}



	},



	rotate : function(){

		var x1,x2,y1,y2;

		for (var i=0; i<this.squares.length; i++){



        // Get the center of the current square

        	x1 = this.squares[i].x;

        	y1 = this.squares[i].y;



        // Move the square so it's positioned at the origin 

        	x1 -= this.centerX;

        	y1 -= this.centerY;

        // Do the actual rotation

        	x2 = - y1;

        	y2 = x1;



        // Move the square back to its proper location 

        	x2 += this.centerX;

        	y2 += this.centerY;



        // Set the square's location to our temporary variables 

        	this.squares[i].x = x2;

        	this.squares[i].y = y2;

    	}

	},



	getrotated : function(){

		var temp_array = new Array();

    	var x1, y1, x2, y2;



    	for (var i=0; i<this.squares.length; i++){    

        	x1 = this.squares[i].x;

        	y1 = this.squares[i].y;

        	x1 -= this.centerX;

        	y1 -= this.centerY;



        	x2 = - y1;

        	y2 = x1;



       		x2 += this.centerX;

        	y2 += this.centerY;



        // Instead of setting the squares, we just store the values

        temp_array[i*2]   = x2;

        temp_array[i*2+1] = y2;

    	}



    	return temp_array;

	},



	wallcollide : function(oldsquares,dir){

		len = oldsquares.length;

		if(len==0){

			switch(dir){

				case 'left' : for(var i=0;i<4;i++){

					if(this.squares[i].x-2*md<this.game.world.bounds.x) return true;

				}

				break;



				case 'right' : for(var i=0;i<4;i++){

					if(this.squares[i].x+2*md>this.game.world.bounds.width) return true;

				}

				break;

				case 'down' : for(var i=0;i<4;i++){

					if(this.squares[i].y+2*md>this.game.world.height) return true;

				}

				break;

				default : return false;



			}

		}else{

		switch(dir){

			case 'left'  : 	for(var i=0;i<4;i++){

				for(var j=0;j<len;j++){

					if(this.squares[i].x-md<this.game.world.bounds.x||(this.squares[i].x>oldsquares[j].x&&this.squares[i].x-3*md<oldsquares[j].x&&this.squares[i].y==oldsquares[j].y)) return true;

				}

			}

			break;



			case 'right' : 	for(var i=0;i<4;i++){

				for(var j=0;j<len;j++){

					if(this.squares[i].x+md>this.game.world.bounds.width||(this.squares[i].x<oldsquares[j].x&&this.squares[i].x+3*md>oldsquares[j].x&&this.squares[i].y==oldsquares[j].y)) return true;

				}

			}

			break;



			case 'down'  : 	for(var i=0;i<4;i++){

				for(var j=0;j<len;j++){

					if(this.squares[i].y+2*md>this.game.world.bounds.height||(this.squares[i].y+3*md>oldsquares[j].y&&this.squares[i].x==oldsquares[j].x)) return true;

				}

			}

			break;



			default 	 :  return false; 

		}

	}

	},



	rotatecollide : function(oldsquares){

		var arr = this.getrotated();

		var len = oldsquares.length;

		for(var i=0;i<4;i++){

			if ( (arr[i*2] < this.game.world.bounds.x) ||  (arr[i*2] > this.game.world.bounds.width) ) return true;

			if(arr[i*2+1]>this.game.world.bounds.height) return true;

			for(var j=0;j<len;j++){

				if ( ( Math.abs(arr[i*2] - oldsquares[j].x) < width ) && ( Math.abs(arr[i*2+1] - oldsquares[j].y) < height ) ){

					return true;

            	}

			}

		}

		return false;

	}



};