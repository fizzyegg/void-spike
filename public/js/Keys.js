/**************************************************
** GAME KEYBOARD CLASS
**************************************************/
var Keys = function(switchColour) {
	var switchColour = switchColour || false;
		
	var onKeyDown = function(e) {
		var that = this,
			c = e.keyCode;
		switch (c) {
			// Controls
			case 32: // switchColour
				that.switchColour = true;
				break;
		};
	};
	
	var onKeyUp = function(e) {
		var that = this,
			c = e.keyCode;
		switch (c) {
			case 32: // switchColour
				that.switchColour = false;
				break;
		};
	};

	return {
		switchColour: switchColour,
		onKeyDown: onKeyDown,
		onKeyUp: onKeyUp
	};
};