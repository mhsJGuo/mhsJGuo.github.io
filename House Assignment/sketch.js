/*
House Assignment
Created By John Guo
March 18, 2019
*/

function setup() {
  // put setup code here
  //Create the canvas
  createCanvas(800,600);
  background(0,0,255)
}

function draw() {
  // put drawing code here
  //Set the width of the house
  //Change this variable to scale the house
  let houseWidth=100;

  //Ground
  rect(width,height)
  //Main part of the house
  rect(width/2, height/2, houseWidth, houseWidth/2);

  //Roof of house
  triangle(width/2,height/2,width/2+houseWidth/2,height/2-houseWidth/2,width/2+houseWidth,height/2);

  //Door
  rect(width/2+houseWidth/7*3,height/2+houseWidth/4,houseWidth/7,houseWidth/4);

  //Left window
  rect(width/2+houseWidth/10,height/2+houseWidth/8,houseWidth/10*2,houseWidth/8);

  //Right window
  rect(width/2+houseWidth/10*7,height/2+houseWidth/8,houseWidth/10*2,houseWidth/8);
}
