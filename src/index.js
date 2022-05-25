import "./styles.css";

function generateRandomColor() {
  var maxVal = 0xffffff;
  var randomNumber = Math.floor(Math.random() * maxVal);
  randomNumber = randomNumber.toString(16);
  var randomColor = randomNumber.padStart(6, 0);

  return "#" + randomColor.toUpperCase();
}

function changeColor() {
  var back = document.getElementById("back");
  back.style.backgroundColor = generateRandomColor();
}

var colorButton = document.getElementById("change-color");

colorButton.addEventListener("click", changeColor);
