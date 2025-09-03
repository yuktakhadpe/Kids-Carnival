const questionElement = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const finalScoreElement = document.getElementById("final-score");

const bgMusic = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

const timerElement = document.getElementById("time");
const progressBar = document.getElementById("progress");

let currentQuestionIndex = 0;
let score = 0;
let musicOn = true;
let totalTime = 30; 
let gameTimer;


const questions = [
  { q: "5 + 3 = ?", options: [6, 8, 9, 7], answer: 8 },
  { q: "12 - 7 = ?", options: [4, 5, 6, 7], answer: 5 },
  { q: "9 * 2 = ?", options: [18, 19, 20, 17], answer: 18 },
  { q: "14 / 2 = ?", options: [6, 7, 8, 9], answer: 7 },
  { q: "7 + 11 = ?", options: [16, 17, 18, 19], answer: 18 },
  { q: "20 - 9 = ?", options: [10, 11, 12, 13], answer: 11 },
  { q: "6 * 3 = ?", options: [16, 17, 18, 19], answer: 18 },
  { q: "24 / 4 = ?", options: [5, 6, 7, 8], answer: 6 },
  { q: "81 / 9 = ?", options: [6, 7, 8, 9], answer: 9 }
];

function startGame() {
  currentQuestionIndex = 0;
  score = 0;
  resultBox.classList.add("hidden");
  document.getElementById("quiz-box").classList.remove("hidden");
  startGameTimer(); 
  showQuestion();
}

function startGameTimer() {
  clearInterval(gameTimer);
  totalTime = 30;
  timerElement.textContent = totalTime;

  gameTimer = setInterval(() => {
    totalTime--;
    timerElement.textContent = totalTime;
    progressBar.style.width = (totalTime / 30) * 100 + "%"; 

    if (totalTime <= 0) {
      clearInterval(gameTimer);
      showResult();
    }
  }, 1000);
}

function showQuestion() {
  resetState();

  let current = questions[currentQuestionIndex];
  questionElement.textContent = current.q;

  current.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => selectAnswer(option, current.answer);
    answersContainer.appendChild(button);
  });
}


function resetState() {
  nextButton.style.display = "none";
  answersContainer.innerHTML = "";
}

function selectAnswer(selected, correct) {
  if (selected === correct) {
    score++;
    document.body.style.background = "linear-gradient(to bottom, #0dfe29ff, #fff947ff)";
  } else {
    document.body.style.background = "linear-gradient(to bottom, #f21f10ff, #ffeb3b)";
  }
  nextButton.style.display = "block";
}



function goNextQuestion() {
  document.body.style.background = "url('Maths_bg.png') no-repeat center center fixed";
  document.body.style.backgroundSize = "cover";
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

nextButton.addEventListener("click", goNextQuestion);

function showResult() {
  clearInterval(gameTimer);
  document.getElementById("quiz-box").classList.add("hidden");
  resultBox.classList.remove("hidden");
  finalScoreElement.textContent = `🎉 Your Score: ${score}/${questions.length} 🎉`;
}


function restartGame() {
  startGame();
}


musicBtn.addEventListener("click", () => {
  if (musicOn) {
    bgMusic.pause();
    musicBtn.textContent = "🔇 Music: Off";
  } else {
    bgMusic.play();
    musicBtn.textContent = "🔊 Music: On";
  }
  musicOn = !musicOn;
});


startGame();




