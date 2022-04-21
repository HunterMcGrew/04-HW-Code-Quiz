// quiz questions obj 
var quizQuestions = [
    {
        title: "What is a useful tool in debugging problems in your code?",
        options: ["Browser Dev Tools", "Pro Debugger v3.36", "Review your code", "Quick Debugger App"],
        answer: 0
    },
    {
        title: "Arrays in JavaScript are used to store?",
        options: ["String of content", "More than one value", "Functions", "Cookies"],
        answer: 1
    },
    {
        title: "What is used to make comments in JavaScript?",
        options: ["/*", "$$", "##", "//"],
        answer: 3
    },
    {
        title: "A TRUE or FALSE statement is what?",
        options: ["String", "Variable", "Boolean", "Array"],
        answer: 2
    },
    {
        title: "What does the CONST variable do?",
        options: ["Stores data that can change", "Constructs your JavaScript", "Stores unchangable data", "Starts a function"],
        answer: 2
    } 
];

// elements from index.html that I'll need 
var startBtn = document.getElementById("startBtn");
var timerEl = document.getElementById("timer");
var game = document.getElementById("game");
var gameH1 = document.getElementById("h1");
var gameP = document.getElementById("p");
var optionsUl = document.getElementById("optionsUl");
var savedInitialsEl = document.getElementById("savedInitials");
var savedScoreEl = document.getElementById("savedScore");
var showScoreEl = document.getElementById("showScore");

// make elements 
makeUl = document.createElement("ul", {is : "ul"});
makeLi = document.createElement("li", {is : "li"});
makeH1 = document.createElement("h1", {is : "h1"});
makeP = document.createElement("p", {is: "p"});

// game variables for score and time
var timeRemaining = 40;
var timeDeduction = 10;
var score = 0;
var secondsLeft = 40;
var holdInterval = 0;

// on start button click, start timer, call makeStuffHappen
startBtn.addEventListener("click", function() {
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
});

// function to populate questions
function makeStuffHappen(questionIndex, optionsIndex, currentQuestion) {
    game.innerHTML = "";
    gameH1.innerHTML = "";
    gameP.remove();
    startBtn.remove();
    // optionsUl.innerHTML = "";

// trying to store quizQuestion data into new variables ***not working right***
    for (var i = 0; i < quizQuestions.length; i++) {
        var currentQuestion = 0;
        var questionIndex = quizQuestions[currentQuestion].title;
        var optionsIndex = quizQuestions[currentQuestion].options;
        gameH1.textContent = quizQuestions[currentQuestion].title;
    };
    console.log(questionIndex);
    console.log(optionsIndex);
// taking options index array, for each item make new <li>
    optionsIndex.forEach(function (newLi, element, index) {
        var optionsUl = document.getElementById("optionsUl");
        var makeLi = document.createElement("li");
        var options = document.querySelectorAll("options");
        optionsUl.appendChild(makeLi);
        makeLi.textContent = newLi;
        // adding event listener to new li and checking if it's correct
        makeLi.addEventListener("click", (isRightNot));
    });


};

// check to see if clicked answer is correct 
function isRightNot(event, questionIndex, optionsIndex, currentQuestion) {
    event.preventDefault();

    var element = event.target; // if clicked element matches li, check textContent with answer
    if (element.matches("li")) {
        if (element.textContent == quizQuestions.answer) {
            score++ // if correct add 1 to score
        } else {
            score-- // if incorrect subtract score
        };

    };

    if (questionIndex >= quizQuestions.length) {
        gameOver(); // no more questions? gameOver 
    } else {
        currentQuestion++;  // add 1 to currentQuestion showing not defined.
        makeStuffHappen(currentQuestion); // send currentquestion index number to makeStuffHappen
    }
    
    
};

function gameOver() {
    
    playGameEl = document.getElementById("playGame");
    gameOverEl = document.getElementById("gameOver");
    playGameEl.style.display = "none";
    gameOverEl.style.display = "block";

    document.getElementById("submitBtn").addEventListener('click', function(event) {
        event.preventDefaults();
        var userInitials = document.getElementById("initials");
        localStorage.setItem("highscoreI", userInitials.value);
        localStorage.setItem("highscoreS", score);
  });

    showScoreEl.textContent = score;

    var savedInitials = localStorage.getItem("highscoreI");
    var savedScore = localStorage.getItem("highscoreS");

    savedInitialsEl.textContent = savedInitials;
    savedScoreEl.textContent = savedScore;

};

