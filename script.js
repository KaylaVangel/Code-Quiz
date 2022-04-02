//onclick start quiz button new question comes up with 4 buttons with potential answers and timer begins//

//set up questions//
const questionsOne = {
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
    question: "String values must be enclosed within_ when being assigned to variables.",
    answer1: "commas",
    answer2: "curly brackets",
    answer3: "quotes",
    answer4: "parenthesis",
    correct: "quotes",
}

const questionFour = {
    question: "Arrays in Javascript can be used to store _.",
    answer1: "numbers and strings",
    answer2: "other arrays",
    answer3: "boolleans",
    answer4: "all of the above",
    correct: "all of the above",
}

const questionFive = {
    question:"The condition in an if/else statement is enclosed with _.",
    answer1:"quotes",
    answer2:"curly brackets",
    answer3:"parenthesis",
    answer4:"square breackets",
    correct: "parenthesis",
}

const questionArray = [questionsOne, questionTwo, questionThree, questionFour, questionFive];

let currentQuestion=-1;

function insertQuestion() {
    document.getElementById("questions").innerHTML=questionArray[currentQuestion].question;
    document.getElementById("a").innerHTML=questionArray[currentQuestion].answer1;
    document.getElementById("b").innerHTML=questionArray[currentQuestion].answer2;
    document.getElementById("c").innerHTML=questionArray[currentQuestion].answer3;
    document.getElementById("d").innerHTML=questionArray[currentQuestion].answer4;
};

function nextPage() {
    currentQuestion++
    document.getElementById("start").innerText="Next";
    document.getElementById('start').setAttribute("disabled", "disabled");
    document.getElementById('a').removeAttribute("disabled");
    document.getElementById('b').removeAttribute("disabled");
    document.getElementById('c').removeAttribute("disabled");
    document.getElementById('d').removeAttribute("disabled");
    insertQuestion();
    document.getElementById("results").innerHTML="";
    
};

function answerClick(btnClicked){
    document.getElementById("start").removeAttribute("disabled");
    document.getElementById("a").setAttribute("disabled","disabled");
    document.getElementById("b").setAttribute("disabled","disabled");
    document.getElementById("c").setAttribute("disabled","disabled");
    document.getElementById("d").setAttribute("disabled","disabled");
    console.log(btnClicked.innerText);
    questionArray[currentQuestion].correct;
    
    let display;
    if (btnClicked.innerText==questionArray[currentQuestion].correct){
        display= "Correct!";
        
    } else {
        display= "Incorrect";
    }
    console.log(display);
    document.getElementById("results").innerHTML=display;
};



// //counter function//

// //final score displayed at end and form to enter name//

// //local storage to store final score and name//
// array of objects for questions 
// counter 
// highlight correct answer with explanation
// create next button
// if statements for if button is correct don't deduct from timer
// timer and high score on top of page
