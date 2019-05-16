// Something to come 

// Variables
var botChoice;
var userChoice;
var displayRule = false;
var choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
var choiceRules = [[" crushes ", " crushes "], [" covers ", " disproves "], [" cuts ", " decapitates "], [" eats ", " poisons "], [" vaporizes ", " smashes "]];


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
        displayRuleMessage();
    } else if (userChoice === 1 && (botChoice === 3 || botChoice === 4)) {
        displayWinWinMessage(true);
    } else if (userChoice === 2 && (botChoice === 1 || botChoice === 5)) {
        displayWinWinMessage(true);
    } else if (userChoice === 3 && (botChoice === 2 || botChoice === 4)) {
        displayWinWinMessage(true);
    } else if (userChoice === 4 && (botChoice === 2 || botChoice === 5)) {
        displayWinWinMessage(true);
    } else if (userChoice === 5 && (botChoice === 1 || botChoice === 3)) {
        displayWinWinMessage(true);
    } else {
        displayWinWinMessage(false);
    }
}

// Get a random between 1 and 5
function getChoice() {
    return Math.floor(Math.random() * 5 + 1);
}

function displayWinWinMessage(winWin) {
    resultOutput.textContent = (winWin) ? "You win!" : "Bot wins!";
    displayRuleMessage();
}

function toggleDisplayRule() {
    displayRule = !displayRule;
    displayRuleMessage();
}

// Displays 
function displayRuleMessage() {
    var display = document.getElementById("rule-display");

    if (displayRule && userChoice > 0) {
        var winner;
        var notWinner;
        if (resultOutput.innerText === "You win!") {
            winner = userChoice;
            notWinner = botChoice;
        } else if (resultOutput.innerText === "Bot wins!") {
            winner = botChoice;
            notWinner = userChoice;
        }

        // Make sure it is not tie
        var rule = (userChoice !== botChoice) ? (choices[winner - 1] + choiceRules[winner - 1][(notWinner < 3) ? 0 : 1] + choices[notWinner - 1]) : "...";
        var playerChoice = "<br><small> You: " + choices[userChoice - 1] + " | Bot: " + choices[botChoice - 1] + "</small>";

        display.style.display = "block";
        display.innerHTML = rule + playerChoice;
    } else {
        display.style.display = "none";
    }
}