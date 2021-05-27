var numSquares = 6;
var color = []; 
var pickedColor;
var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
var modebtn = document.querySelectorAll(".modebtn");

init();
function init()
{
	//mode buttons event listener
	for(var i =0; i<modebtn.length; i++)
	{
		modebtn[i].addEventListener("click",function(){
			modebtn[0].classList.remove("select");
			modebtn[1].classList.remove("select"); 
			this.classList.add("select");
			// this.textContent = "Easy" ? numSquares = 3: numSquares=6;
			if(this.textContent==="Easy"){
				numSquares=3;
			}
			else
			{
				numSquares=6;
			}
			reset();
		});
	}
	for(var i = 0; i<square.length; i++)
	{
		
		//add click listener to squares
		square[i].addEventListener("click",function(){
			//grab the clicked color
			var clickedColor = this.style.backgroundColor;
			///check the clicked color with picked color
			if(clickedColor===pickedColor)
			{
				changeColor(clickedColor);
				messageDisplay.textContent = "Correct";
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?";

			}
			else
			{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "try again";
			}

		});
		reset();
}

}

function reset(){
	//generate all new colors
	color = generateRandomColors(numSquares);
	//pick new random color
	pickedColor = pickColor();
	//random color display on h1
	colorDisplay.textContent = pickedColor;
	//set the random color to squares;
	resetButton.textContent ="New Colors";
	messageDisplay.textContent = "";
	for(var i =0; i<square.length; i++)
	{
		if(color[i])
		{
			square[i].style.display="block";			
			square[i].style.backgroundColor = color[i];			
		}
		else
		{
			square[i].style.display="none";
		}

	}
	h1.style.backgroundColor = "steelblue";

}
// easybtn.addEventListener("click", function(){
// 	hardbtn.classList.remove("select");
// 	easybtn.classList.add("select");
// 	numSquares = 3;
// 	color = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i =0 ; i<square.length; i++)
// 	{
// 		if(color[i]){
// 			square[i].style.backgroundColor = color[i];
// 		}else
// 		{
// 			square[i].style.display = "none";
// 		}

// 	}

// });
// hardbtn.addEventListener("click", function(){
// 	hardbtn.classList.add("select");
// 	easybtn.classList.remove("select");
// 	numSquares= 6;
// 	color = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 		for(var i =0 ; i<square.length; i++)
// 	{
// 			square[i].style.backgroundColor = color[i];
// 			square[i].style.display = "block";
// 	}
// });				
resetButton.addEventListener("click",function()
{
	//generate all new colors
	// color = generateRandomColors(numSquares);
	// //pick new random color
	// pickedColor = pickColor();
	// //random color display on h1
	// colorDisplay.textContent = pickedColor;
	// //set the random color to squares;
	// for(var i =0; i<square.length; i++)
	// {
	// 	console.log(color[i])
	// 	square[i].style.backgroundColor = color[i];

	// }
	// h1.style.backgroundColor = "steelblue";
	// this.textContent ="New Colors";
	// messageDisplay.textContent = "";
	reset();


});



function changeColor(color)
{
	for(var i=0; i<square.length;i++)
	{
		square[i].style.backgroundColor = color;
	}
}
function pickColor()
{
	var random = Math.floor(Math.random()*color.length);
	return(color[random]);
}
function generateRandomColors(num)
{
	//define an array of colors
	var arr = []
	//logic to generate colors repeate num times
	for(var i =0;i<num;i++)
	{
		//get random color and push into 
		arr.push(randomColor());
	}
	//return array
	return arr;
}
function randomColor()
{
	//pick "red" from 0- 255
	var r = Math.floor(Math.random()* 256);
	//pick "green" from 0- 255
	var g = Math.floor(Math.random()* 256);
	//pick "blue" from 0- 255
	var b = Math.floor(Math.random()* 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
