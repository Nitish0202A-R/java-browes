let randomNumber = Math.floor(Math.random() * 100) + 1
let tries = 0

function checkGuess() {
  let userGuess = Number(document.getElementById("guessInput").value)
  let message = document.getElementById("message")
  let attempts = document.getElementById("attempts")

  tries++;

  if (userGuess === randomNumber) {
    message.innerText = " Correct! You guessed the number."
    attempts.innerText = "Attempts: " + tries;
  } 
  else if (userGuess > randomNumber) {
    message.innerText = " Too High! Try again."
  } 
  else {
    message.innerText = " Too Low! Try again."
  }
}
