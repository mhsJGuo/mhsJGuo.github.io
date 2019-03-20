/*
House Assignment
Created By John Guo
March 18, 2019
*/

function setup() {
  // put setup code here
  //Create the canvas
  createCanvas(800,600);
  background(0,0,255);
}

function draw() {
  // put drawing code here
  //Set the width of the house
  //Change this variable to scale the house
  let houseWidth=100;
//line
  //Line Colour (Black)
  stroke(0,0,0);

//Ground
    //Ground Colour (Green)
    fill(0,255,0);
    rect(0, height/2+houseWidth/2, width, height);

//House
  //Main part of the house
    //House colour (Red)
    fill(255,0,0);
    rect(width/2, height/2, houseWidth, houseWidth/2);

  //Roof of house
    //Roof Colour (Black)
    fill(0,0,0);
      triangle(width/2, height/2, width/2+houseWidth/2, height/2-houseWidth/2, width/2+houseWidth, height/2);

  //Door
    //Door Colour (White)
    fill(255,255,255);
    rect(width/2+houseWidth/7*3, height/2+houseWidth/4, houseWidth/7, houseWidth/4);

  //Left window
    //Left Window Colour (White)
    fill(255,255,255);
    rect(width/2+houseWidth/10, height/2+houseWidth/8, houseWidth/10*2, houseWidth/8);

  //Right window
    //Right Window Colur (White)
    fill(255,255,255);
    rect(width/2+houseWidth/10*7, height/2+houseWidth/8, houseWidth/10*2, houseWidth/8);

  //Chimmney
    //Chimmney Colour (Black)
    fill(0,0,0);
    rect(width/2,height/2-houseWidth/3,houseWidth/7,houseWidth/3);

  //Sun
    //Sun Colour(Yellow)
    fill(255,255,0);
    ellipse(0,0, houseWidth);

  //Path To House
    //Path Colour (Grey)
    fill(100,100,100);
    rect(width/2+houseWidth/7*3, height/2+houseWidth/2, houseWidth/7, houseWidth);

//Garage
  //Main Part Of Garage
    //Garage Colour (Red)
    fill(255,0,0);
    rect(width/2, height/2+houseWidth/2, -houseWidth/2, -houseWidth/4);

  //Garage Roof
    //Garage Roof Colour (Black)
    fill(0,0,0);
  triangle(width/2-houseWidth/2, height/2+houseWidth/4, width/2, height/2, width/2, height/2+houseWidth/4);

  //Garage Door
    //Garage Door Colour (White)
    fill(255,255,255);
    rect(width/2-houseWidth/20, height/2+houseWidth/2, -houseWidth/2.5, -houseWidth/5);

//Road
    //Road Colour (Black)
    fill(0,0,0);
    rect(0, height/2+houseWidth/2*3, width, houseWidth);

  //Road Line
    //Road Line Colour (Yellow)
    stroke(255,255,0);
    line(0, height/2+houseWidth*2, width, height/2+houseWidth*2);

}
