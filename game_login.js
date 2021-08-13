function addUser() {
    player1_name = document.getElementById("player_one_id").value;
    player2_name = document.getElementById("player_two_id").value;
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
   window.location = "game_page.html"; 
}