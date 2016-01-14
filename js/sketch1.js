console.log("hello from reading from js");

var h=125;
var h1=125;

function setup(){
	var myCanvas=createCanvas(800,250);
	myCanvas.parent('mySketch'); //link to id mySketch from header tag on index
}

function draw(){
    background(14,47,86);
    noStroke();
    //top row
    fill(17,141,240); //blue
    triangle(0,0,100,h,200,0);
    fill(236,236,218); //cream
    triangle(200,0,300,h,400,0);
    fill(255,48,79); //pink
    triangle(400,0,500,h,600,0);
    fill(17,141,240);
    triangle(600,0,700,h,800,0);
    //bottom row
    fill(255,48,79);
    triangle(0,250,100,h1,200,250);
    fill(17,141,240);
    triangle(200,250,300,h1,400,250);
    fill(236,236,218);
    triangle(400,250,500,h1,600,250);
    fill(255,48,79);
    triangle(600,250,700,h1,800,250);   
    
    if ((mouseIsPressed) && (mouseX<width/2)){
        h=h+1; h1=h1-1;
    } if ((mouseIsPressed) && (mouseX>width/2)){
        h=h-1; h1=h1+1;
    }
    
}