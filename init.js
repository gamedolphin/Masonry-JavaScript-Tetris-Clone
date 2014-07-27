/* Made by Nambiar - Game Dolphin 

Feel free to use and learn from */

var w = 400, h = 600;

var gamevar = new Phaser.Game(w,h,Phaser.AUTO,'container');

gamevar.state.add('Load',Game.Load);

gamevar.state.add('MainMenu',Game.MainMenu);

gamevar.state.add('Game',Game.PlayGame);

gamevar.state.add('Lose',Game.LoseScreen);

gamevar.state.add('Win',Game.WinScreen);

gamevar.state.start('Load');