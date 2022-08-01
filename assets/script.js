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
var questions = 