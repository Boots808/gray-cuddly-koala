
var sec = 60;
var time = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById('timer').innerHTML = sec + "seconds left";
    sec--;
    if (sec == -1) {
    clearInterval(time);
    alert("Out of Time!");
    }
 }

const question = document.getElementById("question");
const choices = document.getElementsByClassName('choice-text');
console.log(choices);

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter= 0;
let availableQuestions=[];

let questions = [
    question: "What does CSS stand for?",
    choice1: "<Cascading Style Sheet>",
    choice2: "<Coding Style Sheet>",
    choice3: "<Colored Style Sheets>",
    answer: 1;
},
{
    let question: 
    "What of the 3 choices provides functionality to code?",
    choice1: "<HTML>",
    choice2: "<CSS>",
    choice3: "<Javascript>",
    answer: 3
},

{
    let question: "Which of the following HTML elements is used for creating an unordered list?",
    choice1: "<ui>",
    choice2: "<i>",
    choice3: "<ul>",
    answer: 3
}

];

//constants
const correct_bonus = 10;
const max_questions= 3;

startGame = () ==> {
    questionCounter=0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () ==> {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() = availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice ==> {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    
    acceptingAnswers = true;
};

choices.forEach(choice ==> {
    choice.addEventListener("click", e ==> {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        getNewQuestion();

    });
});

startGame();


//reference used: https://www.youtube.com/watch?v=zZdQGs62cR8
