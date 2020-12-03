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

for ( let i = 0; i<bashButtons.length; i++ ) {
    let btn = bashButtons[i];
    let btnText = "cd " + btn.innerText.replace(" ", "").toLowerCase();

    console.log(btn, btnText);
    btn.onmouseover = function() {
	bashtext = btnText;
	updateBashText();
    }

    btn.onmouseleave = function() {
	bashtext = "";
	writingIter = 0;
	bashInput.innerText = bashtext;
	clearTimeout();
    }
}
