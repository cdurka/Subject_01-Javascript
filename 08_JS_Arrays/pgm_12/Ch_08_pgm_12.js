var displayQuestion = function (questionAndAnswer) {
    var options = [ "A", "B", "C", "D", "E" ];
    console.log(questionAndAnswer.question);

    questionAndAnswer.answers.forEach(function(answer, i) {
        console.log(options[i] + " - " + answer);
    });
};

var question1 = {
    question: "What is the capital of France?",
    answers: [
        "Bordeaux",
        "F",
        "Paris",
        "Brussels"
    ],
    correctAnswer: "Paris"
};



















//add two more question objects
var question2 = {
    question: "Which planet is known as the Red Planet?",
    answers: [
        "Venus",
        "Mars",
        "Jupiter",
        "Saturn"
    ],
    correctAnswer: "Mars"
};

var question3 = {
    question: "Who painted the Mona Lisa?",
    answers:[
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Vincent van Gogh",
        "Claude Monet"
    ],
    correctAnswer: "Leonardo da Vinci"
};

//create an array with your question objects
var questions = [question1, question2, question3];

//use forEach to call displayQuestion on each of your questions

    questions.forEach(function(question, index) {
        console.log("\nQuestion " + (index + 1) + ":");
        displayQuestion(question);
    })