///////////////////////////////////
// Section for Displaying Scores //
///////////////////////////////////

function printScores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    highscores.sort(function(a, b) {
      return b.score - a.score;
    });
  
    highscores.forEach(function(score) {
      var liTag = document.createElement("li");
      liTag.textContent = score.initials + " - " + score.score;
      var olEl = document.getElementById("highscores");
      olEl.appendChild(liTag);
    });
}



// // // run function when page loads
printScores();


// Is this even needed?
function clearScores() {
    console.log("test");
    window.localStorage.clear();
    window.location.reload();
    //window.localStorage.removeItem("highscores");
    //window.location.reload();
}

document.getElementById("clear").onclick = clearScores;



//   clearButton.onclick = clearScores;
  