function Login(){
   var player1=document.getElementById("player1_name").value;
   var player2=document.getElementById("player2_name").value;
   localStorage.setItem("player 1: ", player1);
   localStorage.setItem("player 2: ", player2);
   window.location.replace("game_page.html");
}