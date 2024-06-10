//constant variables
const howToContainer = document.getElementById("how_to_container");
const letsPlay = document.getElementById("lets_play_container");
const usernameContainer = document.getElementById("username_container");
const quizContainer = document.getElementById("quizes_container");
const greetContainer = document.getElementById("greet_container");

usernameContainer.style.display = "none";
quizContainer.style.display = "none";
greetContainer.style.display = "none";

//resets webpage
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
}

/**
 * 
 * GAME FUNCTIONS
 * 
 */

//quiz questions
const questions = [
    {
        question: "Which one of these structures is not apart of the wonders of the ancient world?",
        answer: [
            {text: "The Pyramids of Giza", correct: false},
            {text: "The Hanging Gardens of Babylon", correct: false},
            {text: "The Temple of Artemis", correct: false},
            {text: "The Great Wall of China", correct: true}
        ]
    },
    {
        question: "Which one of these structures represents the King of the Greek Gods?",
        answer: [
            {text: "The Statue of Zues", correct: true},
            {text: "Lighthouse of Alexandria", correct: false},
            {text: "Colossus of Rhoades", correct: false},
            {text: "Mausolem at Halicarnassus", correct: false}
        ] 
    },
    {
        question: "Which one of these structures is located in Turkey?",
        answer: [
            {text: "Mausolem at Halicarnassus", correct: true},
            {text: "Lighthouse of Alexandria", correct: false},
            {text: "Hanging Gardens of Babylon", correct: false},
            {text: "Pyramids of Giza", correct: false}
        ]  
    },
    {
        question: "What century was the Colossus of Rhoades built?",
        answer: [
            {text: "2nd Centure A.D.", correct: false},
            {text: "4th Century B.C.", correct: true},
            {text: "20th Century", correct: false},
            {text: "10th Century A.D.", correct: false}
        ]
    },
    {
        question: "The seven wonders of the ancient world surround which sea?",
        answer: [
            {text: "Atlantic", correct: false},
            {text: "Pacific", correct: false},
            {text: "The Gulf of Mexico", correct: false},
            {text: "The Mediterranian", correct: true}
        ]
    },
    {
        question: "Which one of these modern wonders is located in Brazil?",
        answer: [
            {text: "Taj Mahal", correct: false},
            {text: "Christ the Redeemer", correct: true},
            {text: "Petra", correct: false},
            {text: "Chichen Itza", correct: false}
        ]
    },
    {
        question: "One of these structures was built in 80 A.D., which one was it?",
        answer: [
            {text: "Colosseum", correct: true},
            {text: "Great Wall of China", correct: false},
            {text: "Machu Picchu", correct: false},
            {text: "Taj Mahal", correct: false}
        ]  
    },
    {
        question: "Which one of these structures was built for the architects deceased wife?",
        answer: [
            {text: "Taj Mahal", correct: true},
            {text: "Colossus of Rhoades", correct: false},
            {text: "Christ the redeemer", correct: false},
            {text: "Lighthouse of Alexandria", correct: false}
        ]
       
    },
]

//default variables for tracking score, question number and random questions
let correctScore; 
let incorrectScore; 
let currentQuestion = {}; 
let questionCounter; 
let avaiableQuestions = [];

//variables to display scores, questions and option buttons
const correctScoreCounter = document.getElementById("cScore");
const incorrectScoreCounter = document.getElementById("iScore");
const questionContent = document.getElementById("questions_Content");
const startBttn = document.getElementById("startBttn");
const questionCounterText = document.getElementById("question_counter_text");
const answerBttn = document.getElementsByClassName("option_bttn"); 
const nextBttn = document.getElementById("next_bttn")


const qaContainer = document.getElementById("qa_container");
const scoreContainer = document.getElementById("score_container");
qaContainer.style.display = "none";
scoreContainer.style.display = "none";
//creates array from option buttons
const options = Array.from(document.getElementsByClassName("option_bttn"));
//maximum questions in the quiz
const maxQuestions = 8;

//function to start quiz
function startQuiz(){
    //reveals score and questions containers
    qaContainer.style.display = "block flex";
    scoreContainer.style.display = "block flex";
    //removes start button and greeting container
    startBttn.style.display = "none";
    greetContainer.style.display = "none";

    //sets values for below variables
    questionCounter = 0;
    correctScore = 0;
    incorrectScore = 0;
    avaiableQuestions = [...questions]

    nextBttn.innerHTML ="Submit Answer";

    correctScoreCounter.innerHTML = correctScore;
    incorrectScoreCounter.innerHTML = incorrectScore;

    getNewQuestion();
}

//displays question in element with question_Content id
function getNewQuestion() {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * avaiableQuestions.length);
    currentQuestion = avaiableQuestions[questionIndex];
    questionContent.innerText = currentQuestion.question;

    currentQuestion.answer


}


function checkAnswer(){

}