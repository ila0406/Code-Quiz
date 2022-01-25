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
var clearButton = document.getElementById("clear");

// Controls the clock
function clockTimer() {
    console.log("clockTimer");
    clock--;
    clockEl.textContent = clock;
    if (clock <= 0) {
        gameOver();
    }
}

// Controls begining of the Quiz
function beginQuiz() {
    console.log("begin");
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    timer = setInterval(clockTimer, 1000);
    clockEl.textContent = clock;
    nextQuestion();
}

// Controls the questions given in the Quiz
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

// Checking the answer after multi-choice option is selected
function questionClick() {  
    // Checks to see if answer was wrong
    if (this.value !== questions[questionIndex].answer) {
        console.log("Wrong");
        // If wrong, penalize the clock
        clock -= 20;
        if (clock < 0) 
        {
            clock = 0;
        }

        clockEl.textContent = clock;
    }
    else    {
        console.log("Correct");
    }

    setTimeout(function() {}, 1000);
    // Move to the next question in the quiz by incrementing the index
    questionIndex++;

    //Check to see if game is over, or move on to next question
    if (questionIndex === questions.length) {
        gameOver();
    } else {
        nextQuestion();
    }
}

// What to do when game is over
function gameOver() {
    var lastScreenEl = document.getElementById("last-screen");
    var finalScoreEl = document.getElementById("final-score");
    console.log("gameOver");
    clearInterval(timer);
    lastScreenEl.removeAttribute("class");
    finalScoreEl.textContent = clock;
    questionsEl.setAttribute("class", "hide");
}

// Saves the scores to local storage until user clears
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

  

/// Question for Tutor. Why couldn't I have these functions in the main JS?

///////////////////////////////////
// Section for Displaying Scores //
///////////////////////////////////

// function printScores() {
//     var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
//     highscores.sort(function(a, b) {
//       return b.score - a.score;
//     });
  
//     highscores.forEach(function(score) {
//       var liTag = document.createElement("li");
//       liTag.textContent = score.initials + " - " + score.score;
//       var olEl = document.getElementById("highscores");
//       olEl.appendChild(liTag);
//     });
// }


// run function when page loads
// printScores();


// Is this even needed?
// function clearScores() {
//     console.log("test");
//     window.localStorage.clear();
//     localStorage.clear();
//     //window.localStorage.removeItem("highscores");
//     //window.location.reload();
// }

//   clearButton.onclick = clearScores;  