const displayPoints = document.querySelector(".points-container");

const displayAttempts = document.querySelector(".attempts-container");

const attemptes = document.querySelector(".attempts-container");

console.log(attemptes);

const buttons = document.querySelectorAll(".buttons");
// console.log(buttons);

const showText = document.querySelector("#showText");

const randomNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);

showText.innerHTML = "guess number";

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const userGuess = e.target.id;

    const correctNumber = randomNumber;
    const userGuessedNumber = Number(userGuess);

    showText.innerHTML = userGuessedNumber;

    setTimeout(() => {
      guessNumber(correctNumber, userGuessedNumber);
    }, 2000);
  });
});

const guessNumber = (correctNumber, userGuessedNumber) => {
  let attempts = 0;
  const userEntered = userGuessedNumber;

  do {
    if (correctNumber < userGuessedNumber) {
      showText.innerHTML = "number is less than entered number";
    } else if (correctNumber > userGuessedNumber) {
      showText.innerHTML = "number is greater than entered number ";
    } else {
      showText.innerHTML = "congratulation you are correct";
    }

    attempts++;
  } while (userGuess != correctNumber);
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
