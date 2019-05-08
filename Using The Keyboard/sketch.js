let size = 50;

let x1 = 0;
let x2 = 750;

let y1 = 300;
let y2 = 300;


//Assume object have NOT collided
let hit = false;

function setup() {
  createCanvas(800,600);

}//End function setup

function draw() {
  //Check for collision
  hit = collideRectRect(x1, y1, size, size,x2, y2, size, size);

  //Output a statement to console
  print(hit);

   //What to do if collision is detected
   if (hit === TRUE) {

    background(255,0,0);

    textSize(50);
    text('Game Over',250,300);

    textSize(25);
    text('Refresh Page To Restart',250,400);

    //Stops everything
    noLoop();

  }//End if TRUE
  
   //What happens if collision is not detected
   else {
    background(127.5);

    fill(255);
    rect(x1, y1, size, size);

    fill(0);
    rect(x2, y2, size, size);

    fill(255);
    textSize(50);
    text('Game Of Tag',250,300)

  }//End else FALSE
  
//------------------------Code for the First rectangle-------------------------//
   //What happens when the LEFT_ARROW is pressed
    if (keyIsDown(LEFT_ARROW)){
    x1=x1-5
      
    }//End if//End if
    
   //What happens when the RIGHT_ARROW is pressed
    if (keyIsDown(RIGHT_ARROW)){
    x1=x1+5
      
    }//End if//End if
    
   //What happens when the UP_ARROW is pressed
    if (keyIsDown(UP_ARROW)){
    y1=y1-5
      
    }//End if
    
   //What happens when the DOWN_ARROW is pressed
    if (keyIsDown(DOWN_ARROW)){
    y1=y1+5
      
    }//End if

    if (y1>=height-size) {
      y1=y1-5
      
    }//End if

    if (y1<=0) {
      y1=y1+5
      
    }//End if

    if (x1>=width-size) {
      x1=x1-5
      
    }//End if

    if (x1<=0) {
      x1=x1+5
      
    }//End if
//------------------------Code for the second rectangle-------------------------//
   //What happens when the a key is pressed
    if (keyIsDown(65)||keyIsDown(65)){
    x2=x2-5
      
    }//End if
      
  //What happens when the d key is pressed
    if (keyIsDown(68)||keyIsDown(68)){
    x2=x2+5
      
    }//End if

  //What happens when the w key is pressed
    if (keyIsDown(87)||keyIsDown(87)){
    y2=y2-5
      
    }//End if

  //What happens when the s key is pressed
    if (keyIsDown(83)||keyIsDown(83)){
    y2=y2+5
      
    }//End if
  
     if (y2>=height-size) {
      y2=y2-5
      
    }//End if

    if (y2<=0) {
      y2=y2+5
      
    }//End if
  
    if (x2>=width-size) {
      x2=x2-5
      
    }//End if

    if (x2<=0) {
      x2=x2+5
      
    }//End if
  
}//End function draw
