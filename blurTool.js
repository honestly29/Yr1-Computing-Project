function blurTool() {
    this.name = "blurTool";
    this.icon = "assets/blur.jpg";

	let blurRadius = 50; // Radius for the blur effect
    let dragging = false;

	this.draw = function() {
        if (mouseIsPressed) {
          dragging = true;
        } else {
          dragging = false;
        }
   
        if (dragging) {
            this.applyBlur(floor(mouseX), floor(mouseY), blurRadius);
        }
      };
   
      
    this.applyBlur = function(x, y, radius) {
        loadPixels(); // Load current pixel data
        
        // Blur pixels within the radius around (x, y)
        for (let i = x - radius; i <= x + radius; i++) {
          for (let j = y - radius; j <= y + radius; j++) {
            if (i >= 0 && j >= 0 && i < width && j < height) {
              // Get the average color of surrounding pixels
              let count = 0;
              let sumR = 0, sumG = 0, sumB = 0;
      
              for (let dx = -1; dx <= 1; dx++) {
                for (let dy = -1; dy <= 1; dy++) {
                  let idx = ((j + dy) * width + (i + dx)) * 4;
                  if (idx >= 0 && idx < pixels.length) {
                    sumR += pixels[idx];
                    sumG += pixels[idx + 1];
                    sumB += pixels[idx + 2];
                    count++;
                  }
                }
              }
      
              // Set the pixel to the average color
              let idx = (j * width + i) * 4;
              pixels[idx] = sumR / count;
              pixels[idx + 1] = sumG / count;
              pixels[idx + 2] = sumB / count;
            }
          }
        }

        updatePixels(); // Apply the modified pixels
      }

	this.unselectTool = function() {
		updatePixels();
		strokeWeight(1);
		//select(".options").html("");
	};
}

