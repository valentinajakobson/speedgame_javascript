//assign button elements in the array

let buttons = [
document.getElementById("0"),
document.getElementById("1"),
document.getElementById("2"),
document.getElementById("3")
];

//add event handler for buttons

buttons[0].onclick = function() {clicked(0)};
buttons[1].onclick = function() {clicked(1)};
buttons[2].onclick = function() {clicked(2)};
buttons[3].onclick = function() {clicked(3)};


let current = 0; //current active button
let score = 0; //score
let pace = 1500; //speed


//function to show which circle was "clicked" in console log using indexes
function clicked(i){
  console.log('clicked:', i);
  if (i !== current) {
    console.log('ups!'); //wrong circle clicked
    gameOver();
  } else {
    score++; // counting the score
    pace = pace - 10; // pace shorter -> making "circles" move faster
    document.getElementById('score').innerHTML = score;
  }
}

function getRndInteger(min,max) { //each time comes different circle, not doubled
  return Math.floor(Math.random() * (max - min)) + min;
}

function startNext() { //function for changing circles colors
  let next = startGame(current);

buttons[current].style.backgroundColor = "grey"; //changing styles
buttons[next].style.backgroundColor = "#4286f4";

current = next; //making them equal to make startGame function work correctly
console.log("Current", current);
timer = setTimeout(startNext, pace); //after each pace time setTimeout function will call startNext function

function startGame(previous) { //function chooses next index to be shown
  let next = getRndInteger(0,3);  //chooses index (0-3)

if (next != previous){ //if next != previous -> call next again (chooses index)
  return next;
} else { //if next = previous -> call startGame function
  return startGame(previous);
}
}
}

function gameOver(){ //when wrong c circle clicked -> function for game over pops up window
  clearTimeout(timer); //and stops timer, so circle change stops
  for (let i = 0; i < 4; i++){
    buttons[i].style.backgroundColor = "red"; // all circles become red
    buttons[i].onclick = null;
  }
  let overlay = document.getElementById('result');
  let gameover = document.getElementById ('finalscore');
  overlay.style.visibility = 'visible';
  gameover.innerHTML = score; //shows finalscore

}
