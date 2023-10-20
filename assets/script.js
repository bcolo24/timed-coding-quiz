const questions = [
    {
        question: "What does DOM stand for?",
        answers: [
            { text: "A. Data Orientation Model", correct: false},
            { text: "B. Document Object Model", correct: true},
            { text: "C. Document Orientation Model", correct: false},
            { text: "D. Data Only Model", correct: false},
        ]
    },
    {
        question: "What command allows you to create a directory?",
        answers: [
            { text: "A. touch", correct: false},
            { text: "B. mv", correct: false},
            { text: "C. cd", correct: false},
            { text: "D. mkdir", correct: true},
        ]
    },
    {
        question: "Which of the following flex properties is associated with a child element?",
        answers: [
            { text: "A. justify-content", correct: false},
            { text: "B. flew-grow", correct: true},
            { text: "C. align-items", correct: false},
            { text: "D. flex-flow", correct: false},
        ]
    },
    {
        question: "Which of the following goes inside of an <a> tag?",
        answers: [
            { text: "A. href=", correct: true},
            { text: "B. rel=", correct: false},
            { text: "C. alt=", correct: false},
            { text: "D. src=", correct: false},
        ]
    },
    {
        question: "Which of the following is an example of a pseudo element?",
        answers: [
            { text: "A. :hover", correct: false},
            { text: "B. nth-child", correct: false},
            { text: "C. ::after", correct: true},
            { text: "D. focus", correct: false},
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
            answerButton.classList.add("answer-btn");
            answerButton.addEventListener("click", () => chooseAnswer(index));
            answersElement.appendChild(answerButton);
        });
    }
}


// element.setAttribute("id", "hello") to change button appearance


function chooseAnswer(selectedIndex) {
     if (currentQuestion < questions.length - 1) {
         currentQuestion++;
         showQuestion(currentQuestion);

     } else {
        
    }
}

function chooseAnswer(selectedIndex) {
    checkAnswer(selectedIndex);
}

function checkAnswer(selectedIndex) {
    const currentQuestionObj = questions[currentQuestion];
    const selectedAnswer = currentQuestionObj.answers[selectedIndex];
    
    if (selectedAnswer.correct) {
        // Correct answer handling
        showFeedback(true); // Show "Correct" feedback
    } else {
        // Incorrect answer handling
        showFeedback(false); // Show "Incorrect" feedback
    }

    // Automatically move to the next question after a short delay
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion(currentQuestion);
            hideFeedback();
        } else {
            // Handle end of the quiz
            questionElement.textContent = "Quiz complete!";
            answersElement.innerHTML = "";
            nextButton.style.display = "none";
        }
    }, 500); // Adjust the delay (2000 milliseconds = 2 seconds) as needed
}


function showFeedback(isCorrect) {
    const feedbackElement = document.createElement("p");
    feedbackElement.textContent = isCorrect ? "Correct!" : "Incorrect.";
    feedbackElement.classList.add(isCorrect ? "correct-feedback" : "incorrect-feedback");
    answersElement.appendChild(feedbackElement);
}

// function hideFeedback() {
//     const feedbackElements = answersElement.querySelectorAll("p.correct-feedback, p.incorrect-feedback");
//     feedbackElements.forEach((element) => {
//         element.style.display = "none";
//     });
// }







