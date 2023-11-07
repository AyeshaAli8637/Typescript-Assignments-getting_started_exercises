
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// Write three versions of this program, making sure each message is printed for the appropriate color alien.

//• If the alien is green, print a message that the player earned 5 points.
let alien_color: string = 'green';
console.log("\n For green color");


if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points for shooting down the green alien!");
} else if (alien_color === 'yellow') {
  console.log("Congratulations! You just earned 10 points for shooting down the yellow alien!");
} else if (alien_color === 'red') {
  console.log("Congratulations! You just earned 15 points for shooting down the red alien!");
}

// • If the alien is yellow, print a message that the player earned 10 points.

console.log("\n For yellow color");

let alien_color1 = 'yellow';
if (alien_color1 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting down the green alien!");
  } else if (alien_color1 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting down the yellow alien!");
  } else if (alien_color1 === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting down the red alien!");
  }

// • If the alien is red, print a message that the player earned 15 points.

let alien_color2: string = 'red';
console.log("\n For red color");

if (alien_color2 === 'green') {
  console.log("Congratulations! You just earned 5 points for shooting down the green alien!");
} else if (alien_color2 === 'yellow') {
  console.log("Congratulations! You just earned 10 points for shooting down the yellow alien!");
} else if (alien_color2 === 'red') {
  console.log("Congratulations! You just earned 15 points for shooting down the red alien!");
}
