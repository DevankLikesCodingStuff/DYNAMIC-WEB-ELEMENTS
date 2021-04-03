var Player1_name = localStorage.getItem("SaveData1");
console.log(Player1_name);
var Player2_name = localStorage.getItem("SaveData2");
console.log(Player2_name);
var Score1_Player = 0;
var Score2_Player = 0;
document.getElementById("playername1").innerHTML = Player1_name + ":";
document.getElementById("playername2").innerHTML = Player2_name + ":";
document.getElementById("ScorePlayer1").innerHTML = Score1_Player ;
document.getElementById("ScorePlayer2").innerHTML = Score2_Player ;
document.getElementById("PlayerQuestion").innerHTML = "Question turn - " + Player1_name;
document.getElementById("PlayerAnswer").innerHTML = "Answer turn - " + Player2_name;
function Send(){
     get_word = document.getElementById("Word").value;
     word = get_word.toLowerCase();
     console.log(word);
     charAt1 = word.charAt(1);
     console.log(charAt1);
     length1 = Math.floor(word.length/2);
     charAt2 = word.charAt(length1);
     console.log("CharAt2"+charAt2);
     length2 = word.length-1;
     console.log("Length is " + length2);
     charAt3 = word.charAt(length2);
     console.log("CharAt3"+charAt3);
     Remove_charAt1 = word.replace(charAt1,"_");
     Remove_charAt2 = Remove_charAt1.replace(charAt2,"_")
     console.log(Remove_charAt2);
     Remove_charAt3 = Remove_charAt2.replace(charAt3,"_")
     console.log(Remove_charAt3);
     var Question = "<h4 id = 'word_display'> Question." + Remove_charAt3 + "</h4>"
     var Input = "<br> Answer : <input type = 'text' id = 'Input_check_box'> ";
     var CheckButton = "<br> <button type = 'submit' class = 'btn btn-info' onclick = 'check()'> Check </button> ";
     var Final = Question + Input + CheckButton;
     document.getElementById("Output").innerHTML = Final;
     document.getElementById("Word").value = "";
}
var Question_Turn = "Player1";
var Answer_Turn = "Player2";
function check(){
     var AnswerUser = document.getElementById("Input_check_box").value;
     Answer = AnswerUser.toLowerCase();
     if (Answer == word){
          if (Answer_Turn == "Player1") {
                Score1_Player = Score1_Player + 1;
                document.getElementById("ScorePlayer1").innerHTML = Score1_Player;
          }
          else
          {
               Score2_Player = Score2_Player + 1;
               document.getElementById("ScorePlayer2").innerHTML = Score2_Player;
          }
     }
     if (Question_Turn == "Player1"){
          Question_Turn = "Player2" ;
          document.getElementById("PlayerQuestion").innerHTML = "Question turn - " + Player2_name;
     }
     else
     {
          Question_Turn = "Player1"
          document.getElementById("PlayerQuestion").innerHTML = "Question turn - " + Player1_name;
     }
     if ( Answer_Turn == "Player1")
     {
          Answer_Turn = "Player2";
          document.getElementById("PlayerAnswer").innerHTML = "Answer turn - " + Player2_name;
     }
     else
     {
          Answer_Turn = "Player1";
          document.getElementById("PlayerAnswer").innerHTML = "Answer turn - " + Player1_name;
     }
     document.getElementById("Output").innerHTML = "";
     
}