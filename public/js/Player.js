/**************************************************
** GAME PLAYER CLASS
**************************************************/
var Player = function(startX, startY) {
	var x = startX,
		y = startY,
		moveAmount = 2;

	var update = function(keys) {
		// Up key takes priority over down
		if (keys.up) {
			y -= moveAmount;
		} else if (keys.down) {
			y += moveAmount;
		};

		// Left key takes priority over right
		if (keys.left) {
			x -= moveAmount;
		} else if (keys.right) {
			x += moveAmount;
		};
	};

	var draw = function(ctx) {
	    ctx.fillStyle="#33cc59";
		ctx.fillRect(x-5, y-5, 20, 20);
	};

	return {
		update: update,
		draw: draw
	}
};