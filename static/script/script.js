$(document).ready(function () {
	darkMode();
});

function darkMode() {
	let email = document.getElementById("email");
	let iconSun = document.getElementById("iconSun");
	let iconMoon = document.getElementById("iconMoon");
	let body = document.body;
	let expCompany = document.getElementById("p-exp-company");
	let school = document.getElementById("a-school");
	if (document.getElementById("mySwitch").checked) {
		email.style.color = "white";
		expCompany.style.color = "white";
		iconSun.style.filter = "invert(100%)";
		iconMoon.style.filter = "invert(100%)";
		body.style.backgroundColor = "rgb(1, 0, 20)";
		body.style.color = "white";
		school.style.color = "white";
	} else if (!document.getElementById("mySwitch").checked) {
		email.style.color = "black";
		expCompany.style.color = "black";
		iconSun.style.filter = "invert(0%)";
		iconMoon.style.filter = "invert(0%)";
		body.style.backgroundColor = "rgb(223, 223, 245)";
		body.style.color = "black";
		school.style.color = "black";
	}
}
function emailBottomGoUp() {
}
