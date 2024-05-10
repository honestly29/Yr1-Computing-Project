function spirographTool() {
    this.name = "spirographTool";
    this.icon = "assets/spirograph.jpg";

    angleMode(DEGREES);

    // center position 
    this.center = createVector(0, 0);
    // current position
    this.pos = createVector(0, 0);
    // last position
    this.last = createVector(0, 0);

    // flag to check if this is the first point after mouse press
    this.first = true;

    // angles for the two orbiting points
    this.angle0 = 0;
    this.angle1 = 0;

    this.populateOptions = function() {
        let sliderContainer = createDiv();
        sliderContainer.parent("bottombar");
        sliderContainer.id("sliderContainer"); 
    
        // First group for radius0 and velocity0
        let groupDiv1 = createDiv();
        groupDiv1.parent("sliderContainer");
        groupDiv1.addClass("sliderGroup");
    
        this.radius0Title = createP('Radius 0');
        this.radius0Title.parent(groupDiv1);
        this.radius0Slider = createSlider(20, 100, random(20, 100));
        this.radius0Slider.parent(groupDiv1);
        this.radius0Slider.addClass("spirographSlider");
    
        this.velo0Title = createP('Velocity 0');
        this.velo0Title.parent(groupDiv1);
        this.velo0Slider = createSlider(0.1, 50, random(0.1, 50));
        this.velo0Slider.parent(groupDiv1);
        this.velo0Slider.addClass("spirographSlider");
    
        // Second group for radius1 and velocity1
        let groupDiv2 = createDiv();
        groupDiv2.parent("sliderContainer");
        groupDiv2.addClass("sliderGroup");
    
        this.radius1Title = createP('Radius 1');
        this.radius1Title.parent(groupDiv2);
        this.radius1Slider = createSlider(20, 100, random(20, 100));
        this.radius1Slider.parent(groupDiv2);
        this.radius1Slider.addClass("spirographSlider");
    
        this.velo1Title = createP('Velocity 1');
        this.velo1Title.parent(groupDiv2);
        this.velo1Slider = createSlider(0.1, 50, random(0.1, 50));
        this.velo1Slider.parent(groupDiv2);
        this.velo1Slider.addClass("spirographSlider");
    }


    this.draw = function() {

        if (mouseIsPressed) {

            if (!inCanvasChecker()){
                return
            }

            // set center to mouse position
            this.center = createVector(mouseX, mouseY);
            
            this.calculatePosition();

            // if this is not the first draw call, draw a line from the last position to the current position
            if (this.first == false) {
                line(this.pos.x, this.pos.y, this.last.x, this.last.y);
            }
            else {
                // set the first flag to false after the first draw call
                this.first = false;
            }

            // set the last position to the current position
            this.last = this.pos;
        }
        
    };

    this.calculatePosition = function() {

        // set the position to the center
        this.pos = this.center.copy();

        // move position by the radius and angle for the first point
        this.pos.add(this.radius0Slider.value() * cos(this.angle0), this.radius0Slider.value() * sin(this.angle0));
        // and the displacement for the second point
        this.pos.add(this.radius1Slider.value() * cos(this.angle1), this.radius1Slider.value() * sin(this.angle1));

        // update the angles
        this.angle0 += this.velo0Slider.value();
        this.angle1 += this.velo1Slider.value();
    }

    this.unselectTool = function() {
        select(".options").html("");
        // reset the first draw flag
        this.first = true;
        
    };
}


