
function HelperFunctions() {

	//p5.dom click click events. Notice that there is no this. at the
	//start we don't need to do that here because the event will
	//be added to the button and doesn't 'belong' to the object

	//event handler for the clear button event. Clears the screen
	select("#clearButton").mouseClicked(function() {
		// reset canvas to white
		background(255);

		//call loadPixels to update the drawing state
		//this is needed for the mirror tool
		loadPixels();
	});

	//event handler for the save image button. saves the canvsa to the
	//local file system.
	select("#saveImageButton").mouseClicked(function() {
		// save current canvas as an image
		saveCanvas();
	});


	// Event handler for loading an image
	select("#loadImageButton").mouseClicked(function() {
        document.getElementById("fileInput").click(); // Trigger the file input's click event
    });

    document.getElementById("fileInput").addEventListener("change", handleFileSelect);
}

function handleFileSelect(event) {
	const file = event.target.files[0]; // Get the selected file

	if (!file) return; // Return if no file is selected

	const reader = new FileReader();

	reader.onload = function(e) {
		const dataUrl = e.target.result; // Get the Data URL

		// Load the image from the Data URL and display it on the canvas
		loadImage(dataUrl, function(loadedImg) {
			image(loadedImg, 0, 0, width, height); // Draw the image, stretched to the canvas size
		});
	};

	reader.readAsDataURL(file); // Read the file as a Data URL
}