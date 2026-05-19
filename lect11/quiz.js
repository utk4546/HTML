const questions = [

  {

    question: "HTML ka full form kya hai?",

    answers: [

      "Hyper Text Markup Language",

      "High Text Machine Language",

      "Hyper Tabular Markup Language",

      "Home Tool Markup Language"

    ],

    correct: 0

  },



  {

    question: "CSS ka use kisliye hota hai?",

    answers: [

      "Database",

      "Styling",

      "Backend",

      "Compiler"

    ],

    correct: 1

  },



  {

    question: "JavaScript kisliye use hoti hai?",

    answers: [

      "Design",

      "Animation only",

      "Website ko interactive banane ke liye",

      "Database"

    ],

    correct: 2

  },



  {

    question: "Python kya hai?",

    answers: [

      "Programming Language",

      "Browser",

      "Operating System",

      "Game"

    ],

    correct: 0

  },



  {

    question: "Internet ka full form kya hai?",

    answers: [

      "Internal Network",

      "Interconnected Network",

      "Inter Net",

      "Network System"

    ],

    correct: 1

  }

];



let currentQuestion = 0;
let score = 0;

const questionText = document.querySelector("h2");
const options = document.querySelector(".options");
const scoreText = document.querySelector(".top-info p");
const questionCount = document.querySelector(".question-count");
const nextBtn = document.querySelector(".next-btn");
const timerText = document.querySelector(".timer");

let timeLeft = 15;
let timer;

function startTimer() {

  clearInterval(timer);

  timeLeft = 15;

  timerText.innerHTML = `⏱ ${timeLeft}s`;

  timer = setInterval(() => {

    timeLeft--;

    timerText.innerHTML = `⏱ ${timeLeft}s`;

    if (timeLeft <= 0) {

      clearInterval(timer);

      currentQuestion++;

      if (currentQuestion < questions.length) {

        loadQuestion();

      } else {

        showResult();
      }
    }

  }, 1000);
}

function loadQuestion() {

  let q = questions[currentQuestion];

  questionText.innerText = q.question;

  questionCount.innerText =
    `Question ${currentQuestion + 1} of ${questions.length}`;

  options.innerHTML = "";

  q.answers.forEach((answer, index) => {

    const button = document.createElement("button");

    button.innerText = answer;

    button.classList.add("option");

    button.addEventListener("click", () => checkAnswer(index, button));

    options.appendChild(button);
  });

  startTimer();
}

function checkAnswer(index, button) {

  clearInterval(timer);

  const correctAnswer = questions[currentQuestion].correct;

  const allOptions = document.querySelectorAll(".option");

  allOptions.forEach(btn => {
    btn.disabled = true;
  });

  if (index === correctAnswer) {

    button.style.background = "#c8fff0";
    button.style.borderColor = "#00b894";

    score++;

    scoreText.innerHTML = `<strong>Score:</strong> ${score}`;

  } else {

    button.style.background = "#ffd6d6";
    button.style.borderColor = "red";

    allOptions[correctAnswer].style.background = "#c8fff0";
    allOptions[correctAnswer].style.borderColor = "#00b894";
  }
}

nextBtn.addEventListener("click", () => {

  clearInterval(timer);

  currentQuestion++;

  if (currentQuestion < questions.length) {

    loadQuestion();

  } else {

    showResult();
  }
});

function showResult() {

  document.querySelector(".quiz-container").innerHTML = `
  
    <h1 style="text-align:center; color:#1f3bb3;">
      Quiz Completed 🎉
    </h1>

    <h2 style="text-align:center; margin-top:20px;">
      Your Score: ${score}/${questions.length}
    </h2>

  `;
}

loadQuestion();