// Something to come 

// Variables
var botChoice = getChoice();
console.log(botChoice);
var userChoice;

// Declare controls/buttons (numbering follows order)
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");
const resultOutput = document.getElementById("result-output");


// Button click listeners
rock.addEventListener("click", function () {
    userChoice = 1;
    evaluate();
    console.log(userChoice, botChoice);
});
paper.addEventListener("click", function () {
    userChoice = 2;
    evaluate();
    console.log(userChoice, botChoice);
});

scissor.addEventListener("click", function () {
    userChoice = 3;
    evaluate();
    console.log(userChoice, botChoice);
});
lizard.addEventListener("click", function () {
    userChoice = 4;
    evaluate();
    console.log(userChoice, botChoice);
});
spock.addEventListener("click", function () {
    userChoice = 5;
    evaluate();
    console.log(userChoice, botChoice);
});

// Evaluates the choices of both
function evaluate() {
    botChoice = getChoice();

    if (userChoice === botChoice) {
        resultOutput.textContent = "It is a tie!";
    } else if (userChoice === 1 && botChoice === 4) {
        resultOutput.textContent = "You win!";
    } else if (userChoice === 2 && (botChoice === 1 || botChoice === 5)) {
        resultOutput.textContent = "You win!";
    } else if (userChoice === 3 && (botChoice === 2 || botChoice === 4)) {
        resultOutput.textContent = "You win!";
    } else if (userChoice === 4 && (botChoice === 2 || botChoice === 5)) {
        resultOutput.textContent = "You win!";
    } else if (userChoice === 5 && (botChoice === 1 || botChoice === 3)) {
        resultOutput.textContent = "You win!";
    } else {
        resultOutput.textContent = "Bot wins!";
    }
}

// Get a random between 1 and 5
function getChoice() {
    return Math.floor(Math.random() * 5 + 1);
}