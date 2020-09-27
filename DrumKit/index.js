document.querySelector(".drum").addEventListener("click", handleClick);
var n = document.querySelectorAll(".drum").length;
for (var i = 0; i < n; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
document.addEventListener("keydown", handleKeyPress);
var keys = ["w", "a", "s", "d", "j", "k", "l"];
function handleClick(){
  var buttonInnerHTML = this.innerHTML;
  if (keys.includes(buttonInnerHTML)){
    makeSound(buttonInnerHTML);
  }
}

function handleKeyPress(){
  if (keys.includes(event.key)){
    makeSound(event.key);
  }
}

function makeSound(key){
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      break;
  }
}
