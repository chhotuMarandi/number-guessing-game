// Selctors

const displayPoints = document.querySelector(".points-container");

const displayAttempts = document.querySelector(".attempts-container");

let attemptesBox = document.querySelector(".attempts-container");

const pointsBox = document.querySelector(".points-container");

const reset = document.querySelector("#reset");

const buttons = document.querySelectorAll(".buttons");

const showText = document.querySelector("#showText");

const randomNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);

showText.innerHTML = "guess number";

let isRunning = true;

//Traverse through All Buttons

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const userGuess = e.target.id;

    const correctNumber = randomNumber;
    const userGuessedNumber = Number(userGuess);

    console.log(userGuess);

    showText.innerHTML = userGuessedNumber;

    setTimeout(() => {
      guessNumber(correctNumber, userGuessedNumber);
    }, 1000);
  });
});

//Guess Number Function , Points and Attempts Feature

let attempts = 0;
let winnigPoints = 10;

const guessNumber = (correctNumber, userGuessedNumber) => {
  attempts++;
  const earnPoints = winnigPoints - attempts;

  if (correctNumber < userGuessedNumber) {
    showText.innerHTML = "number is less than entered number";
  } else if (correctNumber > userGuessedNumber) {
    showText.innerHTML = "number is greater than entered number ";
  } else {
    showText.innerHTML = "congratulation you are correct";
    attemptesBox.innerHTML = attempts;
    pointsBox.innerHTML = earnPoints;
  }
};
