 var x,y;
 var canvas;

 function setup()
 {
 	canvas =createCanvas(800, 500);
  canvas.style('border','1px solid white');
   centerCanvas();
 	background(0);
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
 	//background(0);
 		stroke(255);
 		 if (mouseIsPressed)
 		{
 			x=pmouseX;
 			y=pmouseY;
 			strokeWeight(4);
 			line(x,y,mouseX,mouseY);
 		}
 }