/* Made by Nambiar - Game Dolphin 

Feel free to use and learn from */

Game.PlayGame = function(game){

	this.currentlevel;

};



var oldsquares = new Array();

var squaresinrow = new Array();

var change_rot_time = 0;

var force_down = 0;

var slide_time = 0;



var KEYLEFT;

var KEYRIGHT;

var KEYUP;

var KEYDOWN;



Game.PlayGame.prototype = {

	create : function(){

		this.bck = this.game.add.sprite(0,0,'bck');

		this.game.world.bounds.x = 21;

		this.game.world.bounds.y = 0;

		this.game.world.bounds.width = 280;

		this.game.world.bounds.height = 590;



		this.logo = this.game.add.sprite(295,30,'logo');



		this.focusblock = new Block(this.game,this.game.world.centerX,-40,this.chooseblock(),this.choosecolor(),1);

		this.nextblocktype = this.chooseblock();

		this.nextblockcolor = this.choosecolor();

		this.nextblock = new Block(this.game, 330, 271,this.nextblocktype,this.nextblockcolor,0.7);



		KEYRIGHT = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

		KEYLEFT = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);

		KEYUP = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);

		KEYDOWN = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);

		

		this.scoretext = this.add.text(344,355,"SCORE",{ font: "15px Arial", fill: "#ff0044", align: "center" });

		this.scoretext.anchor.setTo(0.5,0.5);

		this.scoretextmain = this.add.text(344,370," "+score+" ",{ font: "15px Arial", fill: "#fff", align: "center" })

		

		this.resetbutton = this.add.sprite(320,520,'reset');

		this.pausebutton = this.add.sprite(320,460,'pause');

		this.pausebutton.inputEnabled = true;

		this.resetbutton.inputEnabled = true;

		this.pausebutton.events.onInputDown.add(this.pausebuttondown,this.pausebutton);

		this.resetbutton.events.onInputDown.add(this.resetbuttondown,this.resetbutton);



		oldsquares.length = 0;

		squaresinrow.length = 0;

		score = 0;

		

	},

	pausebuttondown : function(){

		if(this.game.paused==false)

		{

			this.game.paused = true;

		} 

		else

		{ this.game.paused = false;

		}

	},



	resetbuttondown : function(){

		this.game.state.start('MainMenu');

	},





	chooseblock : function(){

		var x = Math.floor(Math.random()*7);

		switch(x){

			case 0 : return 'o';

			case 1 : return 't';

			case 2 : return 'l';

			case 3 : return 'j';

			case 4 : return 'i';

			case 5 : return 's';

			case 6 : return 'z';

		}

	},



	choosecolor : function(){

		return Math.floor(Math.random()*5);

	},



	checkcompletedlines : function(){

		for(var i=0;i<20;i++){

			squaresinrow[i]=0;

		}

		var top = this.game.world.bounds.height - 19*height - height/2;

		var num_rows,rows;



		for(var i=0;i<oldsquares.length;i++){

			row = (oldsquares[i].y - top)/height;

			squaresinrow[row]++;

		}



		for(var i=0;i<20;i++){

			if(squaresinrow[i]==9){

				console.log(score);

				score+=100;

				for(var j=0;j<oldsquares.length;j++){

					if((oldsquares[j].y - top)/height==i){

						oldsquares[j].destroy();

						oldsquares.splice(j,1);

						j--;

					}

				}

			}

		}



		for(var i=0;i<oldsquares.length;i++){

			for(var j=0;j<20;j++){

				if(squaresinrow[j]==9){

					row = (oldsquares[i].y - top)/height;

					if(row<j){

						oldsquares[i].y += height;

					}

				}

			}

		}

	},



	update : function(){

		if(this.game.time.now>force_down)

		{

			if(this.focusblock.wallcollide(oldsquares,'down')!=true)	this.focusblock.move('down');

			else{

				for(var i=0;i<4;i++){

					oldsquares.push(this.focusblock.squares[i]);

				}

				this.focusblock = new Block(this.game,this.game.world.centerX,-40,this.nextblocktype,this.nextblockcolor,1);

				this.nextblocktype = this.chooseblock();

				this.nextblockcolor = this.choosecolor();

				for(var i=0;i<4;i++){

					this.nextblock.squares[i].destroy();

				}

				this.nextblock = new Block(this.game, 330, 271,this.nextblocktype,this.nextblockcolor,0.7);

				if(this.focusblock.wallcollide(oldsquares,'down')==true) { this.game.state.start('Lose');}

			}

			this.checkcompletedlines();

			this.scoretextmain.setText(score);

			if(score>1900){ this.game.state.start('Win');

			}

			force_down = this.game.time.now + force_down_max_time;

		}

		if(KEYRIGHT.isDown){

			if(this.game.time.now>change_rot_time){

			if(this.focusblock.wallcollide(oldsquares,'right')!=true)	this.focusblock.move('right');

			change_rot_time = this.game.time.now + 100;

			}

		}

		if(KEYLEFT.isDown){

			if(this.game.time.now>change_rot_time){

			if(this.focusblock.wallcollide(oldsquares,'left')!=true)	this.focusblock.move('left');

			change_rot_time = this.game.time.now + 100;

			}

		}

		if(KEYUP.isDown){

			if(this.game.time.now>change_rot_time){

				if(this.focusblock.rotatecollide(oldsquares)!=true)		this.focusblock.rotate(); 

				change_rot_time = this.game.time.now + 100;

			}

		}

		if(KEYDOWN.isDown){

			force_down_max_time = 50;

		}

		else {

			force_down_max_time = 500;

		}



	}

};

