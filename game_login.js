function SumbitBtn(){
    var player1 = document.getElementById("player1_name").value;
    var player2 = document.getElementById("player2_name").value;
    localStorage.setItem("SaveData1", player1);
    localStorage.setItem("SaveData2",player2);
    window.location="game_page.html"
}