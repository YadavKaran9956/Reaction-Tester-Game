var start;
var fullName = "";
var playerName = "";
var email = "";
var diff = 0; 

document.getElementById("strtBtn").onclick = () => {
    document.getElementById("intro-wrapper").style.display = "none";
    document.getElementById("info-wrapper").style.display = "flex";
}

document.getElementById("backBtn").onclick = () => {
    document.getElementById("info-wrapper").style.display = "none";
    document.getElementById("intro-wrapper").style.display = "block";
}

document.getElementById("submitBtn").onclick = () => {
    document.getElementById("intro-wrapper").style.display = "none";
    document.getElementById("info-wrapper").style.display = "none";
    fullName = document.getElementById("fullName").value;
    playerName = document.getElementById("playerName").value;
    email = document.getElementById("email").value;
    if(fullName != "" && playerName != "" && email != ""){
        document.getElementById("game-wrapper").style.display = "block";
        // console.log(fullName + " " + playerName + " " + email);
        start = new Date().getTime();
        document.querySelector(".plyrInfo").innerHTML = playerName;
    } else {
        document.getElementById("info-wrapper").style.display = "flex";
        alert("Oops! Please fill in the details first.");
    }
}


document.querySelector(".square").onclick = () => {
    var end = new Date().getTime();
    diff = (end - start) / 1000;
    if(diff != 0) {
        document.querySelector(".gameInfo1").style.display = "inline";
        document.querySelector(".reactionTime").innerHTML = diff + " seconds";
    } 
    move();
    var bckgcolor = generateRandomColor();
    document.querySelector(".square").style.backgroundColor = bckgcolor;
}

function move() {
    var left = Math.random() * 900;
    var right = Math.random() * 900;
    var top = Math.random() * 500;
    var bottom = Math.random() * 500;

    var height = Math.random() * 300 + 20;
    var width = Math.random() * 300 + 20;

    document.querySelector(".square").style.left = left + "px";
    document.querySelector(".square").style.right = right + "px";
    document.querySelector(".square").style.top = top + "px";
    document.querySelector(".square").style.bottom = bottom + "px";

    document.querySelector(".square").style.height = height + "px"
    document.querySelector(".square").style.width = width + "px"

    start = new Date().getTime();
}

function generateRandomColor() {
    let randomNumber = Math.floor(Math.random() * 16777215);
    let hexColor = randomNumber.toString(16);
    hexColor = hexColor.padStart(6, '0');
    return `#${hexColor.toUpperCase()}`;
}

