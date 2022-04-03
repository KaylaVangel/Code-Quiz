//onclick start quiz button new question comes up with 4 buttons with potential answers and timer begins//

//set up questions//
const questionOne = {
    question: "Commonly used data types DO NOT include:",
    answer1: "strings",
    answer2: "booleans",
    answer3: "alerts",
    answer4: "numbers",
    correct: "alerts",

}

const questionTwo = {
    question: "A very useful tool used during development and debugging for printing content to the debugger is",
    answer1: "JavaScript",
    answer2: "terminal/bash",
    answer3: "for loops",
    answer4: "console log",
    correct: "console log",
}

const questionThree = {
    question: "String values must be enclosed within___ when being assigned to variables.",
    answer1: "commas",
    answer2: "curly brackets",
    answer3: "quotes",
    answer4: "parenthesis",
    correct: "quotes",
}

const questionFour = {
    question: "Arrays in Javascript can be used to store ___.",
    answer1: "numbers and strings",
    answer2: "other arrays",
    answer3: "booleans",
    answer4: "all of the above",
    correct: "all of the above",
}

const questionFive = {
    question: "The condition in an if/else statement is enclosed with _.",
    answer1: "quotes",
    answer2: "curly brackets",
    answer3: "parenthesis",
    answer4: "square breackets",
    correct: "parenthesis",
}

const questionSix = {
    question: "Which keyword allows the user to exit the current loop?",
    answer1: "hoisting",
    answer2: "break",
    answer3: "del",   
    answer4: "span",
    correct: "break",
}

const questionSeven = {
    question: "Which of the following statements is true?",
    answer1: "function expressions can be called before they are declared",
    answer2: "function declartions can be called before they are declared",
    answer3: "falsy values evaluate to true in a conditional statement",
    answer4: "concatination can join two or more strings with the use of the & operator",
    correct: "function declartions can be called before they are declared",
}

const questionEight = {
    question: "In JavaScript 'This' refers to an ___.",
    answer1: "string",
    answer2: "parameter",
    answer3: "class",
    answer4: "object",
    correct: "object",
}

const questionNine = {
    question: "Boolean functions can only represent___ ",
    answer1: "integers",
    answer2: "less than/greater than",
    answer3: "true/false",
    answer4: "arrays",
    correct: "true/false",
}

const questionTen = {
    question: "Which statement is true?",
    answer1: "arrays use named indexes",
    answer2: "objects use named indexes",
    answer3: "objects always utilize square brackets",
    answer4: "the index of an array begins at -1",
    correct: "objects use named indexes",
}
//question array//
const questionArray = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, 
    questionEight, questionNine, questionTen];

let currentQuestion = -1;

let numberOfPlays = 0;

function insertQuestion() {
    document.getElementById("questions").innerHTML = questionArray[currentQuestion].question;
    document.getElementById("a").innerHTML = questionArray[currentQuestion].answer1;
    document.getElementById("b").innerHTML = questionArray[currentQuestion].answer2;
    document.getElementById("c").innerHTML = questionArray[currentQuestion].answer3;
    document.getElementById("d").innerHTML = questionArray[currentQuestion].answer4;
};

//End of exam reached//
function end() {
    numberOfPlays++;
    document.getElementById("start").innerText = "Try Again";
    document.getElementById("start").removeAttribute("disabled");
    document.getElementById("questions").style.display = "none";
    document.getElementById("a").style.display = "none";
    document.getElementById("b").style.display = "none";
    document.getElementById("c").style.display = "none";
    document.getElementById("d").style.display = "none";
    document.getElementById("answer_results").style.display = "none";
    currentQuestion = -1;
    let userName = prompt("Please enter your name");
    document.getElementById("name").style.display = "block";
    document.getElementById("name").innerHTML = userName + " " + "High Score=" + time;
    function storeScore() {

        var x = "time" + numberOfPlays;
        localStorage.setItem(x, time);

        var y = "userName" + numberOfPlays;
        localStorage.setItem(y, userName);

    }
    storeScore();

    function getScore() {
        var list = document.getElementById("scores")
            let listItem = document.createElement('li');
            let x = "time" + numberOfPlays;
            let y = "userName" + numberOfPlays;
            let uN = localStorage.getItem(y);
            let t = localStorage.getItem(x);
            listItem.innerHTML="USER: " + uN + "&nbsp"+"&nbsp"+"&nbsp" + "SCORE: " + t ;
            list.appendChild(listItem);
        
    }
    getScore();

}

var time = 60;
function updateCount() {
    if (time > 0) {
        time = time - 1;
        document.getElementById("timer").innerHTML = time;
        setTimeout(updateCount, 1000);
    } else if (time <= 0 || currentQuestion > questionArray.length) {
        end();
    }
}



//start button clicked//
function nextPage() {
    if (currentQuestion == -1) {
        document.getElementById("name").style.display = "none";
        time = 60;
    }
    currentQuestion++
    if (currentQuestion < questionArray.length) {
        document.getElementById("start").innerText = "Next";
        document.getElementById("start").setAttribute("disabled", "disabled");
        document.getElementById("a").style.display = "flex";
        document.getElementById("b").style.display = "flex";
        document.getElementById("c").style.display = "flex";
        document.getElementById("d").style.display = "flex";
        document.getElementById("a").removeAttribute("disabled");
        document.getElementById("b").removeAttribute("disabled");
        document.getElementById("c").removeAttribute("disabled");
        document.getElementById("d").removeAttribute("disabled");
        document.getElementById("questions").style.display = "block";
        insertQuestion();
        document.getElementById("answer_results").style.display = "block";
        document.getElementById("answer_results").innerHTML = "";
        document.getElementById("intro").style.display = "none";
        if (time == 60) {
            updateCount();
        }

    } else {
        end();
    }
};
//when answer button clicked//
function answerClick(btnClicked) {
    document.getElementById("start").removeAttribute("disabled");
    document.getElementById("a").setAttribute("disabled", "disabled");
    document.getElementById("b").setAttribute("disabled", "disabled");
    document.getElementById("c").setAttribute("disabled", "disabled");
    document.getElementById("d").setAttribute("disabled", "disabled");
    console.log(btnClicked.innerText);
    questionArray[currentQuestion].correct;
    //results displayed//
    let display;
    if (btnClicked.innerText == questionArray[currentQuestion].correct) {
        display = "Correct!";

    } else {
        display = "Incorrect";
        time = time - 5;
    }
    console.log(display);
    document.getElementById("answer_results").innerHTML = display;
};


// //counter function//

// //final score displayed at end and form to enter name//

// //local storage to store final score and name//

// counter 

// if statements for if button is correct don't deduct from timer
// timer and high score on top of page
