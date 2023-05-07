const randomNumber = Math.floor(Math.random() * (10-1+1) + 1);

const userGuess = prompt("guess number");

if (userGuess === randomNumber) {
 console.log("congratulation")
}