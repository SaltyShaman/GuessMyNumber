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

let score = 20; //standard score is 20
lblScore.textContent = score;

const lblHighscore = document.querySelector(".highscore");
let highScore = 0;
lblHighscore.textContent = highScore;

function playAgain() {
    score = 20;
    lblScore.textContent = score; // reset score to 20

    if (score > highScore) {
        highScore = score;
        lblHighscore.textContent = highScore;
    }
}

pbAgain.addEventListener("click", playAgain);

function generateRandomNumber() {
    randomNumber = Math.trunc(Math.random() * 20) + 1; // +1 is in case it hits 0
    console.log("Generated number:", randomNumber); // Debugging log
}

// Call the function once to generate a number when the page loads
generateRandomNumber();

pbAgain.addEventListener("click", generateRandomNumber);

function guessNumber() {
    if (!inpGuess.value.trim() || isNaN(inpGuess.value)) {
        lblMessage.textContent = "Please enter a number between 1 and 20";
        inpGuess.value = "";
        return;
    }

    const guess = Number(inpGuess.value); // Convert input value to a number

    console.log("User guessed:", guess);

    if (guess === randomNumber) {
        lblMessage.textContent = "You won!";
        highScore++;
        lblHighscore.textContent = highScore;
    } else if (guess > randomNumber) {
        lblMessage.textContent = "Too high!";
        score--;
        lblScore.textContent = score;

    } else {
        lblMessage.textContent = "Too low!"; //else statement works as guess < randomNumber
        score--;
        lblScore.textContent = score;
    }
}

pbGuess.addEventListener("click", guessNumber);
