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
const submitBttn = document.getElementById("submit");
const startBttn = document.getElementById("startBttn");

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

submitBttn.addEventListener("click", submitUsername);

//function to submit username
function submitUsername(){
    let username = document.getElementById("username");
    let usersName = username.value;
    let greet = document.getElementById("greet");

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

/**
 * 
 * GAME FUNCTIONS
 * 
 */

//quiz questions
const questions = [
    {
        question: "Which one of these structures is not apart of the wonders of the ancient world?",
        choice1: "The Pyramids of Giza",
        choice2: "The Hanging Gardens of Babylon",
        choice3: "The Temple of Artemis",
        choice4: "The Great Wall of China",
        answer: 4
    },
    {
        question: "Which one of these structures represents the King of the Greek Gods?",
        choice1: "The Statue of Zues",
        choice2: "Lighthouse of Alexandria",
        choice3: "Colossus of Rhoades",
        choice4: "Mausolem at Halicarnassus",
        answer: 1
    },
    {
        question: "Which one of these structures is located in Turkey?",  
        choice1: "Mausolem at Halicarnassus",
        choice2: "Lighthouse of Alexandria",
        choice3: "Hanging Gardens of Babylon",
        choice4: "Pyramids of Giza",
        answer: 1
    },
    {
        question: "What century was the Colossus of Rhoades built?",
        choice1: "2nd Centure A.D.",
        choice2: "4th Century B.C.",
        choice3: "20th Century",
        choice4: "10th Century A.D.",
        answer: 2
    },
    {
        question: "The seven wonders of the ancient world surround which sea?",
        choice1: "Atlantic",
        choice2: "Pacific",
        choice3: "The Gulf of Mexico",
        choice4: "The Mediterranian",
        answer: 4
    },
    {
        question: "Which one of these modern wonders is located in Brazil?",
        choice1: "Taj Mahal",
        choice2: "Christ the Redeemer",
        choice3: "Petra",
        choice4: "Chichen Itza",
        answer: 2
    },
    {
        question: "One of these structures was built in 80 A.D., which one was it?",
        choice1: "Colosseum",
        choice2: "Great Wall of China",
        choice3: "Machu Picchu",
        choice4: "Taj Mahal",
        answer: 1
    },
    {
        question: "Which one of these structures was built for the architects deceased wife?",
        choice1: "Taj Mahal",
        choice2: "Colossus of Rhoades",
        choice3: "Christ the redeemer",
        choice4: "Lighthouse of Alexandria",
        answer: 1
    },
];

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
const questionCounterText = document.getElementById("question_counter_text"); 

//creates array from option buttons
const options = Array.from(document.getElementsByClassName("option_bttn"));
//maximum questions in the quiz
const maxQuestions = 8;

//function to start quiz
function startQuiz(){
    //reveals score and questions containers
    questionContainer.style.display = "block flex";
    scoreContainer.style.display = "block flex";
    //removes start button and greeting container
    submitBttn.style.display = "none";
    greetContainer.style.display = "none";

    //sets values for below variables
    questionCounter = 0;
    correctScore = 0;
    incorrectScore = 0;
    avaiableQuestions = [...questions];

    correctScoreCounter.innerHTML = correctScore;
    incorrectScoreCounter.innerHTML = incorrectScore;
    questionCounterText.innerHTML = `${questionCounter} / ${maxQuestions}`;

    getNewQuestion();
};

startBttn.addEventListener("click", startQuiz);

//displays question in element with question_Content id
function getNewQuestion() {
    if(avaiableQuestions === 0 || questionCounter == maxQuestions){
        alert(`Congratulations you have finished the quiz, you scored ${correctScore} / ${maxQuestions}`);
        resetWebpage();
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * avaiableQuestions.length);
    currentQuestion = avaiableQuestions[questionIndex];
    questionContent.innerText = currentQuestion.question;
//displays potential options in the options buttons
    options.forEach(option => {
        const number = option.dataset['number'];
        option.innerText = currentQuestion['choice' + number]; 
    });

    avaiableQuestions.splice(questionIndex, 1);
};