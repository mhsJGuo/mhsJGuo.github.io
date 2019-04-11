
function setup() {
  // put setup code here
  //Creates a canvas
  createCanvas(800, 600);
  background(127.5);
}

function draw() {
  //put drawing code here

}

//Code used when the mouse is released
function mouseReleased() {
  //Clears the canvas
  background(127.5);
  //Colour and shapes for the target
  fill(0);
  ellipse(mouseX, mouseY, 100, 100);
  fill(255);
  ellipse(mouseX, mouseY, 50, 50);
  fill(0);
  ellipse(mouseX, mouseY, 25, 25);
  fill(255);
  ellipse(mouseX, mouseY, 12.5,12.5);
}

//Code used when the mouse is pressed
function mousePressed() {
  //Clears the canvas
  background(127.5);
  //Colour and shapes for the target
  fill(0);
  ellipse(mouseX, mouseY, 200, 200);
  fill(255);
  ellipse(mouseX, mouseY, 100, 100);
  fill(0);
  ellipse(mouseX, mouseY, 50, 50);
  fill(255);
  ellipse(mouseX, mouseY, 25, 25);
  fill(0);
  ellipse(mouseX, mouseY, 12.5,12.5);
}
