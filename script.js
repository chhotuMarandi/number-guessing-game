const randomNumber = Math.floor(Math.random() * (10-1+1) + 1);
let userGuess;

console.log(randomNumber)
do {
  userGuess = prompt("guess number");
  console.log(randomNumber);
  console.log(userGuess)
} while (userGuess != randomNumber)


// console.log(randomNumber)