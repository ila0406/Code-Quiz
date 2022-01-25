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
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    timer = setInterval(clockTimer, 10);
    clockEl.textContent = clock;
    nextQuestion();
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
    clock--;
    clockEl.textContent = clock;
    if (clock <= 0) {
        gameOver();
    }
}

function saveScore() {
    console.log("saveScore");
}

function returnPressed(event) {
    console.log("pressedReturn");
}

// Button clicks
beginButton.onclick = beginQuiz;

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