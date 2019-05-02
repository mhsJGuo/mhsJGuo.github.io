let level = 0;

let size = 30;

let hit = false;

let y = 30
let x = 400

let xSpeed = 5;
let ySpeed = 5;

function setup(){
  createCanvas(800, 600);
}

function draw(){
  if (level === 0) {
    background(0);
    fill(255);
    textAlign(CENTER,CENTER);
    textSize(50);
    text("Bounce", width/2, height/2);
    textSize(25);
    text("Don't let the ball touch the ground",width/2,height/2+50);
    text("Press Enter to Start",width/2,height/2+100);

    if (keyIsDown(ENTER)) {
     level+=1;
    }
  }

  else if (level === 1) {
    background(127.5);

    x = x+xSpeed;
    y = y+ySpeed;

    fill(0);
    ellipse(x, y, size, size);
    rect(mouseX, height-size, size*5, size);

    hit = collideRectCircle(mouseX, height-size, size*5, size,x, y, size, size);

    if (mouseX>=width) {
      mouseX = 0
    }

    if (x+size>=width || x<=0) {
      xSpeed = xSpeed*(-1.005);
    }

    if (y<=0) {
      ySpeed = ySpeed*(-1);
    }

    if (y>=height) {
      level = level+1;
    }

    if (hit === true){
      ySpeed = ySpeed*(-1);
    }
  }

  else if (level === 2) {
    background(255,0,0);

    fill(255);
    textSize(50);
    text("Game Over",width/2,height/2);

    textSize(25);
    text("Press Enter to Replay",width/2,height/2+50);

    if (keyIsDown(ENTER)) {
      y = 30;
      x = 400;
      level = level-1;
    }
  }
}
