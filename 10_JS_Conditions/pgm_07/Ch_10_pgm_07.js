// Checking quiz answers

var getQuiz = function () {
    var score = 0,
        qIndex = 0,
        inPlay = true,
        questions,
        next,
        getQuestion,
        checkAnswer,
        submit;
      
    questions = [
      {
        question: "What is the highest mountain in the world?",
        answer: "Everest"
      },
      {
        question: "What is the highest mountain in Scotland?",
        answer: "Ben Nevis"
      }
    ];
    
    next = function () {
      qIndex = qIndex + 1;
      
      if (qIndex >= questions.length) {
        inPlay = false;
        console.log("You have finished the quiz.");
      }
    };
    
    getQuestion = function () {
      if (inPlay) {
        return questions[qIndex].question;
      } else {
        return "You have finished the quiz.";
      }
    };
    
    checkAnswer = function (userAnswer) {
      if (userAnswer === questions[qIndex].answer) {
        console.log("Correct!");
        score = score + 1;
      } else {
        console.log("No, the answer is " + questions[qIndex].answer);
      }
    };
    
    submit = function (userAnswer) {
      var message = "You have finished the quiz.";
      
      if (inPlay) {
        checkAnswer(userAnswer);
        next();
        message = "Your score is " + score + " out of " + qIndex;
      }
        
      return message;
    };
    
    return {
      quizMe: getQuestion,
      submit: submit
    };
  };
  
  var quiz = getQuiz();


  //add some more questions and performing challenge

  var getQuiz = function () {
    var score = 0,
    qIndex = 0,
    inPlay = true,
    questions,
    next,
    getQuestion,
    checkAnswer,
    getHint,
    submit;

    questions = [
        {
            question: "What is the highest mountain in the world?",
            answer: "Everest",
            hint: "It's in the Himalayas."
        },
        {
            question: "What is the highest mountain in Scotland?",
            answer: "Ben Nevis",
            hint: "It's near Fort William."
        },
        {
            question: "What is the capital of France?",
            answer: "Paris",
            hint: "It's known as the City of Light."
        },
        {
            question: "What is the largest ocean on Earth?",
            answer: "Pacific",
            hint: "It covers more than 63 million square miles."
        }
    ];

    next = function () {
        qIndex = qIndex + 1;

        if (qIndex >= questions.length)
        {
            inPlay = false;
            console.log("You have finished the quiz.");
        }
    };
    getQuestion = function () {
        if(inPlay) {
            return questions[qIndex].question;
        } else {
            return "You have finished the quiz.";
        }
    };

    checkAnswer = function (userAnswer) {
        if (userAnswer === questions[qIndex].answer) {
            console.log("Correct!");
            score = score + 1;
        } else {
            console.log("No, the answer is " + questions[qIndex].answer);
        }
    };

    getHint = function () {
        if (inPlay) {
            return questions[qIndex].hint;
        } else {
            return "You have finished the quiz.";
        }
    };

    submit = function (userAnswer) {
        var message = "You have finished the quiz.";
        if (inPlay) {
            checkAnswer(userAnswer);
            next();
            message = "Your score is " + score + " out of " + qIndex;
        }

        return message;
    };

    return {
        quizMe: getQuestion,
        submit: submit,
        helpMe: getHint
    };
  };

  var quiz = getQuiz();