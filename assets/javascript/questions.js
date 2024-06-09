//quiz questions
let quizQuestions = [
    {
        question: "Which one of these structures is not apart of the wonders of the ancient world?",
        option1 : "The Pyramids of Giza",
        option2: "The Hanging Gardens of Babylon",
        option3: "The Temple of Artemis",
        option4: "The Great Wall of China",
        answer: 4
    },
    {
        question: "Which one of these structures represents the King of the Greek Gods?",
        option1: "The Statue of Zues",
        option2: "Lighthouse of Alexandria",
        option3: "Colossus of Rhoades",
        option4: "Mausolem at Halicarnassus",
        answer: 1
    },
    {
        question: "Which one of these structures is located in Turkey?",
        option1: "Mausolem at Halicarnassus",
        option2: "Lighthouse of Alexandria",
        option3: "Hanging Gardens of Babylon",
        option4: "Pyramids of Giza",
        answer: 1
    },
    {
        question: "What century was the Colossus of Rhoades built?",
        option1: "2nd Century A.D.",
        option2: "4th Century B.C.",
        option3: "20th Century",
        option4: "10th Century A.D.",
        answer: 2
    },
    {
        question: "The seven wonders of the ancient world surround which sea?",
        option1: "Atlantic",
        option2: "Pacific",
        option3: "The Gulf of Mexico",
        option4: "The Mediterranian",
        answer: 4
    },
    {
        question: "Which one of these modern wonders is located in Brazil?",
        option1: "Taj Mahal",
        option2: "Christ the Redeemer",
        option3: "Petra",
        option4: "Chichen Itza",
        answer: 2
    },
    {
        question: "One of these structures was built in 80 A.D., which one was it?",
        option1: "Colosseum",
        option2: "Great Wall of China",
        option3: "Machu Picchu",
        option4: "Taj Mahal",
        answer: 1
    },
    {
        question: "Which one of these structures was built for the architects deceased wife?",
        option1: "Taj Mahal",
        option2: "Colossus of Rhoades",
        option3: "Christ the Redeemer",
        option4: "Lighthouse of Alexandria",
        answer: 1
    },
]

//variables to keep score and count questions
let correctScore
let incorrectScore
let currentQuestion = {};
let questionCounter

//variables to display scores, questions and option buttons
const correctScoreCounter = document.getElementById("cScore");
const incorrectScoreCounter = document.getElementById("iScore");
const questionContent = document.getElementById("questionContent");

const MAX_QUESTIONS = 7;

//creates an array from option elements with option_bttn class name
const optionBtnns = Array.from(document.getElementsByClassName("option_bttn"));

const qaContainer = document.getElementById("qa_container");
const scoreContainer = document.getElementById("score_container");
qaContainer.style.display = "none";
scoreContainer.style.display = "none";

//function to start quiz
function startQuiz(){
    let startBttn = document.getElementById("startBttn");

    qaContainer.style.display = "block flex";
    scoreContainer.style.display = "block flex";

//Initial counters for score and questions
    questionCounter = 0;
    correctScore = 0;
    incorrectScore = 0;

    //sets the questions array to the available questions
    let availableQuestions = [...quizQuestions];
}
