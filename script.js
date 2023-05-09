const displayPoints = document.querySelector(".points-container");

const displayAttempts = document.querySelector(".attempts-container");

const mainDisplay = document.querySelector(".mainDisplay");

console.log((mainDisplay.innerHTML = "heio"));

console.log((displayAttempts.textContent = "hi"));
console.log((displayPoints.textContent = "hi"));

let userGuess;
let attempts = 0;
let winningPoints = 10;

const correctNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);

const guessNumber = () => {
  do {
    userGuess = prompt("guess number");
    // console.log(correctNumber);
    // console.log(userGuess);
    if (correctNumber < userGuess) {
      alert("number is less than entered number");
    } else if (correctNumber > userGuess) {
      alert("number is greater than entered number ");
    } else {
      alert("congratulation you are correct");
    }

    attempts++;
  } while (userGuess != correctNumber);

  alert(`you take ${attempts} attempts`);
  const guessPoints = winningPoints - attempts;
  alert(`Your Points - ${guessPoints}`);
};

// guessNumber();
