function floodFillTool(colourP) {
    this.name = "floodFillTool";
    this.icon = "assets/bucket.jpg";

    let currentColour;

      // directions the flood fill algorithm can go in
      let directions = [
        [-1, 0], // left
        [1, 0], // right
        [0, -1], // up
        [0, 1] // down
    ];

    this.draw = function() {

        // gets the current colour in [r, g, b, a] format
        currentColour = color(colourP.selectedColour).levels;

        if (mouseIsPressed) {
            loadPixels();

            // get the colour of the pixel the mouse is currently over
            let targetColor = get(mouseX, mouseY);

            this.floodFill(mouseX, mouseY, targetColor);

            updatePixels();
        }

    }

    // depth first search flood fill algorithm
    
    this.floodFill = function(x, y, colour) {

        // stack to keep track of pixels to check
        let stack = [{x:Math.round(x), y:Math.round(y), colour}];
        
        // set the colour of the pixel at x, y to the current colour
        set(Math.round(x), Math.round(y), currentColour);

        // creates array with length equal to the width of the canvas,
        // for each element creates an array with length equal to the height of the canvas and fills it with false
        let checked = Array(width).fill().map(() => Array(height).fill(false));
        // function() {
        //     return Array(height).fill(false); }

        // while there are still pixels to check
        while (stack.length > 0){

            // get the current pixel
            let current = stack.pop();  

            // if the pixel is out of bounds or has already been checked, skip it
            if (current.x < 0 || current.x >= width || current.y < 0 || current.y >= height) {
                continue;
            }
            if (checked[current.x][current.y]) {
                continue;
            }
            checked[current.x][current.y] = true;

            // for each direction the algorithm can go in
            for (let i = 0; i<directions.length; i++) {

                // create object representing the neighbouring pixel
                let neighbour = {
                    x: Math.round(current.x + directions[i][0]),
                    y: Math.round(current.y + directions[i][1]),
                    colour
                };

                // if the pixel is valid and hasn't been checked
                if (this.isValidPixel(neighbour.x, neighbour.y, neighbour.colour) && !checked[neighbour.x][neighbour.y]) {
                    
                    // colour it with the current fill color
                    set(neighbour.x, neighbour.y, currentColour);

                    // add it to the stack to check its neighbours
                    stack.push(neighbour);
                }
            }
        }
    }

    // checks if a pixel is within the bounds of the canvas and is the target colour
    this.isValidPixel = function(x, y, colour) {
        return (x >= 0 && x < width && y >= 0 && y < height && this.colorsMatch(get(x, y), colour));
    }

    // checks if two colours are the same
    this.colorsMatch = function(c1, c2) {
        return (c1[0] === c2[0] && c1[1] === c2[1] && c1[2] === c2[2] && c1[3] === c2[3]);
    }
}

