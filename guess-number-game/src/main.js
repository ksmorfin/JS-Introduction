let secretNumber = generateNumber();
let attempts = 0;

const input = document.querySelector("#guessInput");
const button = document.querySelector("#guessBtn");
const message = document.querySelector("#message");
const attemptsText = document.querySelector("#attempts");
const resetBtn = document.querySelector("#resetBtn");

function generateNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

button.addEventListener("click", () => {
  const userGuess = Number(input.value);

  if (!userGuess) {
    message.textContent = "Please enter a valid number.";
    return;
  }

  attempts++;

  if (userGuess === secretNumber) {
    message.textContent = "🎉 Correct! You guessed it!";
  } else if (userGuess > secretNumber) {
    message.textContent = "📉 Too high!";
  } else {
    message.textContent = "📈 Too low!";
  }

  attemptsText.textContent = `Attempts: ${attempts}`;
});

resetBtn.addEventListener("click", () => {
  secretNumber = generateNumber();
  attempts = 0;
  input.value = "";
  message.textContent = "";
  attemptsText.textContent = "";
});