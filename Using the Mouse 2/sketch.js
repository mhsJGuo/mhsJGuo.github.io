//Code should draw a black line when you press the left mouse button(pencil) and draw a white line when you press the right mouse button(eraser)
function setup() {
  createCanvas(800, 600);
  
  background(255);
  
}//End function setup

function draw() {
  strokeWeight(10)
  
  //What happens when the mouse is pressed
  if (mouseIsPressed === true) {
    
    //What happens when the left mouse button is pressed
    if (mouseButton === LEFT) {
      strokeWeight(10)
      stroke(0);
      
      line(mouseX, mouseY, pmouseX , pmouseY);
    }//End if LEFT

    //What happens when the right mouse button is pressed
    else if (mouseButton === RIGHT) {
      strokeWeight(100);
      stroke(255);
      
      line(mouseX, mouseY, pmouseX, pmouseY);

    }//End if RIGHT
  }//End if TRUE
}//End function draw
