const displayPoints = document.querySelector(".points-container");

const displayAttempts = document.querySelector(".attempts-container");

let attemptesBox = document.querySelector(".attempts-container");

const pointsBox = document.querySelector(".points-container");
// console.log((pointsBox.innerHTML = " hi"));

const reset = document.querySelector("#reset");

const buttons = document.querySelectorAll(".buttons");
// console.log(buttons);

const showText = document.querySelector("#showText");

const randomNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);

showText.innerHTML = "guess number";

let isRunning = true;

// let userGuess;
// let userGuessedNumber;

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

// console.log(attempts);
// // let userGuess;
// let attempts = 0;
// let winningPoints = 10;

// const guessNumber = () => {
//   const correctNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);

//   do {
//     userGuess = prompt("guess number");
//     // console.log(correctNumber);
//     // console.log(userGuess);
//     if (correctNumber < userGuess) {
//       mainDisplay.innerHTML = "number is less than entered number";
//     } else if (correctNumber > userGuess) {
//       mainDisplay.innerHTML = "number is greater than entered number ";
//     } else {
//       mainDisplay.innerHTML = "congratulation you are correct";
//     }

//     attempts++;
//   } while (userGuess != correctNumber);

//   alert(`you take ${attempts} attempts`);
//   const guessPoints = winningPoints - attempts;
//   alert(`Your Points - ${guessPoints}`);
// };

// startBtn.addEventListener("click", guessNumber);
// guessNumber();
