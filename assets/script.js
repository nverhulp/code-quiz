// Created Variable IDs
var containerQuestionEl = document.getElementById("question-container");
var containerStartEl = document.getElementById("starter-container");
var containerEndEl = document.getElementById("end-container");
var containerScoreEl = document.getElementById("score-banner");
var formInitials = document.getElementById("initials-form");
var containerHighScoresEl = document.getElementById("high-score-container");
var ViewHighScoreEl = document.getElementById("view-high-scores");
var listHighScoreEl = document.getElementById("high-score-list");
var correctEl = document.getElementById("correct");
var wrongEl = document.getElementById("wrong");

// Button Variables
var btnStartEl = document.querySelector("#start-game");
var btnGoBackEl = document.querySelector("#go-back")
var btnClearScoresEl = document.querySelector("#clear-high-scores")

// Questions and Answers 
var questionEl = document.getElementById("question")
var answerbuttonsEl = document.getElementById("answer-buttons")

// Timer and Score
var timerEl = document.querySelector("#timer");
var score = 0;
var timeleft;
var gameover
timerEl.innerText = 0;

// Array for High Score
var HighScores = [];

// Array for Questions
var arrayShuffledQuestions;
var QuestionIndex = 0;

// List of Questions for Code Quiz
var questions = [
    {
        q: 'Commonly used data types DO NOT include:',
        a: '3. Alerts',
        choices: [{ choice: '1. Strings' }, { choice: '2. Booleans' }, { choice: '3. Alerts' }, { choice: '4. Numbers' }]
    },
    {
        q: 'The condition in an if / else statement is enclosed with __________.',
        a: '3. Parenthesis',
        choices: [{ choice: '1. Quotes' }, { choice: '2. Curly Brackets' }, { choice: '3. Parenthesis' }, { choice: '4. Square Brackets' }]
    },
    {
        q: 'Arrays in Javascript can be used to store __________.',
        a: '4. All of the above',
        choices: [{ choice: '1. Numbers' }, { choice: '2. Booleans' }, { choice: '3. Strings' }, { choice: '4. All of the above' }]
    },
    {
        q: 'String values must be enclosed within __________ when being assigned to variables.',
        a: '3. Quotes',
        choices: [{ choice: '1. Commas' }, { choice: '2. Curly Brackets' }, { choice: '3. Quotes' }, { choice: '4. Parenthesis' }]
    },
    {
        q: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        a: '4. Console.log',
        choices: [{ choice: '1. JavaScript' }, { choice: '2. Terminal/Bash' }, { choice: '3. For Loops' }, { choice: '4. Console.log' }]
    },
];

// Back Button on High Score Page
var renderStartPage = function () {
    containerHighScoresEl.classList.add("hide")
    containerHighScoresEl.classList.remove("show")
    containerStartEl.classList.remove("hide")
    containerStartEl.classList.add("show")
    containerScoreEl.removeChild(containerScoreEl.lastChild)
    QuestionIndex = 0
    gameover = ""
    timerEl.textContent = 0
    score = 0

    if (correctEl.className = "show") {
        correctEl.classList.remove("show");
        correctEl.classList.add("hide")
    }
    if (wrongEl.className = "show") {
        wrongEl.classList.remove("show");
        wrongEl.classList.add("hide");
    }
}

// Start time at 60. Check if game is over or if there is time left
var setTime = function () {
    timeleft = 60;

    var timercheck = setInterval(function () {
        timerEl.innerText = timeleft;
        timeleft--

        if (gameover) {
            clearInterval(timercheck);
        }

        if (timeleft < 0) {
            showScore();
            timerEl.innerText = 0;
            clearInterval(timercheck);
        }

    }, 1000);
}

var startGame = function () {
    // Show or hide start screen
    containerStartEl.classList.add('hide');
    containerStartEl.classList.remove('show');
    containerQuestionEl.classList.remove('hide');
    containerQuestionEl.classList.add('show');
    arrayShuffledQuestions = questions.sort(() => Math.random() - 0.5)
    setTime()
    setQuestion()
}

// Next Question for Quiz
var setQuestion = function () {
    resetAnswers()
    displayQuestion(arrayShuffledQuestions[QuestionIndex])
}

// Remove Answer Buttons
var resetAnswers = function () {
    while (answerbuttonsEl.firstChild) {
        answerbuttonsEl.removeChild(answerbuttonsEl.firstChild)
    };
};

// Questions and Answer Buttons
var displayQuestion = function (index) {
    questionEl.innerText = index.q
    for (var i = 0; i < index.choices.length; i++) {
        var answerbutton = document.createElement('button')
        answerbutton.innerText = index.choices[i].choice
        answerbutton.classList.add('btn')
        answerbutton.classList.add('answerbtn')
        answerbutton.addEventListener("click", answerCheck)
        answerbuttonsEl.appendChild(answerbutton)
    }
};

