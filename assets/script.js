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
    }, 
];

var startBtn = document.querySelector("#startBtn");
var timerEl = document.querySelector("#timer");
var game = document.querySelector("#game");
var gameH1 = document.querySelector("#h1");
var gameP = document.querySelector("#p");
var optionsUl = document.querySelector("#optionsUl");


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
                allDone();
                timerEl.textContent = "Out of Time!";
            }
        }, 1000);
    }
    makeStuffHappen();
});

function makeStuffHappen(questionsIndex) {

    gameH1.innerHTML = "";
    gameP.remove();
    optionsUl = "";
    makeLi = "";

    for (var i = 0; i < quizQuestions.length; i++) {
        
        var questionIndex = quizQuestions[i].title;
        var optionsIndex = quizQuestions[i].options;
        gameH1.textContent = questionIndex;
    }
    console.log(questionIndex);
    console.log(optionsIndex);

    optionsIndex.forEach(function (newElement) {
        var makeLi = document.createElement("li");
        makeLi.setAttribute("class", "makeLi");
        makeLi.textContent = optionsIndex;
        optionsUl.appendChild(makeLi);
        game.appendChild(makeUl);
        makeLi.addEventListener("click", (isRightNot));
    })

    // for (var i = 0; i < quizQuestions.length; i++) {
    //     var questionsIndex = quizQuestions[i].title;
    //     var optionsIndex = quizQuestions[i].options;
    //     gameH1.textContent = questionsIndex;
    //     makeLi.textContent = optionsIndex;
    // }

    // optionsIndex.forEach(function (newElement) {
    //     var makeLi = document.createElement("li");
    //     makeLi.setAttribute("class", "makeLi");
    //     makeLi.textContent = optionsIndex;
    //     optionsUl.appendChild(makeLi);
    //     game.appendChild(makeUl);
    //     makeLi.addEventListener("click", (isRightNot));
    // })

    //     optionsIndex.forEach(function (newElement) {
    //     var makeLi = document.createElement("li");
    //     makeLi.setAttribute("class", "makeLi");
    //     makeLi.textContent = optionsIndex;
    //     optionsUl.appendChild(makeLi);
    //     game.appendChild(makeUl);
    //     makeLi.addEventListener("click", (isRightNot));
    // })





    // gameH1.innerHTML = "";
    // makeUl.innerHTML = "";
    // gameP.innerHTML = "";

    // for (var i = 0; i < quizQuestions.length; i++) {
        
    //     var questionIndex = quizQuestions[i].title;
    //     var optionsIndex = quizQuestions[i].options;
    //     gameH1.textContent = questionIndex;
    // }
    // console.log(questionIndex);
    // console.log(optionsIndex);
    // // stopped right here
    // optionsIndex.forEach(function (newElement) {
    //     var makeLi = document.createElement("li");
    //     makeLi.setAttribute("class", "makeLi");
    //     makeLi.textContent = optionsIndex;
    //     optionsUl.appendChild(makeLi);
    //     game.appendChild(makeUl);
    //     makeLi.addEventListener("click", (isRightNot));
    // })
}



    

 

