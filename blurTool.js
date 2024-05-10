function blurTool() {
  this.name = "blurTool";
  this.icon = "assets/blur.jpg";

  let blurRadius = 50; // radius for the blur effect
  let bluring = false; // flag to show drawing state

	this.draw = function() {

    // if mouse is pressed set bluring to true
    if (mouseIsPressed) {
      bluring = true;
    } else {
      bluring = false;
    }
    
    // if bluring is true apply blur effect
    if (bluring) {
      this.applyBlur(floor(mouseX), floor(mouseY), blurRadius);
      }
  };
   
      
  this.applyBlur = function(x, y, radius) {

    loadPixels(); 
    
    // loops through pixels within a square around the point (x, y)
    for (let i = x - radius; i <= x + radius; i++) {
      for (let j = y - radius; j <= y + radius; j++) {
        // check if the pixel is within the canvas
        if (i >= 0 && j >= 0 && i < width && j < height) {
          
          let count = 0; // count the number of pixels 
          let sumR = 0, sumG = 0, sumB = 0; // sum of the colour components
          
          // loops through pixels within a square around the point (i, j)
          for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
              // calculates the index of the pixel in the pixels array
              let idx = ((j + dy) * width + (i + dx)) * 4;
              // checks if the pixel is within the canvas
              if (idx >= 0 && idx < pixels.length) {
                sumR += pixels[idx]; // sum red 
                sumG += pixels[idx + 1]; // sum green 
                sumB += pixels[idx + 2]; // sum blue 
                count++;
              }
            }
          }
  
          // calculates the average colour and set the pixel to this new colour
          let idx = (j * width + i) * 4;
          pixels[idx] = sumR / count;
          pixels[idx + 1] = sumG / count;
          pixels[idx + 2] = sumB / count;
        }
      }
    }

    updatePixels(); 
    }

	this.unselectTool = function() {
		updatePixels();
		strokeWeight(1);
	};
}

