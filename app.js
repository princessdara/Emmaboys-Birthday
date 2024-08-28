var randomNumber = document.getElementById("Number");
var usertext = document.getElementById("text");
var resulttext = document.getElementById("result");
var button = document.getElementById("butt");
var prize = document.getElementById("prize");
resulttext.style.display = "none";
var timeLeft = 10;
var myVar;






function timer() {
    
    if (timeLeft == 0) {
        clearTimeout(myVar);
        document.getElementById("count").innerHTML = "";
        win();
      } else {
        document.getElementById("count").innerHTML = timeLeft;
        timeLeft--;
      }
    
}


function guess() {
    var randomDigits = Math.round(Math.random() * 5);
        randomNumber.innerHTML = randomDigits;
    if (usertext.value == "") {
        alert("Please Enter a Guess Number");
    } else if (usertext.value > 5 ) {
        alert("Please enter a number not greater than  5");
        randomNumber.innerHTML = "";
    } else
    {
        
        if (usertext.value == randomNumber.innerHTML) {
            alert("You Guessed Right");
            document.getElementById("game").style.display = "none";
            myVar = setInterval(timer, 1000);
        }
       
    }

    usertext.value = "";
}


function win() {
    
    resulttext.style.display = "blank";

    var tID = setTimeout(function () {
        window.location("download.jpg");
        window.clearTimeout(tID);		// clear time out.
    }, 10000);
    
    
    
}
