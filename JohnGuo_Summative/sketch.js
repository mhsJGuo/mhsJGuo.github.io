//Global variables
let size = 150;

//Hit variable for all buttons
let hit;
//Hit variable for obstacle #1
let hit1;
//Hit variable for obstacle #2
let hit2;
//Hit variables for obstacles whn they reach the bottom of the canvas
let hit3;
let hit4;

//The score
let score = 0;

//Starts at the menu screen
let level = 101;

//Starting location of the car
let carx = 116.67;
let cary = 650;

//Starting location of the obstacles in all game modes
let deathx1 = 250;
let deathy1 = 0;

let deathx2 = 250;
let deathy2 = 0;

//3 different fall speed for the 3 different modes
let fallSpeed1 = 8;

let fallSpeed2 = 13.5;

let fallSpeed3 = 15;

let img;

function preload() {
  img = loadImage('car1.png');
}

function setup() {
//Centers the canvas on the window
let canvas = createCanvas(300,800);
canvas.position(windowWidth/2-150,windowHeight/2-400);

}//End function setup

function draw() {
  //Menu screen
  if (level === 101) {
    background(0);

    image (img,0,0,100,100);
    //Creates the dashed lines
    drawingContext.setLineDash([25,20]);
    stroke(255,255,0);
    line(100, 0, 100, 800);
    line(200, 0, 200, 800);
    stroke(0);
    drawingContext.setLineDash([]);

    //Title of game
    stroke(255);
    textAlign(CENTER,CENTER)
    stroke(0);
    fill(255);
    textSize(75);
    text("SPEED", width/2, height/2)

    //Button for play screen
    fill(255);
    rect(50,450,200,80);

    textAlign(CENTER,CENTER)
    stroke(0);
    fill(0);
    textSize(50);
    text("PLAY", width/2, 490)

    //Button for cars screen
    fill(255);
    rect(50,550,200,80);

    textAlign(CENTER,CENTER)
    stroke(0);
    fill(0);
    textSize(50);
    text("CARS", width/2, 590)

    //Button for help screen
    fill(255);
    rect(50,650,200,80);

    textAlign(CENTER,CENTER)
    stroke(0);
    fill(0);
    textSize(50);
    text("HELP", width/2, 690)

  }//End if

    //Difficulty screen
    else if (level === 102) {
      background(0);

      //Creates the dashed lines
      drawingContext.setLineDash([25,20]);
      stroke(255,255,0);
      line(100, 0, 100, 800);
      line(200, 0, 200, 800);
      stroke(0);
      drawingContext.setLineDash([]);

      //Button for easy mode
      fill(255);
      rect( 50, 70, 200, 80);

      textAlign(CENTER,CENTER)
      stroke(0);
      fill(0);
      textSize(50);
      text("EASY", width/2, 110)

      //Button for medium mode
      fill(255);
      rect( 50, 170, 200, 80);

      textAlign(CENTER,CENTER)
      stroke(0);
      fill(0);
      textSize(50);
      text("MEDIUM", width/2, 210)

      //Button for hard mode
      fill(255);
      rect( 50, 270, 200, 80);

      textAlign(CENTER,CENTER)
      stroke(0);
      fill(0);
      textSize(50);
      text("HARD", width/2, 310)

      //Back button
      fill(255);
      rect(50,650,200,80);

      textAlign(CENTER,CENTER)
      stroke(0);
      fill(0);
      textSize(50);
      text("BACK", width/2, 690)

    }//End else if

      //Easy mode screen
      else if (level === 1) {
        background(0);

        //Creates the dashed lines
        drawingContext.setLineDash([25,20]);
        stroke(255,255,0);
        line(100, 0, 100, 800);
        line(200, 0, 200, 800);
        stroke(0);
        drawingContext.setLineDash([]);

        noStroke();
        drawCar();
        drawEasy();

      }//End else if

      //Medium mode screen
      else if (level === 2) {
        background(0);

        //Creates the dashed lines
        drawingContext.setLineDash([25,20]);
        stroke(255,255,0);
        line(100, 0, 100, 800);
        line(200, 0, 200, 800);
        stroke(0);
        drawingContext.setLineDash([]);

        noStroke();
        drawCar();
        drawMedium();

      }//End else if

      //Hard mode screen
      else if (level === 3) {
        background(0);

        //Creates the dashed lines
        drawingContext.setLineDash([25,20]);
        stroke(255,255,0);
        line(100, 0, 100, 800);
        line(200, 0, 200, 800);
        stroke(0);
        drawingContext.setLineDash([]);

        noStroke();
        drawCar();
        drawHard();

      }//End else if

    //Cars screen
    else if (level === 103) {
      background(0);

      //Creates the dashed lines
      drawingContext.setLineDash([25,20]);
      stroke(255,255,0);
      line(100, 0, 100, 800);
      line(200, 0, 200, 800);
      stroke(0);
      drawingContext.setLineDash([]);

      //Back button
      fill(255);
      rect( 50, 650, 200, 80);

      textAlign(CENTER,CENTER)
      stroke(0);
      fill(0);
      textSize(50);
      text("BACK", width/2, 690)

    }//End else if

    //Help screen
    else if (level === 104) {
      background(0);

      //Creates the dashed lines
      drawingContext.setLineDash([25,20]);
      stroke(255,255,0);
      line(100, 0, 100, 800);
      line(200, 0, 200, 800);
      stroke(0);
      drawingContext.setLineDash([]);

      //Back button
      fill(255);
      rect( 50, 70, 200, 80);

      textAlign(CENTER,CENTER)
      stroke(0);
      fill(0);
      textSize(50);
      text("BACK", width/2, 110)

      //Instructions
      textAlign(CENTER,CENTER)
      stroke(0);
      fill(255);
      textSize(20);
      text("To play move the car using \n either w and d or \n left and right arrows \n to avoid the obstacles.", width/2, height/2)

    }//End else if

  //Created multiple lose screen because I wanted to do a restart button
  //Lose screen for easy mode
  else if (level === 201) {
    background(0);

    //Creates the dashed lines
    drawingContext.setLineDash([25,20]);
    stroke(255,255,0);
    line(100, 0, 100, 800);
    line(200, 0, 200, 800);
    stroke(0);
    drawingContext.setLineDash([]);

    //Resets all variables related to easy mode
    carx = 116.7;
    cary = 650;

    deathx1 = 250;
    deathy1 = 0;

    deathx2 = 250;
    deathy2 = 0;

    fallSpeed1 = 8;

    //Back button
    fill(255);
    rect( 50, 650, 200, 80);

    textAlign(CENTER,CENTER)
    stroke(0);
    fill(0);
    textSize(50);
    text("BACK", width/2, 690)

    //Restart button
    fill(255);
    rect( 50, 550, 200, 80);

    textAlign(CENTER,CENTER)
    stroke(0);
    fill(0);
    textSize(45);
    text("RESTART", width/2, 590)

    //Shows score
    textAlign(CENTER,CENTER)
    stroke(255);
    fill(255);
    textSize(50);
    text("Score in\n Easy Mode:", width/2, height/2-100);
    text(score, width/2, height/2);

  }//End else if

  //Lose screen for medium mode
  else if (level === 202) {
    background(0);

    //Creates the dashed lines
    drawingContext.setLineDash([25,20]);
    stroke(255,255,0);
    line(100, 0, 100, 800);
    line(200, 0, 200, 800);
    stroke(0);
    drawingContext.setLineDash([]);

    //Resets all variable related to medium mode
    carx = 116.7;
    cary = 650;

    deathx1 = 250;
    deathy1 = 0;

    deathx2 = 250;
    deathy2 = 0;

    fallSpeed2 = 13.5;

    //Back button
    fill(255);
    rect( 50, 650, 200, 80);

    textAlign(CENTER,CENTER)
    stroke(0);
    fill(0);
    textSize(50);
    text("BACK", width/2, 690)

    //Restart button
    fill(255);
    rect( 50, 550, 200, 80);

    textAlign(CENTER,CENTER)
    stroke(0);
    fill(0);
    textSize(45);
    text("RESTART", width/2, 590)

    //Show score
    textAlign(CENTER,CENTER)
    stroke(255);
    fill(255);
    textSize(50);
    text("Score in\n Medium Mode:", width/2, height/2-100);
    text(score, width/2, height/2);

  }//End else if

  //Lose screen for hard mode
  else if (level === 203) {
    background(0);

    //Creates the dashed lines
    drawingContext.setLineDash([25,20]);
    stroke(255,255,0);
    line(100, 0, 100, 800);
    line(200, 0, 200, 800);
    stroke(0);
    drawingContext.setLineDash([]);

    //Resets all variables related to hard mode
    carx = 116.7;
    cary = 650;

    deathx1 = 250;
    deathy1 = 0;

    deathx2 = 250;
    deathy2 = 0;

    fallSpeed3 = 15;

    //Back button
    fill(255);
    rect( 50, 650, 200, 80);

    textAlign(CENTER,CENTER)
    stroke(0);
    fill(0);
    textSize(50);
    text("BACK", width/2, 690)

    //Restart button
    fill(255);
    rect( 50, 550, 200, 80);

    textAlign(CENTER,CENTER)
    stroke(0);
    fill(0);
    textSize(45);
    text("RESTART", width/2, 590)

    //Shows score
    textAlign(CENTER,CENTER)
    stroke(255);
    fill(255);
    textSize(50);
    text("Score in\n Hard Mode:", width/2, height/2-100);
    text(score, width/2, height/2);

  }//End else if

}//End function draw

