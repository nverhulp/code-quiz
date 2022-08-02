// Created Variable IDs
var containerQuestionEl = document.getElementById("question-container");
var containerStartEl = document.getElementById("starter-container");
var containerEndEl = document.getElementById("end-container");
var containerScoreEl = document.getElementById("score-banner");
var formInitials = document.getElementById("initials-form");
var containerHighScoresEl = document.getElementById("high-score-container");
var viewHighScoreEl = document.getElementById("view-high-scores");
var listHighSccoreEl = document.getElementById("high-score-list");
var correctEl = document.getElementById("correct");
var wrongEl = document.getElementById("wrong");

// Button Variables
var buttonStartEl = document.querySelector("start-game");
var buttonGoBackEl = document.querySelector("go-back");
var buttonClearScoresEl = document.querySelector("clear-high-scores");

// Questions and Answers 
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");

// Timer and Score
var timerEl = document.querySelector("#timer");
var score = 0;
var timeleft;
var gameover;
timerEl.innerText = 0;

// Array for High Score
var highScores = [];

// Array for Questions
var arrayShuffleQuestions;
var questionIndex = 0;

// List of Questions for Code Quiz
var questions = [
    {q: 'Commonly used data types DO NOT include:',
     a: '3. Alerts',
        choices:[{choice: '1. Strings'}, {choice: '2. Booleans'}, {choice: '3. Alerts'}, {choice: '4. Numbers'}]
    },
    {q: 'The condition in an if / else statement is enclosed with __________.',
     a: '3. Parenthesis',
            choices:[{choice: '1. Quotes'}, {choice: '2. Curly Brackets'}, {choice: '3. Parenthesis'}, {choice: '4. Square Brackets'}]
    },
    {q: 'Arrays in Javascript can be used to store __________.',
     a: '4. All of the above',
        choices:[{choice: '1. Numbers'}, {choice: '2. Booleans'}, {choice: '3. Strings'}, {choice: '4. All of the above'}]
    },
    {q: 'String values must be enclosed within __________ when being assigned to variables.',
     a: '3. Quotes',
     choices:[{choice: '1. Commas'}, {choice: '2. Curly Brackets'}, {choice: '3. Quotes'}, {choice: '4. Parenthesis'}]
    },
    {q: 'A very useful tool used during development and debugging for printing content to the debugger is:',
     a: '4. Console.log',
     choices:[{choice: '1. JavaScript'}, {choice: '2. Terminal/Bash'}, {choice: '3. For Loops'}, {choice: '4. Console.log'}]
    },
];

// Back Button on High Score Page
var renderStartPage = function () {
    containerHighScoresEl.classList.add("hide");
    containerHighScoresEl.classList.remove("show");
    containerStartEl.classList.remove("hide");
    containerStartEl.classList.add("show");
    containerScoreEl.removeChild(containerScoreEl.lastChild);
    questionIndex = 0;
    gameover = "";
    timerEl.textContent = 0;
    score = 0;

    if (correctEl.className = "show") {
        correctEl.classList.remove("show");
        correctEl.classList.add("hide");
    }
    if (wrongEl.className = "show") {
        wrongEl.classList.remove("show");
        wrongEl.classList.add("hide)";)
    }
}