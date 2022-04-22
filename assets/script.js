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

console.log(quizQuestions[0].answer) 
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


// make elements 
makeUl = document.createElement("ul");
makeLi = document.createElement("li");
makeH1 = document.createElement("h1");
makeP = document.createElement("p");

// game variables for score and time and such
var timeRemaining = 50;
var timeDeduction = 10;
var score = 0;
var secondsLeft = 40;
var holdInterval = 0;
var currentQuestionIndex = 0;

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
// function makeStuffHappen(questionIndex, optionsIndex, currentQuestion) {
    function makeStuffHappen() {
    console.log(quizQuestions);
    console.log(currentQuestionIndex); // logging 4, should be 0
    var currentQuestion = quizQuestions[currentQuestionIndex];
    console.log(currentQuestion); 
    var questionTitle = document.getElementById("questionTitle");
    questionTitle.textContent = currentQuestion.title; // showing undefined
    optionsDiv.innerHTML = " "; // clear out div 

    currentQuestion.options.forEach(function (option, i) {
        var btnOption = document.createElement("button");
        btnOption.setAttribute("class", "options");
        btnOption.setAttribute("value", option);
        btnOption.textContent = i + 1 + " . " + option;
        // optionsDiv.onclick = isRightNot();
        optionsDiv.appendChild(btnOption);
        optionsDiv.addEventListener("click", isRightNot);
})
};

    // gameH1.innerHTML = "";
    // gameP.remove();
    // startBtn.remove();

// trying to store quizQuestion data into new variables ***not working right***
    // for (var i = 0; i < quizQuestions.length; i++) {
        
    //     // var questionIndex = quizQuestions[currentQuestion].title;
    //     var optionsIndex = quizQuestions[currentQuestion].options;  // if i change currentQuestion to a number, it changes the data. 
    //     //var answerIndex = quizQuestions[currentQuestion].answer; // maybe i need to add an answerindex?
    //     gameH1.textContent = quizQuestions[currentQuestion].title;
    // };
    // console.log(questionIndex);
    // console.log(optionsIndex);
    //console.log("line 90", answerIndex);  // shows "browser dev tools"  the first answer in the array?
// taking options index array, for each item make new <li>

 

    // optionsIndex.forEach(function (newLi) {
        
    //     var makeLi = document.createElement("li");
    //     makeLi.textContent = newLi;
    //     optionsUl.appendChild(makeLi);
    //     // adding event listener to new li and checking if it's correct
    //     makeLi.addEventListener("click", (isRightNot));
    // });




// check to see if clicked answer is correct 
// function isRightNot(event, questionIndex, currentQuestion) {
//     event.preventDefault(); // this doesnt seem necessary 
//     //console.log("in isRightNot", answerIndex) // undefined when clicked on even though line 90 is correct *******
//     // console.log("in isRightNot", quizQuestions.answer);
//     var element = event.target; // if clicked element matches li, check textContent with answer
//     if (element.matches("button")) {
//         if (element.textContent == currentQuestion.answer) { // currently only negating score *****
//             score++  // if correct add 1 to score

//         } else {
//             score-- // if incorrect subtract score

//         };

//     };

    // PROBLEM WITH SCORING ****
function isRightNot() {
console.log("isRightNot", quizQuestions[0].answer); // running 5 or 6 times?
    if (this.textContent !== quizQuestions[currentQuestionIndex].answer) {
        score--;
        timeRemaining -= timeDeduction;
        currentQuestionIndex++;
    } else {
        score++;
        currentQuestionIndex++
    };

    if (currentQuestionIndex >= quizQuestions.length) {
        gameOver(); // no more questions? gameOver 
    } else {
        // currentQuestion++;  // add 1 to currentQuestion
        makeStuffHappen(); // send currentquestion index number to makeStuffHappen
    }
    
    
};
// console.log(quizQuestions.answer) // undefined
//
// currently when clicking on an li element it populates new li elemnts appended to the old ones with the same info in them.
//

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

