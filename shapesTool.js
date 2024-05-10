function shapeTool(colourP) {
    this.name = "shapeTool";
    this.icon = "assets/shapes-shapes.jpg";

	this.shapeTitle = ["rectangle", "circle", "triangle", "rightAngledTriangle"];
	this.shapeIcon = ["assets/square.jpg", "assets/circle.jpg", "assets/triangle.jpg", "assets/rightAngledTriangle.jpg"];

	this.selectedShape = null;
	this.fillMode = true;

	// variables to store position of the mouse
	let startMouseX = -1;
	let startMouseY = -1;

	// boolean to show drawing state
	let drawing = false;

	let self = this;

	// default colour
	fill(colourP.selectedColour);

	// draw shape icons
	this.populateOptions = function() {

		// Create fill mode dropdown
        let fillModeDropdown = createSelect();
        fillModeDropdown.option("Fill");
        fillModeDropdown.option("No Fill");
        fillModeDropdown.changed(() => {
            self.fillMode = fillModeDropdown.value() === "Fill";
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
        });
        fillModeDropdown.parent("bottombar");

		
		for (let i = 0; i < this.shapeTitle.length; i++) {
			// sizing and margin of images
			let imageSize = "width: 100px; height: 100px;";
			let margin = "margin: 10px;";
	
			// Creating the div for each shape option
			let shapeItem = createDiv(`<img src='${this.shapeIcon[i]}' style='${imageSize}${margin}'>`);
			shapeItem.class(`shapeItem ${this.shapeTitle[i]}`);
			shapeItem.parent("bottombar");
	
			// Directly referencing the index for the click event
			shapeItem.mouseClicked(() => {
				for (let j = 0; j < self.shapeTitle.length; j++) {
					let currentShape = select(`.${self.shapeTitle[j]}`);
	
					if (j === i) {
						self.selectedShape = self.shapeTitle[i];
						currentShape.style("border", "2px solid blue");
					} else {
						currentShape.style("border", "none");
					}
				}
			});
		}
	};
	

	this.draw = function() {

		if(mouseIsPressed){
			if(startMouseX == -1){

				if (!inCanvasChecker()){
					return
				}
				
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				// loads the current colour value (RGBA) of each pixel on the canvas into the pixels array
				loadPixels();
			}

			else{
				// updates the canvas with the new RGBA values in the pixels array.
				updatePixels();

				if (this.fillMode){
					fill(colourP.selectedColour);
				} else {
					noFill();
				}

				if (this.selectedShape == "rectangle"){
					rect(startMouseX, startMouseY, mouseX-startMouseX, mouseY-startMouseY);
				}
				
				if (this.selectedShape == "circle"){
					ellipse(startMouseX, startMouseY, (mouseX-startMouseX)*2, (mouseX-startMouseX)*2);
				}
				
				if (this.selectedShape == "triangle"){
					triangle(startMouseX, startMouseY, (startMouseX+mouseX)/2, mouseY, mouseX, startMouseY);
				}

				if (this.selectedShape == "rightAngledTriangle"){
					triangle(startMouseX, startMouseY, mouseX, startMouseY, startMouseX, mouseY);
				}
			}

		}

		// when mouse is let go, stops drawing the shape and sets x and y back to -1
		else if(drawing) {
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


	this.unselectTool = function() {
		this.selectedShape = null;
		//clear options
		select(".options").html("");
		
	};

}



