// Gussing Game
// Guss a number from 1 to 5 times
// Generate a random number matches random number ;then show message won else lost
// run the game for five times
// show the the result number of wons and lost

for (var i = 1; i <= 5; i++) {
  const gussingNumber = parseInt(prompt("Enter a number from 1 to 5 : "));
  const randomNumber = Math.floor(Math.random() * 5) + 1;

  if (gussingNumber === randomNumber) {
    console.log("You have won");
  } else {
    console.log("You have lost. Random number was " + randomNumber);
  }
};