//For buttons
function mouseReleased() {

  //Button for play screen
  if (level === 101) {
    hit = collidePointRect( mouseX, mouseY, 50, 450, 200, 80);

    if (hit === true) {
      level = 102

    }//End if

  }//End if

  //Button for cars screen
  if (level === 101) {
    hit = collidePointRect( mouseX, mouseY, 50, 550, 200, 80);

    if (hit === true) {
      level = 103

    }//End if

  }//End if

  //Button for help screen
  if (level === 101) {
    hit = collidePointRect( mouseX, mouseY, 50, 650, 200, 80);

    if (hit === true) {
      level = 104

    }//End if

  }//End if

  //Button for easy mode
  if (level === 102) {
    hit = collidePointRect( mouseX, mouseY, 50, 70, 200, 80);

    if (hit === true) {
      level = 1

    }//End if

  }//End if

  //Button for medium mode
  if (level === 102) {
    hit = collidePointRect( mouseX, mouseY, 50, 170, 200, 80);

    if (hit === true) {
      level = 2

    }//End if

  }//End if

  //Button for hard mode
  if (level === 102) {
    hit = collidePointRect( mouseX, mouseY, 50, 270, 200, 80);

    if (hit === true) {
      level = 3

    }//End if

  }//End if

  //Back button for help screen
  if (level === 104) {
    hit = collidePointRect( mouseX, mouseY, 50, 70, 200, 80);

    if (hit === true){
      level = 101

    }//End if

  }//End if

  //Back button for all other screens
  if (level === 102 || level === 103 || level === 201 || level === 202 || level === 203) {
    hit = collidePointRect( mouseX, mouseY, 50, 650, 200, 80);

    if (hit === true) {
      level = 101;
      score = 0;

    }//End if

  }//End if

  //Button to restart easy mode
  if (level === 201) {
    hit = collidePointRect( mouseX, mouseY, 50, 550, 200, 80);

    if (hit === true){
      level = 1
      score = 0;

    }//End if

  }//End if

  //Button to restart medium mode
  if (level === 202) {
    hit = collidePointRect( mouseX, mouseY, 50, 550, 200, 80);

    if (hit === true){
      level = 2
      score = 0;

    }//End if

  }//End if

  //Button to restart hard mode
  if (level === 203) {
    hit = collidePointRect( mouseX, mouseY, 50, 550, 200, 80);

    if (hit === true){
      level = 3;
      score = 0;

    }//End if

  }//End if

}//End function mouseReleased

