let randomNumber = Math.floor(Math.random() * 100) + 1
let tries = 0 // Initialize tries counter

function checkGuess() {
  let userGuess = Number(document.getElementById("guessInput").value) // Convert input to number
  let message = document.getElementById("message")
  let attempts = document.getElementById("attempts")
  tries++; // Increment tries counter

  if (userGuess === randomNumber) {
    message.innerText = " Correct! You guessed the number."
    attempts.innerText = "Attempts: " + tries;
  } 
  else if (userGuess > randomNumber) {
    message.innerText = " Too High! Try again." // Corrected the typo here
  } 
  else {
    message.innerText = " Too Low! Try again."
  }
}
