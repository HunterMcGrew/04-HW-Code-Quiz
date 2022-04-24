// quiz questions obj 
var quizQuestions = [
    {
        title: "What is a useful tool in debugging problems in your code?",
        options: ["Browser Dev Tools", "Pro Debugger v3.36", "Review your code", "Quick Debugger App"],
        answer: "Browser Dev Tools"
    },
    {
        title: "Arrays in JavaScript are used to store?",
        options: ["String of content", "More than one value", "Functions", "Cookies"],
        answer: "More than one value"
    },
    {
        title: "What is used to make comments in JavaScript?",
        options: ["/*", "$$", "##", "//"],
        answer: "//"
    },
    {
        title: "A TRUE or FALSE statement is what?",
        options: ["String", "Variable", "Boolean", "Array"],
        answer: "Boolean"
    },
    {
        title: "What does the CONST variable do?",
        options: ["Stores data that can change", "Constructs your JavaScript", "Stores unchangable data", "Starts a function"],
        answer: "Stores unchangable data"
    } 
];

// elements from index.html that I'll need 
var startBtn = document.getElementById("startBtn");
var timerEl = document.getElementById("timer");
var game = document.getElementById("game");
var gameH1 = document.getElementById("h1");
var gameP = document.getElementById("p");
var optionsDiv = document.getElementById("optionsDiv");
var questions = document.getElementById("questions");
var savedInitialsEl = document.getElementById("savedInitials");
var savedScoreEl = document.getElementById("savedScore");
var showScoreEl = document.getElementById("showScore");
var submitBtn = document.getElementById("submitBtn");

// make elements 
makeUl = document.createElement("ul");
makeLi = document.createElement("li");
makeH1 = document.createElement("h1");
makeP = document.createElement("p");

// game variables for score and time and such
var timeDeduction = 10;
var score = 0;
var secondsLeft = 50;
var holdInterval = 0;
var currentQuestionIndex = 0;

// on start button click, start timer, call makeStuffHappen
startBtn.onclick = startTimer;
function startTimer() {
    if (holdInterval === 0) {
        holdInterval = setInterval(function() {
            secondsLeft--;
            timerEl.textContent = "Time Left: " + secondsLeft;
            // when timer runs out gameOver
            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                gameOver();
                timerEl.textContent = "Out of Time!";
            }
        }, 1000); // every second update
    }
    makeStuffHappen(); // call function to populate questions
};

// function to populate questions
    function makeStuffHappen() {
    startBtn.remove();
    gameP.remove();
    var currentQuestion = quizQuestions[currentQuestionIndex];
    var questionTitle = document.getElementById("questionTitle");
    questionTitle.textContent = currentQuestion.title; // showing undefined
    optionsDiv.innerHTML = " "; // clear out div 

    currentQuestion.options.forEach(function (option, i) {
        var btnOption = document.createElement("button");
        btnOption.setAttribute("class", "options block");
        btnOption.setAttribute("value", option);
        btnOption.textContent = i + 1 + " . " + option;
        // optionsDiv.onclick = isRightNot();
        optionsDiv.appendChild(btnOption);
        // optionsDiv.addEventListener("click", isRightNot);
        btnOption.onclick = isRightNot;
})
};

function isRightNot() {

    if (this.value === quizQuestions[currentQuestionIndex].answer) {
        score++;
    } else {
        score--;
        secondsLeft -= timeDeduction;
    };

    currentQuestionIndex++

    if (currentQuestionIndex === quizQuestions.length) {
        gameOver(); // no more questions? gameOver 
    } else {
        makeStuffHappen(); 
    }
};

function gameOver() {
    
    playGameEl = document.getElementById("playGame");
    gameOverEl = document.getElementById("gameOver");
    savedInitialsEl = document.getElementById("savedInitials");
    savedScoreEl = document.getElementById("savedScore");

    playGameEl.style.display = "none";
    gameOverEl.style.display = "block";

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();
        var userInitials = document.getElementById("initials");
        localStorage.setItem("highscoreI", userInitials.value);
        localStorage.setItem("highscoreS", score);
        getHighScores();
  });

    showScoreEl.textContent = score;

    getHighScores();
};

function getHighScores() {
    var savedInitials = localStorage.getItem("highscoreI");
    var savedScore = localStorage.getItem("highscoreS");
    
    if (savedInitials === null) {
        savedInitialsEl.textContent = " ";
    } else {
        savedInitialsEl.textContent = "Initials: " + savedInitials;
    };

    if (savedScore === null) {
        savedScoreEl.textContent = " ";
    } else {
        savedScoreEl.textContent = "Score: " + savedScore;
    };

};
