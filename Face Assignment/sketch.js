//Global Variables
let faceHeight = 500;
let faceWidth = faceHeight/3*2.75;
let eyeSize = faceHeight/5.2

function setup() {
  //Canvas
  createCanvas(windowWidth,windowHeight);
  //Background colour
  background(100);
}
//Used to bring the functions onto the screen
function draw() {
  strokeWeight(1);
  //to have hat behind ears
  hatBase();
  drawHead();
  //to have hat front in front of ears
  drawHat();
  drawEyebrows();
  drawMouth();
  drawMoustache();
  drawEyebrows();
  drawEyes();
  //To increase the line weight of the nose
  strokeWeight(4);
  drawNose();
}

//--------------------- Code Written By John Start -----------------------------

function drawEyebrows(){
  stroke(10)
  fill(100,45,45);
  //left eyebrow
  ellipse(width/2-faceWidth/4.5,height/2-faceHeight/7,faceWidth/3.5,faceHeight/3);

  noStroke()
  fill(248, 204, 169);
  ellipse(width/2-faceWidth/4.2,height/2-faceHeight/15,faceWidth/2.7,faceHeight/3);

  //Right eyebrow
  stroke(10)
  fill(100,45,45);
  ellipse(width/2+faceWidth/4.5,height/2-faceHeight/7,faceWidth/3.5,faceHeight/3);

  noStroke()
  fill(248, 204, 169);
  ellipse(width/2+faceWidth/4.2,height/2-faceHeight/15,faceWidth/2.7,faceHeight/3);
  stroke(10)

}//End function drawEyebrows

//John will do Mouth
function drawMouth() {
  //Code for the mouth
  noFill();
  arc(width/2, height/2+faceHeight/8*3, faceWidth/4, faceHeight/25, 0, PI);

  //Bump under mouth
  arc(width/2, height/2+faceHeight/16*7, faceWidth/15, faceHeight/50, 0, PI);

}//End funcion drawMouth

//John will do Moustache
function drawMoustache() {
  //Bumpy parts in Moustache
  stroke(10)

  //Brown color
  fill(64, 28, 0);

  //Bump Arc on the very left
  arc(width/2-faceWidth/25*7, height/2+faceHeight/30, faceWidth/5.5, faceHeight/2.5, PI/2, PI/8*7);

  //Bump Arc on the very right
  arc(width/2+faceWidth/25*7, height/2+faceHeight/30, faceWidth/5.5, faceHeight/2.5, PI*2/18*18.5, PI/2);

  //Bump Arc on the center right
  arc(width/2+faceWidth/12, height/2+faceHeight/16*4.95, faceWidth/6, faceHeight/12, 0, PI);

  //Bump Arc on the center left
  arc(width/2-faceWidth/12, height/2+faceHeight/16*4.95, faceWidth/6, faceHeight/12, 0, PI);

  //Bump Arc on the left
  arc(width/2-faceWidth/12*1.95, height/2+faceHeight/16*3, faceWidth/4, faceHeight/4, PI/2, PI/8*7);

  //Bump Arc on the Right
  arc(width/2+faceWidth/12*1.95, height/2+faceHeight/16*3, faceWidth/4, faceHeight/4, PI*2/18*19, PI/2);

  //Code to fill in the moustache and to make the moustache brown
  noStroke();
  //Rectangle in the center used for filling in the moustache
    beginShape();
  //Brown colour
  fill(64, 28, 0)
    vertex(width/2+faceWidth/12*2, height/2+faceHeight/16*5);
    vertex(width/2-faceWidth/12*2, height/2+faceHeight/16*5);
    vertex(width/2-faceWidth/12*2, height/2-faceHeight/20);
    vertex(width/2+faceWidth/12*2, height/2-faceHeight/20);
    endShape(CLOSE);

  //Rectangle above the top arc to make the area skin coloured
    beginShape();
  //Colour of the skin
  fill(248, 204, 169);
    vertex(width/2-faceWidth/2.5, height/2+faceHeight/16);
    vertex(width/2+faceWidth/2.5, height/2+faceHeight/16);
    vertex(width/2+faceWidth/2.5, height/2-faceHeight/20);
    vertex(width/2-faceWidth/2.5, height/2-faceHeight/20);
    endShape(CLOSE);

  //Rectangle on the left to fill in the moustache
      beginShape();
//Brown colour
  fill(64, 28, 0);
    vertex(width/2-faceWidth/12*3.4, height/2+faceHeight/16*3.75);
    vertex(width/2+faceWidth/12*3.4, height/2+faceHeight/16*3.75);
    vertex(width/2+faceWidth/12*3.4, height/2-faceHeight/20);
    vertex(width/2-faceWidth/12*3.4, height/2-faceHeight/20);
    endShape(CLOSE);

  //Rectangle above the moustache to cover in colour fills that are coming out
    beginShape();
  //Colour of the skin
    fill(248, 204, 169);
    vertex(width/2-faceWidth/2.5, height/2+faceHeight/15);
    vertex(width/2+faceWidth/2.5, height/2+faceHeight/12.5);
    vertex(width/2+faceWidth/2.5, height/2-faceHeight/5);
    vertex(width/2-faceWidth/2.5, height/2-faceHeight/5);
    endShape(CLOSE);

//The top arc of the moustache
  stroke(10);
  fill(248, 204, 169);
    arc(width/2, height/2+faceHeight/16, faceWidth/15*11, faceHeight/4, 0, PI);

}//End function drawMoustache

