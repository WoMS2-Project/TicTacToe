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
        if (document.getElementById("b0").value == symbol && document.getElementById("b1").value == symbol && document.getElementById("b2").value == symbol) return true;
       if (document.getElementById("b3").value == symbol && document.getElementById("b4").value == symbol && document.getElementById("b5").value == symbol) return true;
       if (document.getElementById("b6").value == symbol && document.getElementById("b7").value == symbol && document.getElementById("b8").value == symbol) return true;
       if (document.getElementById("b0").value == symbol && document.getElementById("b3").value == symbol && document.getElementById("b6").value == symbol) return true;
       if (document.getElementById("b1").value == symbol && document.getElementById("b4").value == symbol && document.getElementById("b7").value == symbol) return true;
       if (document.getElementById("b2").value == symbol && document.getElementById("b5").value == symbol && document.getElementById("b8").value == symbol) return true;
       if (document.getElementById("b0").value == symbol && document.getElementById("b4").value == symbol && document.getElementById("b8").value == symbol) return true;
       if (document.getElementById("b2").value == symbol && document.getElementById("b4").value == symbol && document.getElementById("b6").value == symbol) return true;
        else return false;
    }

   /* function clear() {
        document.getElementById("tab").reset(); 
      
    } */
