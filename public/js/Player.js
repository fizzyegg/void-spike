/**************************************************
** GAME PLAYER CLASS
**************************************************/
var Player = function(startX, startY) {
	var x = startX,
		y = startY,
		pHeight = 100,
		pWidth = 100,
		moveAmount = 4;
		hexColour = "#4d4dff";
        
	var update = function(keys) {
	    
		// switchColour key takes priority over esc key
		if (keys.switchColour) {
		    switch (hexColour) {
			    case "#4d4dff":
				    hexColour = "#66ff66";
					break;
				case "#66ff66":
 				    hexColour = "#4d4dff";
					break;
			}; // toggle colour code
		    keys.switchColour = false;2
		} else if (keys.esc) {
	      //quit game code
		};

	};

	var draw = function(ctx) {
	    ctx.fillStyle=hexColour;
		ctx.fillRect(x-(pWidth), y-(pHeight), pWidth, pHeight);
	};

	return {
		update: update,
		draw: draw
	}
};