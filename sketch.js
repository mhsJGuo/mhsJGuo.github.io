let size = 50;
let x1 = 0;
let x2 = 750;
let y1 = 300;
let y2 = 300;


//Assume object have NOT collided
let hit = false;

function setup() {
  // put setup code here
  createCanvas(800,600);

}

function draw() {
  //put drawing code here
  //Check for collision
  hit = collideRectRect(x1, y1, size, size,x2, y2, size, size);

  //Output a statement to console
  print(hit);

    if (hit === true) {

    background(255,0,0);

    textSize(50);
    text('Game Over',250,300);

    textSize(25);
    text('Refresh Page To Restart',250,400);

    noLoop();

  } else {
      background(127.5);

      fill(255);
      rect(x1, y1, size, size);

      fill(0);
      rect(x2, y2, size, size);

      fill(255);
      textSize(50);
      text('Game Of Tag',250,300)

    }

    if (keyIsDown(LEFT_ARROW)){
    x1=x1-5
    }

    if (keyIsDown(RIGHT_ARROW)){
    x1=x1+5
    }

    if (keyIsDown(UP_ARROW)){
    y1=y1-5
    }

    if (keyIsDown(DOWN_ARROW)){
    y1=y1+5
    }

    if (keyIsDown(65)||keyIsDown(65)){
    x2=x2-5
    }

    if (keyIsDown(68)||keyIsDown(68)){
    x2=x2+5
    }

    if (keyIsDown(87)||keyIsDown(87)){
    y2=y2-5
    }

    if (keyIsDown(83)||keyIsDown(83)){
    y2=y2+5
    }

    if (y1>=height-size) {
      y1=y1-5
    }

    if (y1<=0) {
      y1=y1+5
    }

    if (y2>=height-size) {
      y2=y2-5
    }

    if (y2<=0) {
      y2=y2+5
    }

    if (x1>=width-size) {
      x1=x1-5
    }

    if (x1<=0) {
      x1=x1+5
    }

    if (x2>=width-size) {
      x2=x2-5
    }

    if (x2<=0) {
      x2=x2+5
    }

}