//--------------------- Code Written By John End -----------------------------





















//The Head by Michael
function drawHead() {
  fill(64, 28, 0);
  ellipse(width/2, height/2, faceWidth, faceHeight);
//code for side burns by John
  fill(248, 204, 169);
  arc(width/2, height/2, faceWidth, faceHeight, PI/15,PI/15*14.5);
}

//Nose by Michael van Staden
function drawNose(){
  fill(248,204,169);
  ellipse(width/2, height/2+faceWidth/6.5, faceWidth/2.5, faceWidth/3);
}

//done by Ava
function drawEyes() {
  //whites
  fill(255)
  strokeWeight(2)
  ellipse(width/2 - faceWidth/6.1, height/2 - faceHeight/30, eyeSize, eyeSize*1.4)
  ellipse(width/2 + faceWidth/5.9, height/2 - faceHeight/30, eyeSize, eyeSize*1.4)

  //irises
  fill(108, 213, 245)
  strokeWeight(1)
  ellipse(width/2 - faceWidth/7.3, height/2 - faceHeight/32, eyeSize/1.4, eyeSize*1.1)
  ellipse(width/2 + faceWidth/7, height/2 - faceHeight/32, eyeSize/1.4, eyeSize*1.1)

  //pupils
  fill(0)
  ellipse(width/2 - faceWidth/7.5, height/2 - faceHeight/33, eyeSize/1.8, eyeSize/1.15)
  ellipse(width/2 + faceWidth/7.1, height/2 - faceHeight/33, eyeSize/1.8, eyeSize/1.15)
}

//Hat by Michael van Staden
function hatBase(){
  strokeWeight(2.5);
  fill(225,21,54);
  arc(width/2, height/2-faceWidth/100, faceWidth+faceWidth/4, faceHeight*1.56,4*PI/4,0,OPEN);
}

