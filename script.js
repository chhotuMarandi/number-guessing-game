const correctNumber = Math.floor(Math.random() * (10-1+1) + 1);
let userGuess;
let attempts = 0;

// console.log(correctNumber)

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

  alert(attempts + "attempts");

}

guessNumber();
// console.log(randomNumber)