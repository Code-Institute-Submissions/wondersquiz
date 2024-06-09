//variables
const howToContainer = document.getElementById("how_to_container");
const letsPlay = document.getElementById("lets_play_container");
const usernameContainer = document.getElementById("username_container");
const quizContainer = document.getElementById("quizes_container");
const greetContainer = document.getElementById("greet_container");

usernameContainer.style.display = "none";
quizContainer.style.display = "none";
greetContainer.style.display = "none";

//reset webpage
function resetWebpage(){
    let title = document.getElementById("title");

    howToContainer.style.display = "block flex";
    letsPlay.style.display = "block flex";
    usernameContainer.style.display = "none";
    alert("Lets Reset");
}

//function to display username input
function displayUsername(){
    let letsPlayBttn = document.getElementById("lets_play_bttn");
    
    usernameContainer.style.display = "block flex";
    howToContainer.style.display = "none";
    letsPlay.style.display = "none";
}

//function to submit username
function submitUsername(){
    let username = document.getElementById("username");
    let usersName = username.value;
    let usernameSubmit = document.getElementById("submit");
    let greet = document.getElementById("greet");

    if(usersName.length < 3 || usersName.length > 9){
        alert("Please choose a username between 3 and 9 characters");
    } else {
        greet.innerHTML = `Hello ${usersName}, lets test your knowledge.`;
    greetContainer.style.display = "block flex";

    usernameContainer.style.display ="none";
    quizContainer.style.display = "block flex";
    }
}