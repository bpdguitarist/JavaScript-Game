//Edgar Esparza 03/20/16

var username = window.prompt("Please enter your name");

document.write("<p>This is the end, " + username + "! Refresh to play again! </p> ");

document.getElementById("playergreeting").innerHTML = "Hi there " + username +"!";

window.alert("You get 10 points for each correct answer, and get 0 for incorrect answers!")

var score = 0;
document.getElementById("totalscore").innerHTML = "Score = " + score;

createEventListeners();
//function that checks if question is correct. And gives user correct feedback and styles the div accordingly
function question1() {
  var correct = document.getElementById("q1r2").checked;
	if (correct) {
		document.getElementById("feedback1").innerHTML = username + ", that is correct!";
		score = score + 10;
		document.getElementById("totalscore").innerHTML = "Score = " + score;
    document.getElementById("question1").style.backgroundColor = "#70C1B3";
		}
		else {
		document.getElementById("feedback1").innerHTML =" That is incorrect! Try again!";
    document.getElementById("question1").style.backgroundColor = "#FF1654";
		}
}
//function that checks if question is correct. And gives user correct feedback and styles the div accordingly
function question2() {
  var correct = document.getElementById("q2r3").checked;
	if (correct) {
		document.getElementById("feedback2").innerHTML = username + ", that is correct!";
		score = score + 10;
		document.getElementById("totalscore").innerHTML = "Score = " + score;
    document.getElementById("question2").style.backgroundColor = "#70C1B3";
		}
		else {
		document.getElementById("feedback2").innerHTML =" That is incorrect! Try again!";
    document.getElementById("question2").style.backgroundColor = "#FF1654";
		}
}
//function that checks if question is correct. And gives user correct feedback and styles the div accordingly
function question3() {
  var correct = document.getElementById("q3r2").checked;
	if (correct) {
		document.getElementById("feedback3").innerHTML = username + ", that is correct!";
		score = score + 10;
		document.getElementById("totalscore").innerHTML = "Score = " + score;
    document.getElementById("question3").style.backgroundColor = "#70C1B3";
		}
		else {
		document.getElementById("feedback3").innerHTML =" That is incorrect! Try again!";
    document.getElementById("question3").style.backgroundColor = "#FF1654";
		}
}
//function that checks if question is correct. And gives user correct feedback and styles the div accordingly
function question4() {
  var correct = document.getElementById("q4r1").checked;
	if (correct) {
		document.getElementById("feedback4").innerHTML = username + ", that is correct!";
		score = score + 10;
		document.getElementById("totalscore").innerHTML = "Score = " + score;
    document.getElementById("question4").style.backgroundColor = "#70C1B3";
		}
		else {
		document.getElementById("feedback4").innerHTML =" That is incorrect! Try again!";
    document.getElementById("question4").style.backgroundColor = "#FF1654";
		}
}
//function that checks if question is correct. And gives user correct feedback and styles the div accordingly
function question5() {
  var correct = document.getElementById("q5r3").checked;
	if (correct) {
		document.getElementById("feedback5").innerHTML = username + ", that is correct!";
		score = score + 10;
		document.getElementById("totalscore").innerHTML = "Score = " + score;
    document.getElementById("question5").style.backgroundColor = "#70C1B3";
		}
		else {
		document.getElementById("feedback5").innerHTML =" That is incorrect! Try again!";
    document.getElementById("question5").style.backgroundColor = "#FF1654";
		}
}
//function that checks if question is correct. And gives user correct feedback and styles the div accordingly
function question6() {
  var correct = document.getElementById("q6r3").checked;
	if (correct) {
		document.getElementById("feedback6").innerHTML = username + ", that is correct!";
		score = score + 10;
		document.getElementById("totalscore").innerHTML = "Score = " + score;
    document.getElementById("question6").style.backgroundColor = "#70C1B3";
		}
		else {
		document.getElementById("feedback6").innerHTML =" That is incorrect! Try again!";
    document.getElementById("question6").style.backgroundColor = "#FF1654";
		}
}
//function that checks if question is correct. And gives user correct feedback and styles the div accordingly
function question7() {
  var correct = document.getElementById("q7r2").checked;
	if (correct) {
		document.getElementById("feedback7").innerHTML = username + ", that is correct!";
		score = score + 10;
		document.getElementById("totalscore").innerHTML = "Score = " + score;
    document.getElementById("question7").style.backgroundColor = "#70C1B3";
		}
		else {
		document.getElementById("feedback7").innerHTML =" That is incorrect! Try again!";
    document.getElementById("question7").style.backgroundColor = "#FF1654";
		}
}
//function that checks if question is correct. And gives user correct feedback and styles the div accordingly
function question8() {
  var correct = document.getElementById("q8r2").checked;
	if (correct) {
		document.getElementById("feedback8").innerHTML = username + ", that is correct!";
		score = score + 10;
		document.getElementById("totalscore").innerHTML = "Score = " + score;
    document.getElementById("question8").style.backgroundColor = "#70C1B3";
		}
		else {
		document.getElementById("feedback8").innerHTML =" That is incorrect! Try again!";
    document.getElementById("question8").style.backgroundColor = "#FF1654";
		}
}
//function that checks if question is correct. And gives user correct feedback and styles the div accordingly
function question9() {
  var correct = document.getElementById("q9r2").checked;
	if (correct) {
		document.getElementById("feedback9").innerHTML = username + ", that is correct!";
		score = score + 10;
		document.getElementById("totalscore").innerHTML = "Score = " + score;
    document.getElementById("question9").style.backgroundColor = "#70C1B3";
		}
		else {
		document.getElementById("feedback9").innerHTML =" That is incorrect! Try again!";
    document.getElementById("question9").style.backgroundColor = "#FF1654";
		}
}
//function that checks if question is correct. And gives user correct feedback and styles the div accordingly
function question10() {
  var correct = document.getElementById("q10r3").checked;
	if (correct) {
		document.getElementById("feedback10").innerHTML = username + ", that is correct! It was written by the one and only Prince!";
		score = score + 10;
		document.getElementById("totalscore").innerHTML = "Score = " + score;
    document.querySelector(".question10").style.backgroundColor = "#513B56";
		}
		else {
		document.getElementById("feedback10").innerHTML = "That is incorrect! How could you think anyone other than Prince wrote that!";
    document.querySelector(".question10").style.backgroundColor = "#513B56";
  }
}
function question11(){
//array for of all Prince's number one hits
var hits = ["When Doves Cry", " Kiss", " Let's Go Crazy", " Cream", " and Batdance"];
var useranswer = document.getElementById("q11").value;
if (useranswer == 5){
  document.getElementById("feedback11").innerHTML = username + ", that is correct! Prince had : " + hits;
  score = score + 10;
  document.getElementById("totalscore").innerHTML = "Score = " + score;
  document.querySelector("#outerwrapper").style.backgroundColor = "#513B56";

}else {
  document.getElementById("feedback11").innerHTML = "That is incorrect! Prince had: " + hits;
  document.querySelector("#outerwrapper").style.backgroundColor = "#513B56";
}

}
function question12(){
var useranswer = document.getElementById("q12").value;
if (useranswer == 30) {
    document.getElementById("feedback12").innerHTML = username + ", that is correct!";
    score = score + 10;
    document.getElementById("totalscore").innerHTML = "Score = " + score;
    document.getElementById("question12").style.backgroundColor = "#70C1B3";
  } else {
    document.getElementById("feedback12").innerHTML = "That is incorrect!";
    document.getElementById("question12").style.backgroundColor = "#FF1654";
  }
}

