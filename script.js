const displayPoints = document.querySelector(".points-container");

const displayAttempts = document.querySelector(".attempts-container");

const buttons = document.querySelectorAll(".buttons");
// console.log(buttons);

const showText = document.querySelector("#showText");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const userGuess = e.target.id;
    const showPressdBtn = showText;
    showPressdBtn.innerHTML = userGuess;
  });
});

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
