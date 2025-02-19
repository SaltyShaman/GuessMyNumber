console.log("Script.js er med");

const lblMessage = document.querySelector(".message");
console.log(lblMessage);
console.log(lblMessage.textContent);

const lblNumber = document.querySelector(".number");
console.log(lblNumber);

const lblScore = document.querySelector(".score");
console.log(lblScore);

const inpGuess = document.querySelector(".guess");
console.log(inpGuess);

const pbAgain = document.querySelector(".again");
console.log(pbAgain);

const pbGuess = document.querySelector(".check");

let randomNumber = 0; // 0 is to reset it when changing

function generateRandomNumber() {
    randomNumber = Math.trunc(Math.random() * 20) + 1; // +1 is in case it hits 0
    console.log("Generated number:", randomNumber); // Debugging log
}

// Call the function once to generate a number when the page loads
generateRandomNumber();

pbAgain.addEventListener("click", generateRandomNumber);

function guessNumber() {
    if (!inpGuess.value.trim() || isNaN(inpGuess.value)) {
        lblMessage.textContent = "Please enter a valid number!";
        return;
    }

    const guess = Number(inpGuess.value); // Convert input value to a number

    console.log("User guessed:", guess);

    if (guess === randomNumber) {
        lblMessage.textContent = "You won!";
    } else if (guess > randomNumber) {
        lblMessage.textContent = "Too high!";
    } else {
        lblMessage.textContent = "Too low!"; //else statement works as guess < randomNumber
    }
}

pbGuess.addEventListener("click", guessNumber);
