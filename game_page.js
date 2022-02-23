player1name = localStorage.getItem("player_1_name");
player2name = localStorage.getItem("player_2_name");
player1score = 0;
player2score = 0;
document.getElementById("player1_name").innerHTML= player1name+":";
document.getElementById("player2_name").innerHTML= player2name+":";

document.getElementById("player1_score").innerHTML=player1score;
document.getElementById("player2_score").innerHTML=player2score;

document.getElementById("player_question").innerHTML = "Question turn =" + player1name;
document.getElementById("player_answer").innerHTML = "Answer turn =" + player2name;

function send(){
    no_2 = document.getElementById("Number_two").value;
    no_1 = document.getElementById("Number_one").value; 
    actual_answer =parseInt(no_1) * parseInt(no_2);
    question_number = "<h4>" + no_1 + " X "+ no_2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("Number_one").value = "";
    document.getElementById("Number_two").value = "";
}
    
    

question_turn = "player1";
answer_turn= "player2";
function check(){
get_answer=document.getElementById("input_check_box").value;
if (get_answer == actual_answer){
    if(answer_turn == "player1"){
        player1score = player1score+1;
        document.getElementById("player1_score").innerHTML = player1score;
    }
    else{
        player2score = player2score+1;
        document.getElementById("player2_score").innerHTML = player2score;

    }
}
if(question_turn == "player1"){
    question_turn = "player2"
    document.getElementById("player_question").innerHTML = "question turn is" + player2name;
}
else{
    question_turn = "player1"
    document.getElementById("player_question").innerHTML = "question turn is" + player1name;
}
if(answer_turn == "player1"){ 
    answer_turn = "player2"
    document.getElementById("player_answer").innerHTML = "Answer turn is" + player2name;
}
else{
    answer_turn = "player1"
    document.getElementById("player_answer").innerHTML = "Answer turn is" + player1name;
}
document.getElementById("output").innerHTML = "";
}
