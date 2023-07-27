var randomnumber1 = Math.floor(Math.random()*6)+1;
var randoms1 = "images/dice" + randomnumber1 + ".png";
var randomnumber2 = Math.floor(Math.random()*6)+1;
var randoms2 = "images/dice" + randomnumber2 + ".png";

var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];
img1.setAttribute("src",randoms1);
img2.setAttribute("src",randoms2);


if(randoms1 > randoms2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if(randoms1 < randoms2){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}