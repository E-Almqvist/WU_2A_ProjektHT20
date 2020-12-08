var buttons = Array.from(document.getElementsByClassName("foodbutton"));

var foodheader = document.getElementById("foodcontents_header");

// Kinda the same code os terminal.js but this isn't written to be very portable.

for ( let i = 0; i<buttons.length; i++ ) {
	let btn = buttons[i];

	btn.addEventListener("click", function() {
		[].forEach.call(buttons, function(el) {
			el.parentElement.className = el.parentElement.className.replace(/\bfoodselected\b/, "");
		});

		btn.parentElement.classList += " foodselected";

		foodheader.innerText = btn.innerText;
	});
}
