let song;
let image1;

//To preload
function preload() {
  song = loadSound("bell.mp3")
  
  image1 = loadImage("bell.jfif")
   
}//End function preload

function setup() {
 createCanvas(800,600);
   
}//End function setup

function draw() {
   background(0);
   
   //Maing the image appear
   image(image1,0,0,200,200)
   
}//End function draw

//What happens when mouse is pressed
function mousePressed() {
   song.play();
   
}//End function mousePressed
