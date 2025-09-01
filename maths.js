const questionElement = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const finalScoreElement = document.getElementById("final-score");

const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");
const bgMusic = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

const timerElement = document.getElementById("time");
const progressBar = document.getElementById("progress");

let currentQuestionIndex = 0;
let score = 0;
let musicOn = true;
let totalTime = 30; 
let gameTimer;

// ✅ Mix of one-digit & two-digit questions
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

// 🎮 Start game
function startGame() {
  currentQuestionIndex = 0;
  score = 0;
  resultBox.classList.add("hidden");
  document.getElementById("quiz-box").classList.remove("hidden");
  startGameTimer();   // ✅ start countdown
  showQuestion();
}

// ⏳ Global Game Timer (1 minute)
function startGameTimer() {
  clearInterval(gameTimer);
  totalTime = 30; // reset
  timerElement.textContent = totalTime;

  gameTimer = setInterval(() => {
    totalTime--;
    timerElement.textContent = totalTime;
    progressBar.style.width = (totalTime / 30) * 100 + "%"; // ✅ update progress bar

    if (totalTime <= 0) {
      clearInterval(gameTimer);
      showResult(); // ✅ end game
    }
  }, 1000);
}

// 📖 Show current question
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

// 🔄 Reset for next question
function resetState() {
  nextButton.style.display = "none";
  answersContainer.innerHTML = "";
}

// ✅ Handle Answer Selection
function selectAnswer(selected, correct) {
  if (selected === correct) {
    score++;
    correctSound.play();
    document.body.style.background = "linear-gradient(to bottom, #0dfe29ff, #fff947ff)";
    showBanana();
  } else {
    wrongSound.play();
    document.body.style.background = "linear-gradient(to bottom, #f21f10ff, #ffeb3b)";
  }
  nextButton.style.display = "block";
}

// 🎉 Banana Animation
function showBanana() {
  const banana = document.createElement("div");
  banana.classList.add("banana");
  banana.textContent = "Huraah!";
  banana.style.left = Math.random() * 80 + "vw";
  banana.style.top = "60vh";
  document.body.appendChild(banana);

  setTimeout(() => banana.remove(), 1500);
}

// ➡️ Next Question
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

// 📊 Show Result
function showResult() {
  clearInterval(gameTimer);
  document.getElementById("quiz-box").classList.add("hidden");
  resultBox.classList.remove("hidden");
  finalScoreElement.textContent = `🎉 Your Score: ${score}/${questions.length} 🎉`;
}

// 🔁 Restart
function restartGame() {
  startGame();
}

// 🎵 Music Toggle
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

// 🚀 Start game on load
startGame();




