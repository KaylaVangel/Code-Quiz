//onclick start quiz button new question comes up with 4 buttons with potential answers and timer begins//

//set up questions//
const questionsOne = {
    question: "Commonly used data types DO NOT include:",
    answer1: "strings",
    answer2: "booleans",
    answer3: "alerts",
    answer4: "numbers",

}

const questionTwo = {
    question: "A very useful took used during development and debugging for printing content to the debugger is",
    answer1: "JavaScript",
    answer2: "terminal/bash",
    answer3: "for loops",
    answer4: "console log",
}

const questionThree = {
    question: "String values must be enclosed within_ when being assigned to variables.",
    answer1: "commas",
    answer2: "curly brackets",
    answer3: "quotes",
    answer4: "parenthesis",
}

const questionFour = {
    question: "Arrays in Javascript can be used to store _.",
    answer1: "numbers and strings",
    answer2: "other arrays",
    answer3: "boolleans",
    answer4: "all of the above",
}

const questionArray = [questionsOne, questionTwo, questionThree, questionFour]



let currentQuestion=0
function nextPage() {
   // set the question data in the html//
    console.log(questionArray[currentQuestion])
    currentQuestion++
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
