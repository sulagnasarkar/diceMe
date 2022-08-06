//for player 1
var randomNumber1 = Math.floor((Math.random()*6)+1); //generating random number from 1 to 6
var randomimg1 = "dice"+randomNumber1+".png"; // generating dice<1-6>.png
var randomimgsrc1 = "images/"+randomimg1; //generating images/dice<1-6>.png
document.querySelector(".img1").setAttribute("src", randomimgsrc1); //changing images based on number

//for player 2 repeating the same code
var randomNumber2 = Math.floor((Math.random()*6)+1);
var randomimg2 = "dice"+randomNumber2+".png";
var randomimgsrc2 = "images/"+randomimg2;
document.querySelector(".img2").setAttribute("src", randomimgsrc2);

//h1 tag change based on random numbers
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
