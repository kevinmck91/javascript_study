var score = 0;
var currentQuestion = 0;
var answerArray = [];

var questions = [{
        question: "What is the capital of the France?",
        choices: ["Paris", "Bordeaux", "Lille", "La Rochelle"],
        correctAnswer: 0
    },
    {
        question: "What is the capital of the United Kingdom?",
        choices: ["Manchester", "Manchester", "London", "Manchester"],
        correctAnswer: 2
    },
    {
        question: "What is the capital of the USA?",
        choices: ["NYC", "NYC", "NYC", "Washington"],
        correctAnswer: 3
    },
    {
        question: "What is the capital of Ireland?",
        choices: ["Cork", "Dublin", "Cork", "Cork"],
        correctAnswer: 1
    }
]


function displayQuestion() {
    document.getElementById("questionNumber").innerHTML = "Question Number " + (currentQuestion + 1);
    //Displays the current question
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    //Displays all the different choices
    document.getElementById("0").innerHTML = questions[currentQuestion].choices[0];
    document.getElementById("1").innerHTML = questions[currentQuestion].choices[1];
    document.getElementById("2").innerHTML = questions[currentQuestion].choices[2];
    document.getElementById("3").innerHTML = questions[currentQuestion].choices[3];
}

function submit() {

    var radiobutton = document.querySelector('input[name = "answer"]:checked').value;

    radiobutton = parseInt(radiobutton)

    //If Answer is Correct
    if (radiobutton == questions[currentQuestion].correctAnswer) {
        document.getElementById("answerConfirmation").innerHTML = "Correct";
        currentQuestion++;
        score++;
        var scoreText = score + "/" + questions.length;
        document.getElementById("score").innerHTML = scoreText;
        answerArray.push(" Correct");
        if (currentQuestion >= questions.length) {
            tally();
        } else {
            displayQuestion()
        }

    }
    //If Answer is Wrong
    else {
        document.getElementById("answerConfirmation").innerHTML = "Wrong";
        currentQuestion++;
        var scoreText = score + "/" + questions.length;
        document.getElementById("score").innerHTML = scoreText;
        if (currentQuestion >= questions.length) {
            tally();
        } else {
            displayQuestion()
        }
    }

}

function tally() {
    document.getElementById("answerConfirmation").innerHTML = "";
    document.getElementById("score").innerHTML = "";
    document.getElementById("questionNumber").innerHTML = "";
    document.getElementById("question").innerHTML = "";
    document.getElementById("0").innerHTML = "";
    document.getElementById("1").innerHTML = "";
    document.getElementById("2").innerHTML = "";
    document.getElementById("3").innerHTML = "";
    $("#inputAndButton").hide()

    document.getElementById("score").innerHTML = "Your Score = " + score + "/" + questions.length;
}