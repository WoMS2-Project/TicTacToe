var player = "X";
var lock = null;

$( document ).ready(function() {
    console.log( "document ready! ( DOM loaded )" );

    

    $(".btn-field").click(function(){ // will be executed with every click on a game field (button)
      if(lock != null) {
        alert("Dieses Spiel ist beendet - beginne ein Neues!");
      } else if($(this).val() === ""){
        $(this).val(player);
        endRound();
      } else {
        alert("Schon besetzt!");
      }
    });

    $("#clear").click(function(){ // will be executed by a click on clear-button
      clear();
    });

});

// functions

function endRound(){  // checks for a win at the end of each round and switches the player if nobody wins
    checkForWin();
    switch(player) {
        case "X":
            player = "O";
            break;
        case "O":
            player = "X";
            break;
        default:
            alert("We're sorry: Some unexpexted error occoured - Game will reset!");
            clear();
            break;
    }
}  
        
function checkForWin() {  // feed winningCondition with all possible winning combinations
    if (winningCondition("#b0", "#b1", "#b2")) return true;
    if (winningCondition("#b3", "#b4", "#b5")) return true;
    if (winningCondition("#b6", "#b7", "#b8")) return true;
    if (winningCondition("#b0", "#b3", "#b6")) return true;
    if (winningCondition("#b1", "#b4", "#b7")) return true;
    if (winningCondition("#b2", "#b5", "#b8")) return true;
    if (winningCondition("#b0", "#b4", "#b8")) return true;
    if (winningCondition("#b2", "#b4", "#b6")) return true;
    else return false;
}

function winningCondition(a, b, c) { // checks the possible winning combinations for a win of the current player
    if ($(a).val() == player && $(b).val() == player && $(c).val() == player){
      $(a).addClass("mark-green");
      $(b).addClass("mark-green");
      $(c).addClass("mark-green");
      lock = "locked!"; // lockes up the game if a player wins
      alert("Spieler " + player + " gewinnt die Runde!");
      return true;
    } else {
      return false;
    }

}

function clear() { // resets the game
  player = "X";
  for (var i = 0; i <= 8; i++) {
    //clear all fields from #b0 to #b9
    $("#b"+i).val("");        
  }    
  lock = null;
  alert("Alles klar - neue Runde!");
}

