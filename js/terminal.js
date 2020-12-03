var bashButtons = Array.from(document.getElementsByClassName("bashbutton")); // get all of the bash buttons
// Also convert it into an array.
var bashInput = document.getElementById("bashinput"); // the input span thing

var bashtext = ""; // Buffer for the terminal input text

var writingSpeed = 60; // ms for each char
var writingIter = 0;
function updateBashText() {
    textLen = bashtext.length;
    	if( writingIter <= textLen ) {
	bashInput.innerText = bashtext.substr(0, writingIter);
	writingIter++;

	setTimeout(updateBashText, writingSpeed);
    }
}

for (btn of bashButtons) {
    console.log(btn);
    btn.onmouseover = function() {
	bashtext = btn.innerText;
	console.log(bashtext);
	updateBashText();
    }

    btn.onmouseleave = function() {
	bashtext = "";
	writingIter = 0;
	bashInput.innerText = bashtext;
	console.log("leave");
	clearTimeout();
    }
}
