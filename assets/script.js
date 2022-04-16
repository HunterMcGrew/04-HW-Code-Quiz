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

var startBtn = document.getElementById("startBtn");
var timerEl = document.getElementById("timer");
var game = document.getElementById("game");
var gameH1 = document.getElementById("h1");
var gameP = document.getElementById("p");
var optionsUl = document.getElementById("optionsUl");
var savedInitialsEl = document.getElementById("savedInitials");
var savedScoreEl = document.getElementById("savedScore");
var showScoreEl = document.getElementById("showScore");


makeUl = document.createElement("ul", {is : "ul"});
makeLi = document.createElement("li", {is : "li"});
makeH1 = document.createElement("h1", {is : "h1"});
makeP = document.createElement("p", {is: "p"});

var timeRemaining = 40;
var timeDeduction = 10;
var score = 0;
var secondsLeft = 40;
var holdInterval = 0;

// jquery ins 09 might be useful

//startBtn.addEventListener("click", makeQuizQuestions);


startBtn.addEventListener("click", function() {
    if (holdInterval === 0) {
        holdInterval = setInterval(function() {
            secondsLeft--;
            timerEl.textContent = "Time Left: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                gameOver();
                timerEl.textContent = "Out of Time!";
            }
        }, 1000);
    }
    makeStuffHappen();
});

function makeStuffHappen() {
    game.innerHTML = "";
    gameH1.innerHTML = "";
    gameP.remove();
    startBtn.remove();
    optionsUl = "";

    for (var i = 0; i < quizQuestions.length; i++) {
        
        var questionIndex = quizQuestions[i].title;
        var optionsIndex = quizQuestions[i].options;
        gameH1.textContent = questionIndex;
    };
    console.log(questionIndex);
    console.log(optionsIndex);

    optionsIndex.forEach(function (newLi) {
        var optionsUl = document.getElementById("optionsUl");
        var makeLi = document.createElement("li");
        optionsUl.appendChild(makeLi);
        makeLi.textContent = newLi;
        makeLi.addEventListener("click", (isRightNot));
    });

    

};

function isRightNot(event) {
    // event.preventDefault();

    var element = event.target;
    if (element.matches("li")) {
        if (element.textContent == quizQuestions.answer) {
            score++
        } else {
            score--
        };

    };
    
    
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

