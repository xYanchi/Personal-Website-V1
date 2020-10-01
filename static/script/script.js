$(document).ready(function () {
	darkMode();
});

function darkMode() {
	let email = document.getElementById("email");
	let iconSun = document.getElementById("iconSun");
	let iconMoon = document.getElementById("iconMoon");
	let body = document.body;

	if (document.getElementById("mySwitch").checked) {
		email.style.color = "white";
		iconSun.style.filter = "invert(100%)";
		iconMoon.style.filter = "invert(100%)";
		body.style.backgroundColor = "black";
		body.style.color = "white";
	} else if (!document.getElementById("mySwitch").checked) {
		email.style.color = "black";
		iconSun.style.filter = "invert(0%)";
		iconMoon.style.filter = "invert(0%)";
		body.style.backgroundColor = "white";
		body.style.color = "black";
	}
}
