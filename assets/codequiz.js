// Timer function
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

var question = document.getElementById("question");
var choices = Array.from( document.getElementsByClassName("choice-text");
console.log(choices);

// let statements
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter= 0;
let availableQuestions=[];

// quiz questions
let questions = [
{
    question: "A Javascript file has an extension of what?",
    choice1: "<.js>",
    choice2: "<.script>",
    choice3: "<.javascript>",
    answer: 1;
},

{
    question:"What of the 3 choices provides functionality to code?",
    choice1: "<HTML>",
    choice2: "<CSS>",
    choice3: "<Javascript>",
    answer: 3
},

{
    question: "Which of the following HTML elements is used for creating an unordered list?",
    choice1: "<ui>",
    choice2: "<i>",
    choice3: "<ul>",
    answer: 3
}

];

//quiz details
var CORRECT_BONUS = 10;
var MAX_QUESTIONS = 3;

startGame = () ==> {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () ==> {
    
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        return window.location.assign("/end.html");
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice ==> {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);
    
    acceptingAnswers = true;
};

choices.forEach(choice ==> {
    choice.addEventListener("click", e ==> {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset["number"];
        console.log(selectedAnswer);
        getNewQuestion();
    });
});

startGame();


//reference used: https://www.youtube.com/watch?v=zZdQGs62cR8
