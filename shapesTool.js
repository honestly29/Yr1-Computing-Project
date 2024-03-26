function shapeTool() {
    this.name = "shapeTool";
    this.icon = "assets/shapesTool.jpg";

	this.shapeTitle = ["rectangle", "circle", "triangle"];
	this.shapeIcon = ["assets/square.jpg", "assets/circle.jpg", "assets/triangle.jpg"];

	this.selectedShape = null;

	let self = this;

	// draw shape icons
	this.populateOptions = function() {	
		for (let i = 0; i < this.shapeTitle.length; i++){
			// Sizing and margin of images
			let imageSize = "width: 100px; height: 100px;"; 
			let margin = "margin: 5px;"; 
			
			let shapeItem = createDiv("<img src='" + this.shapeIcon[i] + "' " + "style='" + imageSize + margin + "'" + "></div>");
			shapeItem.class("shapeItem " + this.shapeTitle[i]);
			shapeItem.parent("bottombar");
		
			//Research IIFE
			shapeItem.mouseClicked((function(shapeIndex) {
				return function () {
					for (let j = 0; j < self.shapeTitle.length; j++){
						let currentShape = select('.' + self.shapeTitle[j])

						if (j === shapeIndex) {
							self.selectedShape = self.shapeTitle[shapeIndex];
							currentShape.style("border", "2px solid blue");
						} else {
							currentShape.style("border", "none");
						}
					}
				};
			})(i))
		}
	};


	this.unselectTool = function() {
		updatePixels();
		//clear options
		select(".options").html("");
	};

	
   // variables to store position of the mouse
	let startMouseX = -1;
	let startMouseY = -1;

	// boolean to show drawing state
	let drawing = false;

	this.draw = function() {

		if(mouseIsPressed){
            //console.log(startMouseX, startMouseY);
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
				if (this.selectedShape == "rectangle"){
					rect(startMouseX, startMouseY, mouseX-startMouseX, mouseY-startMouseY);
				}
				
				if (this.selectedShape == "circle"){
					ellipse(startMouseX, startMouseY, (mouseX-startMouseX)*2, (mouseX-startMouseX)*2);
				}
				
				if (this.selectedShape == "triangle"){
					triangle(startMouseX, startMouseY, (startMouseX+mouseX)/2, mouseY, mouseX, startMouseY);
				}
				
			}

		}

		// when mouse is let go, stops drawing the line and sets x and y back to -1
		else if(drawing) {
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};
}



