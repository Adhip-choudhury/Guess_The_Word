var player1=localStorage.getItem("player 1: ");
var player2=localStorage.getItem("player 2: ");
var player1_scro=0;
var player2_scro=0;
var Q_turn=player1;
var A_turn=player2;
var lowercase_word="";

document.getElementById("player_1_name").innerHTML=player1+" : ";
document.getElementById("player_1_scr").innerHTML=player1_scro;

document.getElementById("player_2_name").innerHTML=player2+" : ";
document.getElementById("player_2_scr").innerHTML=player2_scro;

document.getElementById("player_Q").innerHTML="Question turn - "+player1;
document.getElementById("player_A").innerHTML="Answer turn - "+player2;

function Send(){
    document.getElementById("empty").innerHTML="";
    var word=document.getElementById("word").value;
    lowercase_word=word.toLowerCase();
    console.log(lowercase_word);
    
    var char_At_1=lowercase_word.charAt(1);
    var length_divide_by_2=Math.floor(lowercase_word.length/2);
    var char_At_2=lowercase_word.charAt(length_divide_by_2);
    var char_At_3=lowercase_word.charAt(lowercase_word.length-1)
    console.log("char at 1- "+char_At_1+" , char at 2- "+char_At_2+" , char at 3- "+char_At_3);
    var romoved1=lowercase_word.replace(char_At_1,"_");
    var romoved2=romoved1.replace(char_At_2,"_");
    var removed3=romoved2.replace(char_At_3,"_");
    var Question="<h4 id='word_Dasplay'>Q. "+removed3+"</h4>";
    var input_box="<br><br>Answer: <input type='text' id='input_box'>";
    var check="<br><br><button class='btn btn-info' onclick='check()'>Check</button> ";
    var row=Question+input_box+check;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

function check(){
    var Answer=document.getElementById("input_box").value;
    var lowercase_word_anwer=Answer.toLowerCase();
    console.log("Answer in lowercase: "+Answer);
    if (lowercase_word==lowercase_word_anwer){
        var correct="<p id='correct' style='color:green'>Correct</p>";
        document.getElementById("empty").innerHTML=correct;
        if (A_turn==player1){
            player1_scro=player1_scro+1;
            document.getElementById("player_1_scr").innerHTML=player1_scro;
            document.getElementById("output").innerHTML=correct;
        }
        else {
            player2_scro=player2_scro+1;
            document.getElementById("player_2_scr").innerHTML=player2_scro;
        }
    }
    

    if (Q_turn==player1){
        Q_turn=player2;
        document.getElementById("player_Q").innerHTML="Question turn - "+player2;
    }
    else{
        Q_turn=player1;
        document.getElementById("player_Q").innerHTML="Question turn - "+player1;
    }

    if (A_turn==player1){
        A_turn=player2;
        document.getElementById("player_A").innerHTML="Answer turn - "+player2;
    }
    else{
        A_turn=player1;
        document.getElementById("player_A").innerHTML="Answer turn - "+player1;
    }
    document.getElementById("output").innerHTML="";

}