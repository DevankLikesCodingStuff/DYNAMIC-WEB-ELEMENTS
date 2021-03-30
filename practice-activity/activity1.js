var score = 0;
function Update(){
    score = score + 1;
    document.getElementById("score").innerHTML="Score = " + score;
}
function SaveScore(){
    localStorage.setItem("score",score);
}
function NextPage(){
    window.location= "activity_2.html"
}