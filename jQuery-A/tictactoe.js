  var box;
  var symbol = "X";
  var spieler = "Spieler X";

  function markbox(box) {
        
      if (box.value == "     ") {
          box.value = symbol;
          if (symbol == "X") {
              symbol = "O";
          spieler = "Spieler O";
          }
          else{ 
              symbol = "X"; 
          spieler = "Spieler X"; 
          }
      }else{
      alert("Schon besetzt!");
      }
      
      if (winning_condition(box.value)) {
          if (spieler == "Spieler X") {
          spieler = "Spieler O";
          }else{ 
          spieler = "Spieler X";
          }
          alert(spieler + " hat gewonnen!");
          return;
      } else{}
  }
        
  function winning_condition(symbol) {
      if ($("#b0").val() == symbol && $("#b1").val() == symbol && $("#b2").val() == symbol) return true;
      if ($("#b3").val() == symbol && $("#b4").val() == symbol && $("#b5").val() == symbol) return true;
      if ($("#b6").val() == symbol && $("#b7").val() == symbol && $("#b8").val() == symbol) return true;
      if ($("#b0").val() == symbol && $("#b3").val() == symbol && $("#b6").val() == symbol) return true;
      if ($("#b1").val() == symbol && $("#b4").val() == symbol && $("#b7").val() == symbol) return true;
      if ($("#b2").val() == symbol && $("#b5").val() == symbol && $("#b8").val() == symbol) return true;
      if ($("#b0").val() == symbol && $("#b4").val() == symbol && $("#b8").val() == symbol) return true;
      if ($("#b2").val() == symbol && $("#b4").val() == symbol && $("#b6").val() == symbol) return true;
      else return false;
  }

   /* function clear() {
        $("#tab").reset(); 
      
    } */
