var image;

function preload() {
   image = loadImage("image.jfif")
}
function setup() {
  // put setup code here
 createCanvas(800, 600);
 image(image,0,0,100,100)
}

function draw() {
  //put drawing code here
background(0);

}
