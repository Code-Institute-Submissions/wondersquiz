//ancient wonders questions and answers

let ancientQuizQuestions = [
    {
        question: "Which one of these structures is not apart of the wonders of the ancient world?",
        options: ["The Pyramids of Giza", "The Hanging Gardens of Babylon", "The Temple of Artemis", "The Great Wall of China"],
        answer: "The Great Wall of China"
    },
    {
        question: "Which one of these structures represents the King of the Greek Gods?",
        options: ["Statue of Zues", "Lighthouse of Alexandria", "Colossus of Rhoades", "Mausolem at Halicarnassus"],
        answer: "Statue of Zues"
    },
    {
        question: "Which one of these structures is located in Turkey?",
        options: ["Mausolem at Halicarnassus", "Lighthouse of Alexandria", "Hanging Gardens of Babylon", "Pyramids of Giza"],
        answer:"Mausolem at Halicarnassus"
    },
    {
        question: "What century was the Colossus of Rhoades built?",
        options: ["2nd Century A.D.", "4th Century B.C.", "20th Century", "10th Century A.D."],
        answer: "4th Century B.C."
    },
    {
        question: "The seven wonders of the ancient world surround which sea?",
        options: ["Atlantic", "Pacific", "The Gulf of Mexico", "The Mediterranian"],
        answer: "The Mediterranian"
    }
]

//variables to keep score
let correctScore
let incorrectScore
let currentQuestion

//variables to display scores and questions
const correctScoreCounter = document.getElementById("cScore");
const incorrectScoreCounter = document.getElementById("iScore");
const questionContent = document.getElementById("questionContent");


//ancient wonders quiz function
function ancientWonders(){
    let ancientQuizBttn = document.getElementById("ancient_quiz_bttn");
    
    correctScore = 0;
    incorrectScore = 0;

    correctScoreCounter = correctScore.textContent;
    incorrectScoreCounter = incorrectScore.textContent;

}

//modern wonders questions and answers
let modernQuizQuestions = [
    {
        question: "",
        options: [],
        answer: ""
    },
    {
        question: "",
        options: [],
        answer: ""
    },
    {
        question: "",
        options: [],
        answer: ""
    },
    {
        question: "",
        options: [],
        answer: ""
    },
    {
        question: "",
        options: [],
        answer: ""
    },

]

//modern wonders quiz
function modernWonders(){

}