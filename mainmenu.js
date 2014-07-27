/* Made by Nambiar - Game Dolphin 

Feel free to use and learn from */

Game.MainMenu = function(game){



};



Game.MainMenu.prototype = {

	create : function(){

		

		this.game.world.bounds.x = 0;

		this.game.world.bounds.y = 0;

		this.game.world.bounds.width = 400;

		this.game.world.bounds.height = 600;

		this.playbutton = this.add.button(this.game.world.centerX, this.game.world.centerY-40,'play',this.playclicked,this,1,0,2);

		this.playbutton.anchor.setTo(0.5,0.5);

		this.tweenplay = this.game.add.tween(this.playbutton).to({y:300},1000,Phaser.Easing.Sinusoidal.InOut,true,0,100,true);



		this.arrows = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY+180,'arrow');

		this.arrows.anchor.setTo(0.5,0.5);

		this.arrows.scale.setTo(0.6,0.6);



		this.titleimage = this.add.sprite(this.game.world.centerX,0,'title');

		this.titleimage.anchor.setTo(0.5,0);

	},



	playclicked : function() {

		score = 0;

		this.game.state.start('Game');

	},



};





Game.LoseScreen = function(game){



};



Game.LoseScreen.prototype = {

	create : function(){

		this.game.world.bounds.x = 0;

		this.game.world.bounds.y = 0;

		this.game.world.bounds.width = 400;

		this.game.world.bounds.height = 600;

		this.lose = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'lose');

		this.lose.anchor.setTo(0.5,0.5);

		this.playbutton = this.add.button(this.game.world.centerX, 40, 'play',this.playclicked,this,1,0,2);

		this.playbutton.anchor.setTo(0.5,0.5);

		this.tweenplay = this.game.add.tween(this.playbutton).to({y:50},1000,Phaser.Easing.Sinusoidal.InOut,true,0,100,true);

		this.scoretextmain = this.add.text(this.game.world.centerX,450,score,{ font: "40px Arial", fill: "#fff", align: "center" })

		this.scoretextmain.anchor.setTo(0.5,0.5);

		

	},

	playclicked : function() {

		score = 0;

		this.game.state.start('Game');

	},



};



Game.WinScreen = function(game){



};



Game.WinScreen.prototype = {

	create : function(){

		this.game.world.bounds.x = 0;

		this.game.world.bounds.y = 0;

		this.game.world.bounds.width = 400;

		this.game.world.bounds.height = 600;



		this.winimage = this.game.add.sprite(0,0,'win');

		this.playbutton = this.add.button(this.game.world.centerX, 500, 'play',this.playclicked,this,1,0,2);

		this.playbutton.anchor.setTo(0.5,0.5);

		this.tweenplay = this.game.add.tween(this.playbutton).to({y:550},1000,Phaser.Easing.Sinusoidal.InOut,true,0,100,true);

		

	},

	playclicked : function() {

		score = 0;

		this.game.state.start('Game');

	},

};