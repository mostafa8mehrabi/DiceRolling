//get element from html
// let player1Score = document.getElementById("player1Score").innerHTML;
// let player2Score = document.getElementById("player2Score").innerHTML;
let btn = document.getElementById("btn");
let rand_btn = document.getElementById("rand_btn");
let welcomeText = document.getElementById("welcomeText");
let reset = document.getElementById("reset");
let p1 = 0;
let p2 = 0;
let timer = null;

//EventListener
welcomeText.style.display = "block";
/*btn*/
reset.addEventListener("click", reset_);
//manual btn
btn.addEventListener("click", DiceRolling_manual);

//automatic btn
rand_btn.addEventListener("click", DiceRolling_auto);
/*fuctions*/
function DiceRolling() {
  welcomeText.style.display = "none";
  let firstRandomNumber = Math.floor(Math.random() * 6) + 1;
  let firstRandomImage = "images/" + firstRandomNumber + ".jpg";
  //second
  let secondRandomNumber = Math.floor(Math.random() * 6) + 1;
  let secondRandomImage = "images/" + secondRandomNumber + ".jpg";
  //put image in html
  document.querySelectorAll("img")[0].setAttribute("src", firstRandomImage);
  document.getElementById("secondImg").setAttribute("src", secondRandomImage);
  if (firstRandomNumber > secondRandomNumber) {
    p1 += 1;
    document.getElementById("player1Score").innerHTML = p1;
  } else {
    p2 += 1;
    document.getElementById("player2Score").innerHTML = p2;
  }
}
//manual
function DiceRolling_manual() {
  clearTimeout(timer);
  timer = null;
  DiceRolling();
}
//automatic
function DiceRolling_auto() {
  if (timer) {
    return;
  }
  timer = setInterval(() => {
    DiceRolling();
  }, 1000);
}
function reset_() {
  location.reload();
}
