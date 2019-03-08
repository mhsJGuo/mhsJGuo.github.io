function setup() {
  // put setup code here
createCanvas(400,400);
// background Colour
background(0,0,255)
}

function draw() {
  // put drawing code here

  //Ground Colour
fill(0,255,0)
  //Ground
rect(0,300,400,100);

  //Snowman Colour
fill(255,255,255);
  //Bottom Circle
ellipse(200, 300, 150, 150);
  //Middle circle
ellipse(200, 200, 100, 100);
  //Top Circle
ellipse(200, 120, 75, 75);

  //Left Arm
line(160,200,100,100);
  //Right Arm
line(240,200,300,100);

  //Sun Colour
fill(255,255,0);
  //Sun
ellipse(50,50,50,50);
}
