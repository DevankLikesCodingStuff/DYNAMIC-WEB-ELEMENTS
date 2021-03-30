function GetScore(){
    var Score = localStorage.getItem("score")
    document.getElementById("score").innerHTML= "Score = " + Score;
}
function BackPage(){
    window.location = "activity_1.html"
}
