function eraserTool() {
    this.name = "eraserTool";
    this.icon = "assets/eraser.jpg";

    //let erasing = false;
	let weight = 40;

    let previousMouseX = -1;
    let previousMouseY = -1;
	
	this.draw = function(){
		//if the mouse is pressed
		if(mouseIsPressed){
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (previousMouseX === -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
				loadPixels();
			}
			//if we already have values for previousX and Y we can draw a line from 
			//there to the current mouse location
			else{
				erase();
				strokeWeight(weight);
				line(previousMouseX, previousMouseY, mouseX, mouseY);
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
		}
		//if the user has released the mouse we want to set the previousMouse values 
		//back to -1.
		else{
			//erasing = false;
			previousMouseX = -1;
			previousMouseY = -1;
		}
	};


	this.unselectTool = function() {
		updatePixels();
		noErase();
		strokeWeight(1);
		//select(".options").html("");
	};
}
