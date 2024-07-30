//constant variables
const howToContainer = document.getElementById("how_to_container");
const letsPlay = document.getElementById("lets_play_container");
const usernameContainer = document.getElementById("username_container");
const quizContainer = document.getElementById("quizes_container");
const greetContainer = document.getElementById("greet_container");
const questionContainer = document.getElementById("qa_container");
const scoreContainer = document.getElementById("score_container");

//button variables
const letsPlayBttn = document.getElementById("lets_play_bttn");
const startBttn = document.getElementById("submit");


function loadWebpage(){
    howToContainer.style.display = "block flex"
    letsPlay.style.display = "block flex"
    usernameContainer.style.display = "none";
    quizContainer.style.display = "none";
    greetContainer.style.display = "none";
    questionContainer.style.display = "none";
    scoreContainer.style.display = "none";
};

letsPlayBttn.addEventListener("click", displayUsername);

//function to display username input
function displayUsername(){
    
    usernameContainer.style.display = "block flex";
    howToContainer.style.display = "none";
    letsPlay.style.display = "none";
};

startBttn.addEventListener("click", submitUsername);

//function to submit username
function submitUsername(){
    let username = document.getElementById("username");
    let usersName = username.value;
    let greet = document.getElementById("greet");
    let userWarning = document.getElementById("userwarning")

    if(usersName.length < 3 || usersName.length >= 9){
        alert("Please follow the instructions regarding your username!");
    }else {
        //inserts a message to the user
        greet.innerHTML = `Hello ${usersName}, lets test your knowledge.`;
        greetContainer.style.display = "block flex";
    /**
     * removes the username container
     * reveals the quiz container
     */
    usernameContainer.style.display ="none";
    quizContainer.style.display = "block flex";
    }
};