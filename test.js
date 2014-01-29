var Game = require('./index').Game;

var game = new Game();

game.on('draw', function(c){
	c.fillStyle = '#f4d3e2';
	c.fillRect(30, 30, 30, 30);
})