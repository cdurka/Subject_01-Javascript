var QuizQuestion = function (question, answer) {
    this.question = question;
    this.answer = answer;
    this.options = [];

    this.addOption = function (option) {
        this.options.push(option);
    };
    this.showQuestion = function () {
        console.log(this.question);

        this.options.forEach(function(option, i) {
            console.log("(" + (i + 1) + ") " + option);
        });
    };
};

var question1 = new QuizQuestion("What is the capital of France?","Paris");

question1.addOption("Bordeaux");
question1.addOption("F");
question1.addOption("Paris");
question1.addOption("Brussels");
question1.addOption("Lyon");

question1.showQuestion();

//create second question
var question2 = new QuizQuestion("What is the largest planet in our Solar System?", "Jupiter");

question2.addOption("Earth");
question2.addOption("Jupiter");
question2.addOption("Mars");
question2.addOption("Venus");
question2.addOption("Saturn");

//create third question
var question3 = new QuizQuestion("What is the boiling point of water?", "100deg C");

question3.addOption("90deg C");
question3.addOption("100deg C");
question3.addOption("110deg C");
question3.addOption("120deg C");
question3.addOption("130deg C");
