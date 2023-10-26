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
let timer;
let timeLeft = 60;
let userScore = 0;
let timeTaken = 0;

const startButton = document.getElementById("start-btn");
const quizScreen = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next");
const startScreen = document.getElementById("startScreen");
const endScreen= document.getElementById("endScreen");
const highScoreForm = document.getElementById("high-score-form");
const playerNameInput = document.getElementById("initials");
const highScoreList = document.getElementById("high-score-list");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

function startQuiz() {
    // Hide the title screen and show the quiz
    startScreen.remove();
    endScreen.style.display = "none";
    quizScreen.style.display = "block";
    currentQuestion = 0;
    showQuestion(currentQuestion);
    startTimer();
}
endScreen.style.display = "none";
highScoreList.style.display="none";


function startTimer() {
    timer = setInterval(function (){
        timeLeft--;
        document.getElementById("countdown").textContent = timeLeft;

        if (timeLeft <= 0 || currentQuestion === questions.length) {
            clearInterval(timer);
            quizScreen.style.display = "none";
            endScreen.style.display = "block";
            questionElement.style.display = "none";
            answersElement.style.display = "none";
            userScore = timeLeft;
            // Display the user's score
            document.getElementById("score-value").textContent = userScore;
            
        }
    }, 1000);
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
        timeLeft -= 10;
    }

    // Automatically move to the next question after a short delay
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion(currentQuestion);

        } else {
            //End of the quiz
            quizScreen.style.display= "none";
            endScreen.style.display = "block";
        }
    }, 500); // seconds in milliseconds
}


function showFeedback(isCorrect) {
    const feedbackElement = document.createElement("p");
    feedbackElement.textContent = isCorrect ? "Correct!" : "Incorrect.";
    feedbackElement.classList.add(isCorrect ? "correct-feedback" : "incorrect-feedback");
    answersElement.appendChild(feedbackElement);
}

function displayHighScores() {
    highScoreList.innerHTML = "";
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.sort((a, b) => b.score - a.score); // high scores in descending order
    highScores.forEach((score, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${score.name} - ${score.score}`;
        highScoreList.appendChild(listItem);
    });
}

highScoreForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from actually submitting

    endScreen.style.display ="none";
    const playerName = playerNameInput.value;
    const playerScore = userScore; 
    highScoreList.style.display = "block";
     // Store the high score in local storage
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    // Add the new high score
    highScores.push({ name: playerName, score: playerScore });
    //Store in local storage
    localStorage.setItem("highScores", JSON.stringify(highScores));
    displayHighScores();
     // Show the high scores container
 });
 
 
 // Call this function to display the initial high scores
 displayHighScores();