function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() 
{
	if (mouseIsPressed) 
	{
    	//strokeWeight(4);

		var r = random(0, 255);
	  	var g = random(0, 255);
	  	var b = random(0, 255);
	    stroke(0);
	    fill(r,g,b);
 	} 

 	else 
 	{
		var r = random(0, 255);
	  	var g = random(0, 255);
	  	var b = random(0, 255);
	    stroke(r,g,b);
	    fill(0); 
    }

  	ellipse(mouseX, mouseY, 80, 80);
}