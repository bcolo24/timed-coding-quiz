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

//to shuffle the questions array
// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

//to shuffle the questions array before starting the quiz
// shuffleArray(questions);

// let currentQuestion = -1; // Initialize with -1 to indicate the title screen
// const titleScreen = document.getElementById("title-screen");
// const questionScreen = document.getElementById("question-screen");
// const startButton = document.getElementById("startButton");
// const questionElement = document.getElementById("question");
// const answersElement = document.getElementById("answers");
// const nextButton = document.getElementById("next");