//Hat by Michael van Staden
function drawHat(){
  noFill();
  //the M logo
  fill(225);
  ellipse(width/2,height/2-faceWidth/1.65,faceWidth/2.6,faceWidth/3);

  //Mario's hat frontpiece
  //top of hat tip
  fill(225,21,54);
  arc(width/2, height/2-faceWidth/6, faceWidth, faceHeight*.68,4.15*PI/4,7.82*PI/4,OPEN);

  //bottom of hat tip
  fill(152,19,24);
  arc(width/2, height/2-faceWidth/17.5, faceWidth+faceWidth/16, faceHeight*.77,4.4*PI/4,7.5*PI/4,OPEN);

  //cover for arcs of hat
  fill(248,204,169);
  arc(width/2, height/2-faceWidth/10, faceWidth-faceWidth/50, faceHeight/1.75,4.3*PI/4,7.7*PI/4,OPEN);

    //Part of the sideburn by John
    noStroke();
    fill(64, 28, 0);
    //Left side burn
    arc(width/2-faceWidth/2.5, height/2-faceWidth/11.5, faceWidth-faceWidth/1.2, faceHeight/3,PI,PI/2*3);
    //Right side burn
    arc(width/2+faceWidth/2.5, height/2-faceWidth/11.5, faceWidth-faceWidth/1.2, faceHeight/3,PI/2*3,PI*2);
stroke(10);
  //M for hat
  fill(225,21,54);

  beginShape();
  vertex(width/2-faceWidth/6,height/2-faceWidth/1.7);
  vertex(width/2-faceWidth/13,height/2-faceWidth/1.37);
  vertex(width/2,height/2-faceWidth/1.55);
  vertex(width/2+faceWidth/13,height/2-faceWidth/1.37);
  vertex(width/2+faceWidth/6,height/2-faceWidth/1.7);
  vertex(width/2+faceWidth/8.5,height/2-faceWidth/1.85);
  vertex(width/2+faceWidth/13,height/2-faceWidth/1.5);
  vertex(width/2+faceWidth/13,height/2-faceWidth/1.5);
  vertex(width/2,height/2-faceWidth/1.67);
  vertex(width/2-faceWidth/13,height/2-faceWidth/1.5);
  vertex(width/2-faceWidth/8.5,height/2-faceWidth/1.85);
  endShape(CLOSE);
}




function drawSideburns() {
  //done by ava (by far the worst part, I may work on it at home, sryyyyy lol there was an attempt I promise)
  //lool its alright ill try my best to work on stuff as well
  fill(140, 44, 45);

  //left sideburn
  triangle(width/2 - faceWidth/2.1, height/2 - faceWidth/3.4, width/1.87 - faceWidth/2, height/2 - faceHeight/3.3, width/1.87 - faceWidth/2, height/1.35 - faceWidth/2);
  ellipse(width/2 - faceWidth/2, height/2 - faceHeight/3, faceWidth/9.3, faceHeight/2.4);
  ellipse(width/2 - faceWidth/1.5, height/2 - faceWidth/1.7, faceHeight/13, faceWidth/7);

  //right sideburn
  triangle(width/2 + faceWidth/2.08, height/2 - faceWidth/3.4, width/2.155 + faceWidth/2, height/2 - faceHeight/3.3, width/2.155 + faceWidth/2, height/1.35 - faceWidth/2);
  ellipse(width/2 + faceWidth/2.1, height/2 - faceHeight/3, faceWidth/9.3, faceHeight/2.4);
  ellipse(width/2 + faceWidth/2.25, height/2 - faceWidth/1.7, faceHeight/13, faceWidth/7);
  }

//done by Ava, don't even try to use this yet lol, it's super messed up and completely unscalable but
/*
function drawSideburns() {
  fill(140, 44, 45);
  beginShape()
  curveVertex(-66,-106)
  curveVertex(-36,-108)
  curveVertex(-31,-37)
  curveVertex(-19,-8)
  curveVertex(-30,21)
  curveVertex(-69,71)
  curveVertex(-66,-106)
  curveVertex(-36,-108)
  curveVertex(-31,-37)
  curveVertex(12,-139)
  curveVertex(41,-141)
  curveVertex(53,-70)
  curveVertex(73,-33)
  curveVertex(50, 500)
  curveVertex(12, 56)
  curveVertex(12,-139)
  curveVertex(41,-141)
  curveVertex(53,-70)
  endShape()
}
*/
