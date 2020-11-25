function login(){
    player1name=document.getElementById("player1_name").value;
    player2name=document.getElementById("player2_name").value;
    localStorage.setItem("player1key", player1name);
    localStorage.setItem("player2key", player2name);
    window.location="game_page.html";
}
