let colors = document.getElementsByClassName("col-md-2");
let newGame = document.getElementById("new");
let rgb = document.getElementById("rgb");
let rgbArray = [];
let matchArray = [];
let colorMatch = 0;
let secondRow = document.querySelectorAll(".secondRow");
let result = document.getElementById("result");
let easy = document.getElementById("easy");
let hard = document.getElementById("hard");
let headerDiv = document.querySelector("div");

//initialize
function init(){
    randomRGB();
    genColors();
}
window.onload = init();

//easy
easy.addEventListener("click", function(){
    for(let i = 0; i < secondRow.length; i++){
        secondRow[i].classList.replace("col-md-2", "hide");
    }
    randomRGB();
    genColors();
})

// hard
hard.addEventListener("click", function(){
    for(let i = 0; i < secondRow.length; i++){
        secondRow[i].classList.replace("hide", "col-md-2");
    }
    randomRGB();
    genColors();
})

//Generates random number to be used for the colors
function random(number){
    return Math.floor(Math.random()*(number+1));  
}

//Generates color array
function randomRGB(){
    for(let i = 0; i < colors.length; i++){
        let rndCol = "rgb("+random(255)+","+random(255)+","+random(255)+")";
        colors[i].style.backgroundColor = rndCol;
        rgbArray.push(rndCol);
    }
    matchArray = rgbArray;
    return matchArray;
}

//Re-starting the game
function genColors(){
    newGame.textContent = ("NEW COLORS");
    result.textContent = ("");
    headerDiv.style.backgroundColor = ("#4682B4");
    rgb.textContent = matchArray[random(colors.length - 1)];
    colorMatch = rgb.innerHTML;
    rgbArray = [];
    for(let i = 0; i<colors.length; i++){
        colors[i].classList.replace("hide", "col-md-2");
    }
    return colorMatch
}

//repopulate new colors click to New 
newGame.addEventListener("click", function(){
    randomRGB();
    genColors();
})

//change color background when correct
function changeBack(){
    for( let i = 0; i < colors.length; i++){
        colors[i].style.backgroundColor = colorMatch;
    }
    newGame.textContent = ("PLAY AGAIN");
    for (let k = 0; k< colors.length; k++){
        colors[k].classList.replace("hide", "col-md-2");
    }
    headerDiv.style.backgroundColor = colorMatch;
}

//function clicking on the squares
for(let i = 0; i < colors.length; i++){
    colors[i].addEventListener("click", function(){
        let colorPicked = matchArray[i];
        if(colorPicked === colorMatch){
            result.textContent = ("Correct");
            changeBack();
        }
        else{
            result.textContent = ("Try Again")
            colors[i].classList.add("hide");
        }
    });
}


