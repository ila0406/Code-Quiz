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

// Timer
function clockTimer() {
    console.log("clockTimer");
    clock--;
    clockEl.textContent = clock;
    if (clock <= 0) {
        gameOver();
    }
}

// Begin
function beginQuiz() {
    console.log("begin");
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    timer = setInterval(clockTimer, 1000);
    clockEl.textContent = clock;
    nextQuestion();
}

// Proceed tp the next question in the quiz
function nextQuestion() {
    console.log("next");
}

// Checking for answer to question
function questionClick() {
    console.log("questionClick");
}

function gameOver() {
    console.log("gameOver");
    clearInterval(timer);
    var lastScreenEl = document.getElementById("last-screen");
    lastScreenEl.removeAttribute("class");
    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = clock;
    questionsEl.setAttribute("class", "hide");
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