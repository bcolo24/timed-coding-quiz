const questions = [
    {
        question: "What does DOM stand for?",
        answers: [
            { text: "Data Orientation Model", correct: false},
            { text: "Document Object Model", correct: true},
            { text: "Document Orientation Model", correct: false},
            { text: "Data Only Model", correct: false},
        ]
    },
    {
        question: "What command allows you to create a directory?",
        answers: [
            { text: "touch", correct: false},
            { text: "mv", correct: false},
            { text: "cd", correct: false},
            { text: "mkdir", correct: true},
        ]
    },
    {
        question: "Which of the following flex properties is associated with a child element?",
        answers: [
            { text: "justify-content", correct: false},
            { text: "flew-grow", correct: true},
            { text: "align-items", correct: false},
            { text: "flex-flow", correct: false},
        ]
    },
    {
        question: "Which of the following goes inside of an <a> tag?",
        answers: [
            { text: "href=", correct: true},
            { text: "rel=", correct: false},
            { text: "alt=", correct: false},
            { text: "src=", correct: false},
        ]
    },
    {
        question: "Which of the following is an example of a pseudo element?",
        answers: [
            { text: ":hover", correct: false},
            { text: "nth-child", correct: false},
            { text: "::after", correct: true},
            { text: "focus", correct: false},
        ]
    }
];

let currentQuestion = -1; // Initialize with -1 to indicate the title screen
const startButton = document.getElementById("start-btn");
const quizScreen = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next");
const startScreen = document.getElementById("startScreen");

function startQuiz() {
    // Hide the title screen and show the quiz
    startScreen.remove();
    // quizScreen.append(questions);
    // quiz.style.display = "block";
    quizScreen.style.display = "block";
    currentQuestion = 0;
    showQuestion(currentQuestion);
}

startButton.addEventListener("click", function () {
    startQuiz();
});

// Shuffle the questions array before starting the quiz
shuffleArray(questions);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showQuestion(questionIndex) {
    if (questionIndex === -1) {
        
    } else {
        // Display a quiz question
        const question = questions[questionIndex];
        questionElement.textContent = question.question;
        answersElement.innerHTML = "";

        question.answers.forEach((answer, index) => {
            const answerButton = document.createElement("button");
            answerButton.textContent = answer.text;
            answerButton.addEventListener("click", () => checkAnswer(index));
            answersElement.appendChild(answerButton);
        });
    }
}

function checkAnswer(selectedIndex) {
    // Add your logic for checking the answer here
    // You can compare the selected answer with the correct answer

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    } else {
        // Quiz is finished
        // questionElement.textContent = "Quiz complete!";
        // answersElement.innerHTML = "";
        // nextButton.style.display = "none";
    }
}

// Auto-progression to the next question without a "Next" button
// for (let i = 0; i < questions.length; i++) {
//     (function (questionIndex) {
//         setTimeout(function () {
//             showQuestion(questionIndex);
//         }, i * 5000); // Adjust the delay (5000 milliseconds = 5 seconds) between questions
//     })(i);
// }