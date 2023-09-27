const quizData = [
    {
        question: "What is the capital of France?",
        options: {
            A: "London",
            B: "Berlin",
            C: "Paris"
        },
        correctAnswer: "C"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: {
            A: "Mars",
            B: "Jupiter",
            C: "Earth"
        },
        correctAnswer: "B"
    },
    {
        question: "What is the chemical symbol for water?",
        options: {
            A: "H2O",
            B: "CO2",
            C: "O2"
        },
        correctAnswer: "A"
    }
];

const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const optionAElement = document.getElementById("optionA");
const optionBElement = document.getElementById("optionB");
const optionCElement = document.getElementById("optionC");
const resultElement = document.getElementById("result");
const quizForm = document.getElementById("quiz-form");

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionAElement.textContent = currentQuestion.options.A;
    optionBElement.textContent = currentQuestion.options.B;
    optionCElement.textContent = currentQuestion.options.C;
}

function checkAnswer(answer) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (answer === currentQuestion.correctAnswer) {
        score++;
    }
}

function showResult() {
    resultElement.textContent = `You scored ${score} out of ${quizData.length}!`;
}

loadQuestion();

quizForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert("Please select an answer.");
        return;
    }
    const answer = selectedAnswer.value;
    checkAnswer(answer);
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
});