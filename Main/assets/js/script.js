///////////////////////////////////
//     Section for Quiz          //
///////////////////////////////////

// variables for quiz
var questionIndex = 0;
var clock = questions.length * 10;
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
    var currentQuestion = questions[questionIndex];
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;
    choicesEl.innerHTML = "";
    currentQuestion.choices.forEach(function(choice, i) {
        var choiceAttr = document.createElement("button");
        choiceAttr.setAttribute("class", "choice");
        choiceAttr.setAttribute("value", choice);
        choiceAttr.textContent = i + 1 + ". " + choice;
        choiceAttr.onclick = questionClick;
        choicesEl.appendChild(choiceAttr);
    });
}

// Checking for answer to question
function questionClick() {
    console.log("questionClick");
    
    //Check to see if answer was wrong
    if (this.value !== questions[questionIndex].answer) 
    {
        //if wrong, penalize the clock
        clock -= 20;
        if (clock < 0) 
        {
            clock = 0;
        }

        clockEl.textContent = clock;
    }

    setTimeout(function() {}, 1000);
    questionIndex++;

    //Check to see if game is over, or move on to next question
    if (questionIndex === questions.length) {
        gameOver();
    } else {
        nextQuestion();
    }
}

// When game is over
function gameOver() {
    var lastScreenEl = document.getElementById("last-screen");
    var finalScoreEl = document.getElementById("final-score");
    console.log("gameOver");
    clearInterval(timer);
    lastScreenEl.removeAttribute("class");
    finalScoreEl.textContent = clock;
    questionsEl.setAttribute("class", "hide");
}

function saveScore() {
    console.log("saveScore");
    var initials = initialsEl.value.trim();
    if (initials !== "") {
        var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
        var newScore = { score: clock, initials: initials};
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));
        window.location.href = "highscores.html";
    }
}

// Button clicks
beginButton.onclick = beginQuiz;
submitButton.onclick = saveScore;

//initialsEl.onkeyup = checkForEnter;


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