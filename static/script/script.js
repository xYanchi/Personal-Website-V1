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
		body.style.backgroundColor = "rgb(1, 0, 13)";
		body.style.color = "white";
	} else if (!document.getElementById("mySwitch").checked) {
		email.style.color = "black";
		iconSun.style.filter = "invert(0%)";
		iconMoon.style.filter = "invert(0%)";
		body.style.backgroundColor = "rgb(223, 223, 235)";
		body.style.color = "black";
	}
}
//0, 0, 13
//1, 0, 28

// function animateText(textArea) {
// 	let text = textArea.value;
// 	let to = text.length,
// 	  from = 0;

// 	animate({
// 	  duration: 5000,
// 	  timing: bounce,
// 	  draw: function(progress) {
// 		let result = (to - from) * progress + from;
// 		textArea.value = text.substr(0, Math.ceil(result))
// 	  }
// 	});
//   }
//   function bounce(timeFraction) {
// 	for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
// 	  if (timeFraction >= (7 - 4 * a) / 11) {
// 		return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
// 	  }
// 	}
//   }