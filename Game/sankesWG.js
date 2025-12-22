const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Choose: snake, water or gun : ", function (user) {

    user = user.toLowerCase();
    let choices = ["snake", "water", "gun"]
    let computer = choices[Math.floor(Math.random() * 3)]

    console.log("User choice:", user)
    console.log("Computer choice:", computer)

    if (user === computer) {
        console.log("Result: Draw ")
    }
    else if (
        (user === "snake" && computer === "water") ||
        (user === "water" && computer === "gun") ||
        (user === "gun" && computer === "snake")
    ) {
        console.log("Result You Win ")
    }
    else {
        console.log("Result Computer Wins ")
    }

    rl.close()
})
