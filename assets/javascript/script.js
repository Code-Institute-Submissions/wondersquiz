//variable
const howToContainer = document.getElementById("how_to_container");
const letsPlay = document.getElementById("lets_play_container");
const usernameContainer = document.getElementById("username_container");
const quizContainer = document.getElementById("quizes_container");
const qaContainer = document.getElementById("qa_container");
const scoreContainer = document.getElementById("score_container");

usernameContainer.style.display = "none";
quizContainer.style.display = "none";
qaContainer.style.display = "none";
scoreContainer.style.display = "none";

//function to display username input
function displayUsername(){
    let letsPlayBttn = document.getElementById("lets_play_bttn");
    usernameContainer.style.display = "block flex";
    howToContainer.style.display = "none";
    letsPlay.style.display = "none";
}

//function to submit username
function submitUsername(){
}

//ancient wonders quiz
function ancientWonders(){

}

//modern wonders quiz
function modernWonders(){

}

//increment correct score function
function correctScore(){

}

//increment incorrect score
function incorrectScore(){

}

// display final score
function displayScore(){

}