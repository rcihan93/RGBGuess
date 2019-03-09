
var numSquares=12;
var colors=[];
var pickColor;
var squares=document.querySelectorAll(".square");
var selected=document.getElementById("selected");
var welcome=document.querySelectorAll("#welcome");
var newGame=document.querySelectorAll("#newGame");
var modes=document.querySelectorAll(".mode");
var h1=document.querySelector("h1");
//alert("seçilen renk: "+pickColor);

init();
function init(){
	setupButtons();
	setupSquares();
	reset();
}
function setupSquares(){
	for(var i=0;i<squares.length;i++){	//event listener

	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.background;
		if(clickedColor === pickColor){
			welcome[0].textContent="WELL DONE CORRECT!"
			newGame[0].textContent="TRY AGAIN??";
			h1.style.background=clickedColor;
			correctColor(clickedColor);
		}else{			
			this.style.background="black";
			welcome[0].textContent="TRY AGAIN! ->"+clickedColor;
		}
	});
                     
}
}

function setupButtons(){
	for(var i=0;i<modes.length;i++){
		modes[i].addEventListener("click",function(){
			modes[0].classList.remove("selectedGame");
			modes[1].classList.remove("selectedGame");
			this.classList.add("selectedGame");
			if(this.textContent === "EASY"){
				numSquares=8;
			}
			else{
				numSquares=12;
			}
			reset();
		});
	}
}
newGame[0].addEventListener("click",function(){
	reset();
});
function reset(){
	colors=generateColor(numSquares);
	pickColor=pickedColor();
	selected.textContent=pickColor;
	welcome[0].textContent="WELCOME";
	newGame[0].textContent="NEW GAME";
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.background="black";
		}
	}
	h1.style.background="steelblue";
}
function generateColor(num){
	var colList=[];

	for(var i=0;i<num;i++){
		colList.push(randomColor());
	}
	return colList;
}

function randomColor(){
	// random kırmızı
	var r=Math.floor(Math.random()*255);
	// random yeşil
	var g=Math.floor(Math.random()*255);
	// random mavi
	var b=Math.floor(Math.random()*255);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickedColor(){
	var pick;
	pick=Math.floor(Math.random()*colors.length);
	return colors[pick];
}

function correctColor( color){
	for(var i=0;i<colors.length;i++){
		squares[i].style.background=color;
	}
}