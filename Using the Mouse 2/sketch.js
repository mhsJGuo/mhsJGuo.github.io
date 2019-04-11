
function setup() {
  // put setup code here
  createCanvas(800, 600);
  background(255);

}

function draw() {
  //put drawing code here
  strokeWeight(10)
  //What happens when the mouse is pressed
  if (mouseIsPressed === true) {
    //What happens when the left mouse button is pressed
    if (mouseButton === LEFT) {
      strokeWeight(10)
      stroke(0);
      line(mouseX, mouseY, pmouseX , pmouseY);
    }

    //What happens when the right mouse button is pressed
    else if (mouseButton === RIGHT) {
      strokeWeight(100);
      stroke(255);
      line(mouseX, mouseY, pmouseX, pmouseY);
    //What happens if nothing is pressed
    }
  }

}
