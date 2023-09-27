const quizQuestions = [
    {
        question: "test1",
        answers: {
            A: "test1",
            B: "test1",
            C: "test1",
            D: "test1",
        },
        correctAnswer: 'A'
    },
    {
        question: "test2",
        answers: {
            A: "test2",
            B: "test2",
            C: "test2",
            D: "test2",
        },
        correctAnswer: 'C'
    },
    {
        question: "test3",
        answers: {
            A: "test3",
            B: "test3",
            C: "test3",
            D: "test3",
        },
        correctAnswer: 'B'
    }
];

let score = 0;
let currentQuestionIndex = 0;

const startQuiz = () => {
    if (currentQuestionIndex < quizQuestions.length) {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        const quizContainer = document.getElementById("quiz-content");
        const answers = currentQuestion.answers;

        const quizHTML = `
            <p>Question ${currentQuestionIndex + 1}:</p>
            <h1>${currentQuestion.question}</h1>
            <form id="quiz-form">
                ${Object.keys(answers).map((key) => `
                    <label>
                        <input type="radio" name="answer" value="${key}">
                        <span>${answers[key]}</span>
                    </label><br>
                `).join('')}
                <br>
                <button type="submit">Submit</button>
            </form>
        `;

        quizContainer.innerHTML = quizHTML;

        const quizForm = document.getElementById("quiz-form");
        quizForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const selectedAnswer = document.querySelector('input[name="answer"]:checked');
            if (!selectedAnswer) {
                alert("Please select an answer.");
                return;
            }
            const answer = selectedAnswer.value;
            checkAnswer(answer);
        });
    } else {
        showResult();
    }
}

const checkAnswer = (answer) => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (answer === currentQuestion.correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    startQuiz();
}
const reset = () => {
    score = 0;
    currentQuestionIndex = 0;
    startQuiz();
}

const showResult = () => {
    let highScore = localStorage.getItem("highscore");
    if (highScore === null) {
        highScore = 0;
      }
    const quizContainer = document.getElementById("quiz-content");
    quizContainer.innerHTML = `<p>You scored ${score} out of ${quizQuestions.length}!</p> <button id="again">Try Again</button>`;
    if(score > highScore) {
        localStorage.setItem("Highscore", score);
        alert(" You got the new highscore of " + score + " !");
    }else {
        alert(" You did not beat the high score of " + highScore + ". Maybe next time!");
    }

    const againEL = document.getElementById("again");
    againEL.addEventListener('click', reset);
}

const highScore = () => {
    localStorage.setItem("highscore", score);
}

startQuiz();