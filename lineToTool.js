// While mouse is held down, draw a line between where mouse is pressed and where mouse is let go

function LineToTool(){
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	// variables to store position of the mouse
	var startMouseX = -1;
	var startMouseY = -1;

	this.initialiseStrokeSlider = function() {
		this.strokeSize = new strokeSize();
	}
	
	this.unselectTool = function() {
		updatePixels();
		//clear options
		select(".options").html("");
	};
	
	// boolean to show drawing state
	var drawing = false;

	this.draw = function(){

		if(mouseIsPressed){
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				// loads the current colour value (RGBA) of each pixel on the canvas into the pixels array
				loadPixels();
			}

			else{
				// updates the canvas with the new RGBA values in the pixels array.
				updatePixels();
				strokeWeight(this.strokeSize.slider.value());
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

		// when mouse is let go, stops drawing the line and sets x and y back to -1
		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
