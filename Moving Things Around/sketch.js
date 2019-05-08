let x = 200;
let y = 200;

let xSpeed = 5;
let ySpeed = 5;

let size = 50;

let hit = false;

function setup() {
  createCanvas(800, 600);
  
  background(127.5);
}//End setup

function draw() {
  background(127.5);
  
  drawEllipsePink();
  drawRectBlue();

  hit = collideRectCircle(width/2,height/2,size*3,size*3,x,y,size,size);

  print(hit);

  //What happens if the objects hit
  if (hit === true) {
    ySpeed=ySpeed*(-.5);
    xSpeed=xSpeed*(-.5);

  }//End if
}//End draw

//Code for the ellipse
function drawEllipsePink() {
  fill(255,0,255);
  ellipse(x,y,size,size);
  
  //Code to set the speed
  x=x+xSpeed;
  y=y+ySpeed;
  
  //To make the ellipse bounce off the edges
  if (y>=height-size/2 || y<=0+size/2) {
    ySpeed= ySpeed*(-2);
    
  }//End if
  
  if (x>=width-size/2 || x<=0+size/2) {
    xSpeed= xSpeed*(-2);
    
  }//End if

}//End function drawEllipsePink

//Code for the rectangle
function drawRectBlue() {
  fill(0,0,255);
  rect(width/2,height/2,size*3,size*3);

}//End function drawRectBlue