function question13(){
		  var text;
	  	var movies = document.getElementById("q13").value;

		switch(movies) {
		    case "Fight Club":
		    	text = "Do not talk about Fight Club!";
		    	score = score + 10;
				document.getElementById("totalscore").innerHTML = "Score = " + score;
		      	break;
		    case "Back To The Future II":
		      	text = "Where we're going we don't need roads!";
		      	score = score + 10;
				document.getElementById("totalscore").innerHTML = "Score = " + score;
		      	break;
		    case "Old School":
		      	text = "You're my boy, Blue!";
				document.getElementById("totalscore").innerHTML = "Score = " + score;
            break;
        case "The Godfather":
    		    text = "I'm gonna make him an offer he can't refuse.";
    		document.getElementById("totalscore").innerHTML = "Score = " + score;
            break;
        case "The Godfather":
        		text = "I'm gonna make him an offer he can't refuse.";
        document.getElementById("totalscore").innerHTML = "Score = " + score;
            break;
        default:
		      	text = "Your taste in movies is terrible! You should be ashamed!";
		      	score = score - 120;
				document.getElementById("totalscore").innerHTML = "Score = " + score;
		  }
    document.getElementById("feedback13").innerHTML = text;
		console.log (text);
    window.scrollTo(0, 10);
    //document.getElementById("totalscore").getElementsByTagName("h2")[0].style.backgroundColor = "#fff";
}

//creates event listener
function createEventListeners() {
  document.getElementById("button1").addEventListener("click", question1, false);
  document.getElementById("button2").addEventListener("click", question2, false);
  document.getElementById("button3").addEventListener("click", question3, false);
  document.getElementById("button4").addEventListener("click", question4, false);
  document.getElementById("button5").addEventListener("click", question5, false);
  document.getElementById("button6").addEventListener("click", question6, false);
  document.getElementById("button7").addEventListener("click", question7, false);
  document.getElementById("button8").addEventListener("click", question8, false);
  document.getElementById("button9").addEventListener("click", question9, false);
  document.getElementById("button10").addEventListener("click", question10, false);
  document.getElementById("button11").addEventListener("click", question11, false);
  document.getElementById("button12").addEventListener("click", question12, false);
  document.getElementById("button13").addEventListener("click", question13, false);
}