// Show that answer is correct on screen
var answerCorrect = function () {
    if (correctEl.className = "hide") {
        correctEl.classList.remove("hide")
        correctEl.classList.add("banner")
        wrongEl.classList.remove("banner")
        wrongEl.classList.add("hide")
    }
}

// Show that answer is wrong on screen
var answerWrong = function () {
    if (wrongEl.className = "hide") {
        wrongEl.classList.remove("hide")
        wrongEl.classList.add("banner")
        correctEl.classList.remove("banner")
        correctEl.classList.add("hide")
    }
}

// Check Answer
var answerCheck = function (event) {
    var selectedanswer = event.target
    if (arrayShuffledQuestions[QuestionIndex].a === selectedanswer.innerText) {
        answerCorrect()
        score = score + 10
    }

    else {
        answerWrong()
        score = score - 5;
        timeleft = timeleft - 10;
    };
    // Check if there is next question and go to if so
    QuestionIndex++
    if (arrayShuffledQuestions.length > QuestionIndex + 1) {
        setQuestion()
    }
    else {
        gameover = "true";
        showScore();
    }
}

// Score at the end
var showScore = function () {
    containerQuestionEl.classList.add("hide");
    containerEndEl.classList.remove("hide");
    containerEndEl.classList.add("show");

    var scoreDisplay = document.createElement("p");
    scoreDisplay.innerText = ("Your final score is " + score + "!");
    containerScoreEl.appendChild(scoreDisplay);
}

// High Score Values
var createHighScore = function (event) {
    event.preventDefault()
    var initials = document.querySelector("#initials").value;
    if (!initials) {
        alert("Enter your intials!");
        return;
    }

    formInitials.reset();

    var HighScore = {
        initials: initials,
        score: score
    }

    // Sort scores
    HighScores.push(HighScore);
    HighScores.sort((a, b) => { return b.score - a.score });

    while (listHighScoreEl.firstChild) {
        listHighScoreEl.removeChild(listHighScoreEl.firstChild)
    }

    for (var i = 0; i < HighScores.length; i++) {
        var highscoreEl = document.createElement("li");
        highscoreEl.ClassName = "high-score";
        highscoreEl.innerHTML = HighScores[i].initials + " - " + HighScores[i].score;
        listHighScoreEl.appendChild(highscoreEl);
    }

    saveHighScore();
    displayHighScores();
}

// Save and View High Scores
var saveHighScore = function () {
    localStorage.setItem("HighScores", JSON.stringify(HighScores))

}

var loadHighScore = function () {
    var LoadedHighScores = localStorage.getItem("HighScores")
    if (!LoadedHighScores) {
        return false;
    }

    LoadedHighScores = JSON.parse(LoadedHighScores);
    LoadedHighScores.sort((a, b) => { return b.score - a.score })


    for (var i = 0; i < LoadedHighScores.length; i++) {
        var highscoreEl = document.createElement("li");
        highscoreEl.ClassName = "high-score";
        highscoreEl.innerText = LoadedHighScores[i].initials + " - " + LoadedHighScores[i].score;
        listHighScoreEl.appendChild(highscoreEl);

        HighScores.push(LoadedHighScores[i]);

    }
}

// High Score Screen
var displayHighScores = function () {

    containerHighScoresEl.classList.remove("hide");
    containerHighScoresEl.classList.add("show");
    gameover = "true"

    if (containerEndEl.className = "show") {
        containerEndEl.classList.remove("show");
        containerEndEl.classList.add("hide");
    }
    if (containerStartEl.className = "show") {
        containerStartEl.classList.remove("show");
        containerStartEl.classList.add("hide");
    }

    if (containerQuestionEl.className = "show") {
        containerQuestionEl.classList.remove("show");
        containerQuestionEl.classList.add("hide");
    }

    if (correctEl.className = "show") {
        correctEl.classList.remove("show");
        correctEl.classList.add("hide");
    }

    if (wrongEl.className = "show") {
        wrongEl.classList.remove("show");
        wrongEl.classList.add("hide");
    }

}

// Clear High Scores
var clearScores = function () {
    HighScores = [];

    while (listHighScoreEl.firstChild) {
        listHighScoreEl.removeChild(listHighScoreEl.firstChild);
    }

    localStorage.clear(HighScores);

}


loadHighScore()

// Buttons and Forms
btnStartEl.addEventListener("click", startGame);
formInitials.addEventListener("submit", createHighScore);
ViewHighScoreEl.addEventListener("click", displayHighScores);
btnGoBackEl.addEventListener("click", renderStartPage);
btnClearScoresEl.addEventListener("click", clearScores);