//object to represent a multiple-choice quiz question
var question1;
var question2;
var question3;
var question;
var showQuestionInfo;

question1 = {
    questionText: "What is the capital of France?",
    options: ["A) Paris", "B) London","C) Rome", "D) Berlin"],
    answer: "A"
};
question2 = {
    questionText: "Which planet is known  as the Red Planet?",
    options: ["A) Harper Lee", "B) J.K Rowling", "C) Jane Austen", "D) Mark Twain"],
    answer: "A"
};
question3 = {
    questionText: "Who wrote 'To Kill a Mockingbird'?",
    options: ["A) Harper Lee", "B) J.K. Rowling", "C) Jane Austen", "D) Mark Twain"],
    answer: "A"
}

//two more quiz and create a function to show
showQuestionInfo = function () {
    console.log("Question: " + question.questionText);
    console.log("Options: ");
    for (var i = 0; i < question.options.length; i++) {
        console.log(question.options[i]);
    }
    console.log("Answer: " + question.answer);
    console.log("--------------------------------------");
};

//display all three
question = question1;
showQuestionInfo();
question = question2;
showQuestionInfo();
question = question3;
showQuestionInfo();