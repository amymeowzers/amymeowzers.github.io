//create a variable to store the slider in
let slider;

function setup() {
  //create a variable for canvas so that we can reference it for positioning later
  let canvas = createCanvas(windowWidth, windowHeight);
  //you can specify the position of your element like this. it's best to do most positioning in CSS, but here I'm setting it to the top
  canvas.position(0, 0);
  //you can add a CSS class to something by putting .class after it
  canvas.class("container");

  colorMode(HSB, 255);

  //set the variable to the createSlider function. createSlider values are: minimum, maximum, starting value.
  slider = createSlider(10, 1000, 0);
  slider.class("slider");

  colorslider = createSlider(0, 255, 0);
  colorslider.class("colorslider");

  weightslider = createSlider(1, 50, 3);
  weightslider.class("weightslider");

  noFill();
  strokeWeight(10);
  circleX = width / 2;
  circleY = height / 2;
  circleSize = 0;
}
function draw() {
  background(0, 30, 255);

  circleSize += 10;

  strokeWeight(weightslider.value() );
  stroke(colorslider.value(), 255, 255);
  circle(circleX, circleY, slider.value());
  circle(circleX, circleY, slider.value() * .75);
  circle(circleX, circleY, slider.value() * .5);
}
