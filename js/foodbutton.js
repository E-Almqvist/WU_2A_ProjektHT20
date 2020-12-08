var buttons = Array.from(document.getElementsByClassName("foodbutton"));

var foodheader = document.getElementById("foodcontents_header");

// Kinda the same code os terminal.js but this isn't written to be very portable.

function switchSel(elem, newcl) {
	elem.className.replace( /\foodselected\b/g, newcl );
}

for ( let i = 0; i<buttons.length; i++ ) {
	let btn = buttons[i];

	btn.addEventListener("click", function() {
		[].forEach.call(buttons, function(el) {
			el.parentElement.className = el.parentElement.className.replace(/\bfoodselected\b/, "");
		});

		btn.parentElement.classList += " foodselected";

		foodheader.innerText.replace(/([0-9]+)/, toString(i));
	});
}
