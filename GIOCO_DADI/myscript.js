alert("Giocatore 1: Lancia primo dado!");
var player1_lancio1 = Math.floor(1+(Math.random()*6));
alert("Hai fatto " + player1_lancio1 + "!");

alert("Giocatore 1: Lancia secondo dado!");
var player1_lancio2 = Math.floor(1+(Math.random()*6));
alert("Hai fatto " + player1_lancio2 + "!");

tot_player1 = player1_lancio1 + player1_lancio2;


alert("Giocatore 2: Lancia primo dado!");
var player2_lancio1 = Math.floor(1+(Math.random()*6));
alert("Hai fatto " + player2_lancio1 + "!");

alert("Giocatore 2: Lancia secondo dado!");
var player2_lancio2 = Math.floor(1+(Math.random()*6));
alert("Hai fatto " + player2_lancio2 + "!");

tot_player2 = player2_lancio1 + player2_lancio2;


if (tot_player1 > tot_player2) {
  alert(tot_player1 + " a " + tot_player2 + "! Vince il player 1!");
} else if (tot_player1 == tot_player2) {
  alert(tot_player1 + " a " + tot_player2 + "! Siete pari!");
} else if (tot_player1 < tot_player2){
  alert(tot_player1 + " a " + tot_player2 + "! Vince il player 2!");
}