/*----------------------------------The car-----------------------------------*/
//Moving the car
function keyReleased() {
  //Moves the car to the left
  if (keyCode === 65 || keyCode === LEFT_ARROW) {
    carx = carx - 100;

  }//End if

  //Moves the car to the right
  else if (keyCode === 68 || keyCode === RIGHT_ARROW){
    carx = carx + 100;

  }//End else if

}//End function keyReleased

//The car
function drawCar() {
  //The car
  fill(255);
  rect( carx, cary, size/2.25, size/1.25);

  //Stops the car from going to far left
  if (carx <= 50 ) {
    carx = 16.7;

  }//End if

  //Stops the car from going to far right
  if (carx >= width-size/2.25-50 ) {
    carx = width-size/2.25-16.7;

  }//End if

}//End function drawCar

/*-----------------------------Difficuly levels-------------------------------*/
//Easy mode
function drawEasy() {
  //Shows the score
  fill(255);
  textSize(25);
  text( "Score:", 50, 25);
  text( score, 100, 25);


  hit1 = collideRectCircle( carx, cary, size/2.25 , size/1.25, deathx1, deathy1, size/2, size/2);
  hit2 = collideRectCircle( carx, cary, size/2.25 , size/1.25, deathx2, deathy2, size/2, size/2);
  hit3 = collideLineCircle( 0, height + size/2, width, height + size/2, deathx1, deathy1, size/2, size/2);
  hit4 = collideLineCircle( 0, height + size, width, height + size, deathx1, deathy1, size/2, size/2);

  //The obstacles locations are chosen between 50, 150, or 250
  let location1 = ["50","150","250"];
  let r1 = random(location1);

  let location2 = ["50","150","250"];
  let r2 = random(location2);

  //Obstacle #1
  fill(255,0,0);
  ellipse( deathx1, deathy1, size/2, size/2);

  //Obstacle #2
  fill(255,0,0);
  ellipse( deathx2, deathy2, size/2, size/2);

  //Speed of the obstacles
  deathy1 = deathy1 + fallSpeed1;

  deathy2 = deathy2 + fallSpeed1;

  //If car hits obstacle #1
  if (hit1 === true) {
    //Goes to the lose screen for easy mode
    level = 201;

  }//End if

  //If car hits obstacle #2
  if (hit2 === true) {
    //Goes to the lose screen for easy mode
    level = 201;

  }//End if

  //If obstacles reach the bottom of the screen
  if (hit3 === true) {
    //The obstacles change or keep their locations
    deathx1 = r1;
    deathx2 = r2;

  }//End if

  //If obstacle reach the bottom of the screen
  if (hit4 === true){
    //The obstalces return to the top of the canvas
    deathy2 = 0;
    deathy1 = 0;

    //Score increases
    score = score + 1;

    //Speed of the obstacles increase
    fallSpeed1 = fallSpeed1 + .1;

  }//End if

}//End function drawEasy

