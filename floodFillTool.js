function floodFillTool(colourP){
    this.name = "floodFillTool";
    this.icon = "assets/fill-bucket.jpg";

    let currentColour;

    this.draw = function(){

        if(mouseIsPressed){

            // gets the current colour in [r, g, b, a] format
            currentColour = color(colourP.selectedColour).levels;
            
            // checks if the mouse is in the canvas
            if (!inCanvasChecker()){
                return
            }

            this.floodFill(floor(mouseX), floor(mouseY), currentColour);
        }
    }

    this.floodFill = function(x, y, fillColour){
        loadPixels();

        // get colour of starting pixel
        const targetColour = this.getColourAt(x, y);

        // if the pixel colour is already the correct colour, return
        if (this.colourEquals(targetColour, fillColour)){
            return;
        }   

        // stack to hold pixels to be filled
        const pixelStack = [[x, y]];

        // while there are pixels in the stack
        while (pixelStack.length){
            // remove the last pixel from the stack 
            const [x, y] = pixelStack.pop();

            // check if the pixel is in canvas
            if (x < 0 || x >= width || y < 0 || y >= height){
                continue;
            }

            // get the colour of the pixel
            const currentColour = this.getColourAt(x, y);

            // if its colour matches the target colour
            if (this.colourEquals(currentColour, targetColour)){

                // fill the pixel with the correct colour
                this.setPixelColour(x, y, fillColour);

                // add the pixel's neighbors to the stack to be checked
                pixelStack.push([x + 1, y]);
                pixelStack.push([x - 1, y]);
                pixelStack.push([x, y + 1]);
                pixelStack.push([x, y - 1]);
            }
        }

        updatePixels();
    }

    // get colour of pixel at x, y
    this.getColourAt = function(x, y){
        const index = (x + y * width) * 4; // get index of pixel in pixels array
        return color(
            pixels[index],     // Red
            pixels[index + 1], // Green
            pixels[index + 2], // Blue
            pixels[index + 3]  // Alpha
        );
    }

    // set colour of pixel at x, y
    this.setPixelColour = function(x, y, c){
        const index = (x + y * width) * 4; // get index of pixel in pixels array
        pixels[index] = red(c); // sets new red 
        pixels[index + 1] = green(c); // sets new green
        pixels[index + 2] = blue(c); // sets new blue
        pixels[index + 3] = alpha(c); // sets new alpha
    }

    // check if two colours are the same
    this.colourEquals = function(c1, c2){
        return red(c1) === red(c2) && green(c1) === green(c2) && blue(c1) === blue(c2) && alpha(c1) === alpha(c2);
    }

}








