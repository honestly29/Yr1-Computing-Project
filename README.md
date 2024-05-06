# Yr1-Computing-Project

Drawing app

Logs:

03/03/24 - Researched image recognition in js using https://www.youtube.com/@TheCodingTrain.

04/03/24 - Downloaded MNIST data and used a Python script to convert it from binary to JSON so that I can use it in my JS code.

12/03/24 - Tried to get imageClassifier for MNIST working in p5.js/ml5.js. However, running into a bug where the model is interpreting my input of 60,000 arrays of length 784 as one input of length 47,040,000:

(in promise) Error: Based on the provided shape, [60000], the tensor should have 60000 values but has 47040000

17/03/24 - Downloaded tf.js.

18/03/24 - Started shapesTool for drawing different shapes.

22/03/24 - Finished basic rectangle, circle and triangle shape features.

23/03/24 - Started eraser tool

25/03/24 - Finished eraser tool

26/03/24 - Should I put fontSize inside a constructor function or make a new one?
At the moment, fontSize is a seperate slider for each tool, I should make it a global variable.

28/03/24 - Made a global font size slider

22/04/24 - Made the bottom bar 'sticky' to stop it being covered by the canavas when adjusting the screen size

30/04/24 - Started Load Image feature

02/05/24 - Load Image works however, it is not dynamic. Created blur tool. Want to add border. Struggled to add border.

03/05/24 - Added right angled triangle to shapes tool

06/05/24 - Started fill tool (DPS). Use colourP to get colours dynamically.
Added option fill and noFill option to shapes tool (bug were shape gets drawn from menu). Trying to implement Undo button (saveCanvas saves the line drawn in mirror tool)
