let randomNumber = Math.floor(Math.random() * 10) + 1;
let guess;
let attempts = 0;

while (guess !== randomNumber) {
  guess = Number(prompt("Guess a number between 1 to 10"))
  attempts++;

  if (guess < randomNumber) {
    alert("Too Low!")
  }
  else if (guess > randomNumber) {
    alert("Too High!")
  }
  else {
    alert(" Correct! You guessed in " + attempts + " attempts.")
  }
}
