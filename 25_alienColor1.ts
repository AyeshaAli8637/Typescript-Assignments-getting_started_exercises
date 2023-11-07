// Alien Colors #1: Imagine an alien was just shot down in a game. 
// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.


//version of this program that passes the if test

let alien_color: string = 'green';
console.log("\n Program that passes the if test:");

if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points for shooting down the green alien!");
}

//version of this program that fails the if test

let alien_color1 = 'yellow';
console.log("\n Program that fails the if test (The version that fails will have no output.):");

if (alien_color1 === 'green') {
  console.log("Congratulations! You just earned 5 points for shooting down the green alien!");
}
