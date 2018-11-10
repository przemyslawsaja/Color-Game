var numSquares= 6;
var colors = [];
var pickedColor 
var squares = document.querySelectorAll(".square");
var ColorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");//massage "Wrong or u won"
var h1 = document.querySelector("h1");
var restart = document.querySelector("#restartbutton");
var Bgcolor = "#232323";
var modeButtons = document.querySelectorAll(".mode")
var entry = document.querySelector(".Entry")

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupSquares(){
	//SQUERS LISTINERS
	for(var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor
			//compare color to picked Color
		if (this.style.backgroundColor === pickedColor) {
			//WHEN USER GUESS CORRETLY
				messageDisplay.textContent= "Correct!"
				changeColors(clickedColor);
				entry.style.backgroundColor = clickedColor;
				restart.textContent = "Play again?";
			} else {
			//WHEN USER GUESS WRONG
				this.style.backgroundColor = Bgcolor;
				messageDisplay.textContent= "Try Again!"
			}
		})
	}
}

function setupModeButtons(){
		//MODE BUTTONS LISTINERS - EASY || HARD 
	for (var i=0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected")
			modeButtons[1].classList.remove("selected")
			this.classList.add("selected")
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		})
	}
}

function reset(){
		colors = generateRandomColors(numSquares)
		//pick new random color from array that will be a solution to win
		pickedColor = pickColor();
		//change color display to match picked color
		colorDisplay.textContent = pickedColor;
		//change colors of squares
		restart.textContent = "New Colors"
		messageDisplay.textContent="";
		entry.style.backgroundColor = "steelblue";
		//change colors of squares
		for(var i = 0; i < squares.length; i++) {
			//IF THERE IS A COLOR
			if (colors[i]) {
				squares[i].style.display = "block";
				squares[i].style.backgroundColor = colors[i];
			} else {
				squares[i].style.display = "none"
			}
		}	
}	

restart.addEventListener("click", function(){
	reset();
})

//IF PLAYER WINS, FUNCTION CHANGING COLOR OF EVRY SQUARE TO CORRECT ONE
function changeColors(color){
	for(i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

//RANDOM COLOR FROM ARRAY
function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random]
}

function generateRandomColors(num){
	var arr = []
	// repeat num times
	for(var i =0; i < num; i++) {
		arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	return "rgb(" + r +", " + g + ", " + b + ")"
}
