//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

//If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
let alien_color: string = 'green';
console.log("\n When color is green");

if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points for shooting down the green alien!");
} else {
  console.log("Congratulations! You just earned 10 points for shooting down an alien of another color!");
}

//If the alien’s color isn’t green, print a statement that the player just earned 10 points.

console.log("\n When color isn't green");
let alien_color1 = 'yellow';

if (alien_color1 === 'green') {
  console.log("Congratulations! You just earned 5 points for shooting down the green alien!");
} else {
  console.log("Congratulations! You just earned 10 points for shooting down an alien of another color!");
}
