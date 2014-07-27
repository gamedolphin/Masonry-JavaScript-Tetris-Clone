/* Made by Nambiar - Game Dolphin 

Feel free to use and learn from */

Game = {};

var w = 400;
var h = 600;
var score = 0;
var width = 30;
var height = 30;
var force_down_max_time = 500;

Game.Load = function(game){

};

Game.Load.prototype = {
	preload : function(){
		this.stage.backgroundColor = "#000";
		this.preloadtext = this.add.text(this.game.world.centerX,this.game.world.centerY,"Loading..."+this.load.progress+"%",{ font: "20px Arial", fill: "#ff0044", align: "center" });
		this.preloadtext.anchor.setTo(0.5,0.5);

		this.load.spritesheet('play','assets/play.png',100,80);
		this.load.image('pause','assets/Pause.png');
		this.load.image('reset','assets/refresh.png');
		this.load.image('lose','assets/lose.png');
		this.load.image('arrow','assets/arrow.png');
		this.load.image('title','assets/Title.png');
		this.load.image('logo','assets/logo2.png');
		this.load.image('win','assets/win.png');
		this.load.spritesheet('blocks','assets/blocks.png',30,30);
		this.load.image('bck','assets/Bck.png');
	},

	create : function(){
        this.game.state.start('MainMenu');
	}
};