var r=70;
var canvas;

function setup() { 

  canvas = createCanvas(400, 400); 
  canvas.style('border','1px solid white');
   centerCanvas();

	nSlider =  createSlider(0,14,2,0.01);
	nSlider.position(windowWidth/2,500);
} 


function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  canvas.position(x, y);
}

function windowResized() {
  centerCanvas();
}

function draw() 
{ 
  translate(width/2,height/2);
	background(38);
	stroke(240);
	noFill();
	var n=nSlider.value();
	var a = 100;
	var b = 100;
	beginShape();
	for(var angle=0; angle<TWO_PI; angle+=0.1)
	{
		var m=2/n;
		x = pow(abs(cos(angle)),m)*a*sgn(cos(angle));
		y = pow(abs(sin(angle)),m)*b*sgn(sin(angle));
		vertex(x,y);
	}
	endShape(CLOSE);
}

function sgn(value)
{
	if (value>0)
		return 1;
	else if (value<0)
		return -1;
	else if(value==0)
		return 0;
}
