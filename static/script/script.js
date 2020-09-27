// let email = document.getElementById("email");
function darkMode() {
	document.body.classList.toggle("dark-mode");
	// document.getElementById("email").style.color = "white";

	if (document.getElementById("mySwitch").checked) {
		document.getElementById("email").style.color = "white";
		document.getElementById("iconSun").style.filter = "invert(100%)";
		document.getElementById("iconMoon").style.filter = "invert(100%)";
	} else if (!document.getElementById("mySwitch").checked) {
		document.getElementById("email").style.color = "black";
		document.getElementById("iconSun").style.filter = "invert(0%)";
		document.getElementById("iconMoon").style.filter = "invert(0%)";
	}
}
