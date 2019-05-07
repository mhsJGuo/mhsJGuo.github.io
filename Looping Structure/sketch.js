//Variables for the Cordinates
let x = 0;
let y = 0;

//Variable for the Size
let size = 50;

//Vaiable for Speed
let xSpeed = 5;
let ySpeed= 10;

function setup() {
  createCanvas(800, 600);
  background(127.5);
}

function draw() {

  //Used to set the speed
  x = x+ xSpeed

  //To draw the ellipse
  for (let x = 0; x <= width; x = x + size) {
    ellipse(x, y, size, size);

  }

  //Used to set the Speed
  y = y+ ySpeed

  //To draw the ellipse
  for (let y = 0; y <= height; y = y + size) {
    ellipse(x, y, size, size);

  }

  //To make the circles change directions when they touch the edges
  if(x >= width || x <= 0){
    xSpeed=xSpeed*(-1);
  }
  if(y >= height || y <= 0){
    ySpeed=ySpeed*(-1);
  }
}
