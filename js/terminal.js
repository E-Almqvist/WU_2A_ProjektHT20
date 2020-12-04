var bashButtons = Array.from(document.getElementsByClassName("bashbutton")); // get all of the bash buttons
// Also convert it into an array.
var bashInput = document.getElementById("bashinput"); // the input span thing

var bashtext = ""; // Buffer for the terminal input text

var writingSpeed = 20; // ms for each char
var writingIter = 0;
var dIter = 1;
function updateBashText() {
	textLen = bashtext.length;
	if( writingIter < textLen && writingIter >= 0 ) {
		bashInput.innerText = bashtext.substr(0, writingIter + dIter);
		writingIter += dIter;

		// Small fail-safe
		if( writingIter < 0 ) { writingIter = 0; } else if( writingIter > textLen ) { writingIter = textLen; }

		setTimeout(updateBashText, writingSpeed);
	} else {
		clearTimeout();
	}
}

for ( let i = 0; i<bashButtons.length; i++ ) {
	let btn = bashButtons[i];
	let btnText = "/bin/restaurant --" + btn.innerText.replace(" ", "").toLowerCase();

	btn.addEventListener("mouseover", function() {
		dIter = 1;
		writingIter = 0;
		bashtext = btnText;
		updateBashText();
	});

	btn.addEventListener("mouseleave", function() {
		dIter = -1;
		writingIter -= 1;
		updateBashText();
	});
}
