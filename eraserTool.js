function eraserTool() {
    this.name = "eraserTool";
    this.icon = "assets/eraser.jpg";

    let previousMouseX = -1;
    let previousMouseY = -1;
	
	this.draw = function(){

		if(mouseIsPressed){
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (previousMouseX === -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
				loadPixels();
			}
			//if we already have values for previousX and Y we can erase a line from 
			//there to the current mouse location
			else{
				erase();
				line(previousMouseX, previousMouseY, mouseX, mouseY);
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
		}
		//if the user has released the mouse we want to set the previousMouse values 
		//back to -1.
		else{
			previousMouseX = -1;
			previousMouseY = -1;
		}
		
	};


	this.unselectTool = function() {
		updatePixels();
		noErase();
		strokeWeight(1);
	};
}
