# Yr1-Computing-Project

Drawing app with ML image recognition

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
