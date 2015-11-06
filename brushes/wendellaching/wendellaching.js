////////////////////////////////////////////////////////////////////
//wendellaching.js
//
// basic wendellaching tool: draws a thin, solid line
// author: Wendy Ching



////////////////////////////////////////////////////////////////////
// create and install brush

var wendellaching = new Brush("wendellaching",
	"./brushes/wendellaching/wendellaching.svg");
brushes.push(wendellaching);



////////////////////////////////////////////////////////////////////
// define brush behavior
wendellaching.draw = function() {
	// noFill()
	fill(forecolor);
	stroke(forecolor);
	strokeWeight(3);

	if (mouseIsPressed) {
		textSize(60);
		text("F", pmouseX + random(-100, 100), pmouseY + random(-100, 100));
		// ellipse(pmouseX, pmouseY, 100, 100);
		// ellipse(pmouseX, pmouseY, 25, 25);
		// line(pmouseX, pmouseY, mouseX, mouseY);
	}
}
