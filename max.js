const question = [
    {
        question: "which is largest amimal in the world ?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whele", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraff", correct: false },
        ]
    },

    {
        question: "which is largest  country in the world ?",
        answers: [
            { text: "india", correct: false },
            { text: "Russia", correct: true },
            { text: "America", correct: false },
            { text: "Canda", correct: false },
        ]
    },

    {
        question: "which is largest tower in the world ?",
        answers: [
            { text: "Burjee ", correct: true },
            { text: "Alii", correct: false },
            { text: "Twini", correct: false },
            { text: "Uhana", correct: false },
        ]
    },

    {
        question: "which is fastest bike in the world ?",
        answers: [
            { text: "Nija ", correct: true },
            { text: "R15", correct: false },
            { text: "BMW", correct: false },
            { text: " KTM", correct: false },
        ]
    },

    {
        question: "which is the valueable passport in the world ?",
        answers: [
            { text: "Saudi", correct: false },
            { text: "Singapur", correct: true },
            { text: "Tawina", correct: false },
            { text: "India", correct: false },
        ]
    },
];

const questonElement = document.getElementById("question");
const answerButton = document.getElementById("answer-btn");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;

    nextButton.innerHTML = "next";
    showQuestion();
}

function showQuestion() {

    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNO = currentQuestionIndex + 1;
    questonElement.innerHTML = questionNO + ".  " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}


function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}



function selectAnswer(e) {
    const selectedBtn = e.target;

    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;

    }
    else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {

        if (button.dataset.correct === "true") {
            button.classList.add("correct");

        }
        button.disabled = true;


    });
    nextButton.style.display = "block";
}

function showscore() {
    resetState();
    questonElement.innerHTML = `Your score is now ${score} out of ${question.length} !!`;
    nextButton.innerHTML = "PLAY BOY LETS  PLAY AGAIN";
    nextButton.style.display = "block";
}


function handelNextbutton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < question.length) {
        showQuestion();
    }
    else {
        showscore();
    }

}

nextButton.addEventListener("click", () => {

    if (currentQuestionIndex < question.length) {
        handelNextbutton();

    }
    else {
        startQuiz();
    }

});

startQuiz();
