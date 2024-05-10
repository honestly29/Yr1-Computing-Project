// Global variables that will store the toolbox colour palette
// and the helper functions.
var toolbox = null;
var colourP = null;
var helpers = null;
let strokeSlider;

function setup() {
    // Create a canvas that fills the content div
    canvasContainer = select('#content');
    const c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
    pixelDensity(1);
    c.parent("content");

    outlineBuffer = createGraphics(width, height); // Create a separate buffer for the outline

    // Initialize helpers and toolbox
    helpers = new HelperFunctions(); // Initialize helper functions
    colourP = new ColourPalette(); // Initialize color palette
    toolbox = new Toolbox(); // Create toolbox for storing tools

    // Add tools to the toolbox
    toolbox.addTool(new FreehandTool());
    toolbox.addTool(new LineToTool());
    toolbox.addTool(new sprayCanTool());
    toolbox.addTool(new mirrorDrawTool());
    toolbox.addTool(new shapeTool(colourP));
    toolbox.addTool(new eraserTool());
    toolbox.addTool(new blurTool());
    toolbox.addTool(new floodFillTool(colourP));
    toolbox.addTool(new spirographTool());

    background(255); // Clear canvas to white
}

function draw() {
    // Call the draw function from the selected tool if it exists
    if (toolbox.selectedTool.hasOwnProperty("draw")) {
        toolbox.selectedTool.draw();
    } else {
        alert("It doesn't look like your tool has a draw method!");
    }

    let slider = document.getElementById("fontSlider");
    strokeWeight(slider.value);

    slider.oninput = function() {
        strokeWeight(this.value);
    }

    
}

function mouseReleased() {
    if (toolbox.selectedTool.hasOwnProperty("first")) {
        toolbox.selectedTool.first = true;
    }
}