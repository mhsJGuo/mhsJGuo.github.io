let song;
let image1;

function preload() {
   song = loadSound("bell.mp3")
   image1 = loadImage("bell.jfif")
}
function setup() {
  // put setup code here
 createCanvas(800,600);
}

function draw() {
  //put drawing code here
background(0);
image(image1,0,0,200,200)
}

function mousePressed() {
  song.play();
}
