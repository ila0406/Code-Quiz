///////////////////////////////////
//     Section for Quiz          //
///////////////////////////////////

// variables for quiz
var questionIndex = 0;
var clock = questions.length * 15;
var timer;

// variables for DOM elements
var clockEl = document.getElementById("clock");
var beginButton = document.getElementById("begin");
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("multiple-choice");
var initialsEl = document.getElementById("initials");
var submitButton = document.getElementById("submit");

function beginQuiz() {
    console.log("begin");
}

function nextQuestion() {
    console.log("next");
}

function questionClick() {
    console.log("questionClick");
}

function gameOver() {
    console.log("gameOver");
}

function clockTimer() {
    console.log("clockTimer");
}

function saveScore() {
    console.log("saveScore");
}

function returnPressed(event) {
    console.log("pressedReturn");
}

// Button clicks


///////////////////////////////////
// Section for Displaying Scores //
///////////////////////////////////

function printScores() {
  // declare variables
  // sort scores
  // output scores
}

function clearScores() {
  //empty local storage
}

// getElementById


// run function when page loads
printScores();