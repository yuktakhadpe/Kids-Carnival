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

let currentQuestionIndex = 0;
let score = 0;
let totalTime = 60; // 30 seconds
let gameTimer;
let musicOn = true;

// ✅ English Spelling Questions
const questions = [
  { q: "Correct spelling of 🐘 ?", options: ["Elefant", "Elephant", "Eliphant", "Elephent"], answer: "Elephant" },
  { q: "Correct spelling of 🍌 ?", options: ["Bananna", "Banana", "Bannana", "Banan"], answer: "Banana" },
  { q: "Correct spelling of 🐱 ?", options: ["Cat", "Kat", "Cet", "Catt"], answer: "Cat" },
  { q: "Correct spelling of 🐶 ?", options: ["Dog", "Dogg", "Daug", "Doog"], answer: "Dog" },
  { q: "Correct spelling of 🦁 ?", options: ["Lion", "Liyon", "Lian", "Liun"], answer: "Lion" },
  { q: "Correct spelling of 🌳 ?", options: ["Tree", "Trea", "Trree", "Trei"], answer: "Tree" },
  { q: "Correct spelling of 🚗 ?", options: ["Car", "Kar", "Caar", "Carr"], answer: "Car" },
  { q: "Correct spelling of 🐦 ?", options: ["Brid", "Bird", "Beard", "Bierd"], answer: "Bird" },
  { q: "Correct spelling of 🐟 ?", options: ["Fish", "Fissh", "Fesh", "Phish"], answer: "Fish" },
  { q: "Correct spelling of 🍎 ?", options: ["Aple", "Apple", "Applle", "Appel"], answer: "Apple" },
  { q: "Correct spelling of 🐴 ?", options: ["Hors", "Horse", "Horze", "Horce"], answer: "Horse" },
  { q: "Correct spelling of 🌞 ?", options: ["Son", "Sun", "Sunn", "Suun"], answer: "Sun" },
  { q: "Correct spelling of 🌙 ?", options: ["Moon", "Mon", "Mooon", "Mone"], answer: "Moon" },
  { q: "Correct spelling of 🦆 ?", options: ["Duck", "Duk", "Duc", "Dukk"], answer: "Duck" },
  { q: "Correct spelling of 🐇 ?", options: ["Rabbit", "Rabitt", "Rabit", "Rabbet"], answer: "Rabbit" },
  { q: "Correct spelling of 🐍 ?", options: ["Snake", "Snak", "Sneak", "Snaek"], answer: "Snake" },
  { q: "Correct spelling of 🐝 ?", options: ["Bee", "Bea", "Bie", "Bhee"], answer: "Bee" },
  { q: "Correct spelling of 🍓 ?", options: ["Strawbery", "Strawberry", "Stawberry", "Strawberri"], answer: "Strawberry" },
  { q: "Correct spelling of 🍊 ?", options: ["Orang", "Orange", "Orrange", "Orrang"], answer: "Orange" },
  { q: "Correct spelling of 🥭 ?", options: ["Mango", "Mangoo", "Mangoe", "Mangou"], answer: "Mango" }
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
  totalTime = 60;
  timerElement.textContent = totalTime;

  gameTimer = setInterval(() => {
    totalTime--;
    timerElement.textContent = totalTime;

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
    correctSound.play();
    document.body.style.background = "linear-gradient(to bottom, #2dfd45ff, #fff947ff)";
  } else {
    wrongSound.play();
    document.body.style.background = "linear-gradient(to bottom, #f21f10ff, #ffeb3b)";
  }
  nextButton.style.display = "block";
}

function goNextQuestion() {
  document.body.style.background = "url('Maths.jpg') no-repeat center center fixed";
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
  document.getElementById("quiz-box").classList.add("hidden");
  resultBox.classList.remove("hidden");
  finalScoreElement.textContent = `🎉Your Score: ${score}/${questions.length}🎉`;
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

// Start on load
startGame();