//Medium mode
function drawMedium() {
  //Shows the score
  fill(255);
  textSize(25);
  text( "Score:", 50, 25);
  text( score, 100, 25);

  hit1 = collideRectCircle( carx, cary, size/2.25 , size/1.25, deathx1, deathy1, size/2, size/2);
  hit2 = collideRectCircle( carx, cary, size/2.25 , size/1.25, deathx2, deathy2, size/2, size/2);
  hit3 = collideLineCircle( 0, height + size/2, width, height + size/2, deathx1, deathy1, size/2, size/2);
  hit4 = collideLineCircle( 0, height + size, width, height + size, deathx1, deathy1, size/2, size/2);

  //The obstacles locations are chosen between 50, 150, or 250
  let location1 = ["50","150","250"];
  let r1 = random(location1);

  let location2 = ["50","150","250"];
  let r2 = random(location2);

  //Obstacle #1
  fill(255,0,0);
  ellipse( deathx1, deathy1, size/2, size/2);

  //Obstacle #2
  fill(255,0,0);
  ellipse( deathx2, deathy2, size/2, size/2);

  //Speed of the obstacles
  deathy1 = deathy1 + fallSpeed2;

  deathy2 = deathy2 + fallSpeed2;

  //If car hits obstacle #1
  if (hit1 === true) {
    //Goes to the lose screen for medium mode
    level = 202;

  }//End if

  //If car hits obstacle #2
  if (hit2 === true) {
    //Goes to the lose screen for medium mode
    level = 202;

  }//End if

  //If obstacles reach the bottom of the screen
  if (hit3 === true) {
    //The obstacles change or keep their locations
    deathx1 = r1;
    deathx2 = r2;

  }//End if

  //If obstacle reach the bottom of the screen
  if (hit4 === true){
    //The obstalces return to the top of the canvas
    deathy2 = 0;
    deathy1 = 0;

    //Score increases
    score = score + 1;

    //Speed of the obstacles increase
    fallSpeed2 = fallSpeed2 + .1;

  }//End if

}//End function drawMedium

//Hard mode
function drawHard() {
  //Shows the score
  fill(255);
  textSize(25);
  text( "Score:", 50, 25);
  text( score, 100, 25);

  hit1 = collideRectCircle( carx, cary, size/2.25 , size/1.25, deathx1, deathy1, size/2, size/2);
  hit2 = collideRectCircle( carx, cary, size/2.25 , size/1.25, deathx2, deathy2, size/2, size/2);
  hit3 = collideLineCircle( 0, height + size/2, width, height + size/2, deathx1, deathy1, size/2, size/2);
  hit4 = collideLineCircle( 0, height + size, width, height + size, deathx1, deathy1, size/2, size/2);

  //The obstacles locations are chosen between 50, 150, or 250
  let location1 = ["50","150","250"];
  let r1 = random(location1);

  let location2 = ["50","150","250"];
  let r2 = random(location2);

  //Obstacle #1
  fill(255,0,0);
  ellipse( deathx1, deathy1, size/2, size/2);

  //Obstacle #2
  fill(255,0,0);
  ellipse( deathx2, deathy2, size/2, size/2);

  //Speed of the obstacles
  deathy1 = deathy1 + fallSpeed3;

  deathy2 = deathy2 + fallSpeed3;

  //If car hits obstacle #1
  if (hit1 === true) {
    //Goes to the lose screen for hard mode
    level = 203;

  }//End if

  //If car hits obstacle #2
  if (hit2 === true) {
    //Goes to the lose screen for hard mode
    level = 203;

  }//End if

  //If obstacles reach the bottom of the screen
  if (hit3 === true) {
    //The obstacles change or keep their locations
    deathx1 = r1;
    deathx2 = r2;

  }//End if

  //If obstacle reach the bottom of the screen
  if (hit4 === true){
    //The obstalces return to the top of the canvas
    deathy2 = 0;
    deathy1 = 0;

    //Score increases
    score = score + 1;

    //Speed of the obstacles increase
    fallSpeed3 = fallSpeed3 + .1;

  }//End if

}//End function drawHard
