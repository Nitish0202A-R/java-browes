// Stone Paper Scissors Game

let user = prompt("Choose: stone, paper, scissors").toLowerCase();

let choices = ["stone", "paper", "scissors"];
let computer = choices[Math.floor(Math.random() * 3)];

console.log("User choice:", user);
console.log("Computer choice:", computer);

if (user === computer) {
    console.log("Match Draw ");
}
else if (
    (user === "stone" && computer === "scissors") ||
    (user === "paper" && computer === "stone") ||
    (user === "scissors" && computer === "paper")
) {
    console.log("You Win ");
}
else {
    console.log("Computer Wins ");
}
