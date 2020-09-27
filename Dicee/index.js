var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
} else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
document.querySelector("img.img1").setAttribute("src", "images/dice" + randomNumber1 + ".png")
document.querySelector("img.img2").setAttribute("src", "images/dice" + randomNumber2 + ".png")
