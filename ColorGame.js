//Array that contains n randomly generated colors.
var numSquares = 6;
colors = colorGenerator(numSquares);
var h1 = document.querySelector("h1");
var pickedColor = pickColor(colors);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy")
var hardButton = document.querySelector("#hard")
hardButton.classList.add("selected");


//Button that resets the game when clicked.
resetButton.addEventListener("click",function(){
	colors = colorGenerator(numSquares);
	//pick a new random color from array
	pickedColor = pickColor(colors);
	//Change color display to match picked color
	h1.style.backgroundColor = "steelblue";
	colorDisplay.textContent = pickedColor; 
	messageDisplay.textContent = "";

	//change colors of squares
	for(var i=0;i<squares.length;i++)
		squares[i].style.backgroundColor = colors[i];
});

//Changes the game to easy mode where there all only 3 available squares to pick from.
easyButton.addEventListener("click",function(){
	hardButton.classList.remove("selected");
	this.classList.add("selected");
	numSquares = 3;
	colors = colorGenerator(numSquares);
	pickedColor = pickColor(colors);
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];}
		else{
			squares[i].style.display = "none"}
	}
});

hardButton.addEventListener("click",function(){
	easyButton.classList.remove("selected");
	this.classList.add("selected");
	numSquares = 6;
	colors = colorGenerator(numSquares);
	pickedColor = pickColor(colors);
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.display = "block"
		squares[i].style.backgroundColor = colors[i];
	}
});

//Adds colors to squares and checks if correct square is selected.
for(var i=0;i<squares.length;i++){
	
	//Add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//Change color of each square on click
	squares[i].addEventListener("click",function(){
		
		var clickedColor = this.style.backgroundColor;
		if(clickedColor==pickedColor){
			messageDisplay.textContent ="Correct!";
			resetButton.textContent = "Play Again!";
			changeColors(clickedColor)
			h1.style.backgroundColor=clickedColor;
		}

		else{
			messageDisplay.textContent = "Try Again!";
			this.style.backgroundColor = "#232323";
			
		}
	});
}

//Changes all color of all the squares to the correctly picked color.
function changeColors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = color;}
}

//Assigns variables r,g,b each a random value from 0 to 255. Retuns a string representing an rgb color in the form "rgb(r_value,g_value,b_value)".
function rgbGenerator(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var color = "rgb("+ r +", " + g + ", " + b + ")";
	return color
}

function colorGenerator(numOfColors){
	//Creates a list of n colors each in the form of "rgb(r_value,g_value,b_value)"
	colors = [];
	for(var j=0;j<numOfColors;j++){	
		colors.push(rgbGenerator());
	}
	return colors
}

//Chooses a random color from the list of randomly generated colors, to be the goal color.
function pickColor(colorsList){
	randomIndexPosition = Math.floor(Math.random() * colorsList.length);
	pickedColor = colorsList[randomIndexPosition];
	return pickedColor
}