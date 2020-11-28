var player1_name=localStorage.getItem("player1key");
var player2_name=localStorage.getItem("player2key");
var player1_score=0;
var player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="question_turn:"+player1_name;
document.getElementById("player_answer").innerHTML="answer_turn:"+player2_name;
function send(){
    getword=document.getElementById("word").value;
    word=getword.toLowerCase();
    console.log(word);
    char1=word.charAt(1);
    console.log(char1);
    positionto=Math.floor(word.length/2);
    char2=word.charAt(positionto);
    console.log(char2);
    char3=word.charAt(word.length-1);
    console.log(char3);
    underline1=word.replace(char1,"_");
    underline2=underline1.replace(char2,"_");
    underline3=underline2.replace(char3,"_");
    console.log(underline3);
}