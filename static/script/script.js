// let email = document.getElementById("email");
function darkMode() {
  document.body.classList.toggle("dark-mode");
  // document.getElementById("email").style.color = "white";

  if (document.getElementById("mySwitch").checked) {
    document.getElementById("email").style.color = "white";
    // document.getElementsByClassName("icon").style.color = "white";
  } else if (!document.getElementById("mySwitch").checked) {
    document.getElementById("email").style.color = "black";
    // document.getElementsByClassName("icon").style.color = "white";
  }
}
