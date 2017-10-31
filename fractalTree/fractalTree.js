var angle=0;
var canvas;

function setup() { 
  canvas =createCanvas(800, 500);
  canvas.style('border','1px solid black');
   centerCanvas();
  //canvas.position(windowWidth/2,windowHeight/2);
	//angle = PI/6;
	
	angleSlider = createSlider(0, TWO_PI, PI / 4, 0.01);//0, PI, PI/6,PI/10);
  angleSlider.position(100,470);
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  canvas.position(x, y);
}

function windowResized() {
  centerCanvas();
}

function draw() { 
  background("#e5e5e5");
	//stroke(255);
	translate(width/2,height);	
	branch(100,5);
	}

function branch(length,strokeWidth)
{	
	
	
	angle = angleSlider.value();
	strokeWeight(strokeWidth);
	stroke("#004c00");
	line(0,0,0,-length);
	translate(0,-length);
	
	push();
	rotate(-angle);
	line(0,0,0,-length*0.67);
	translate(0,-length*0.67);
	if(length>2)
		branch(length*0.67,strokeWidth--);
	pop();

	push();
	rotate(angle);
	line(0,0,0,-length*0.67);
	translate(0,-length*0.67);
	if(length>2)
		branch(length*0.67,strokeWidth--);
	pop();
}

