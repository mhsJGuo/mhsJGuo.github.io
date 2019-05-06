let flip;

let image1;
let image2;

function preload(){
  image1 = loadImage("heads.png")
  image2 = loadImage("tails.png")
}

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(220);

}

function mousePressed() {

  coinFlip();

}

function coinFlip() {

	let flip = random(100);

while (flip < 50) {
		image(image1,100,width/2,height/2)
	}
while (flip>50) {
		image(image2,100,width/2,height/2)
	}

}
