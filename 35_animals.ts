//Animals: Think of at least three different animals that have a common characteristic.
//Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
const animals: string[] = ["dog", "cat", "rabbit"];

console.log("Animal names:");
for (const animal of animals) {
    console.log(animal);
}

// Printing statements about each animal
console.log("\nAnimal statements:");
for (const animal of animals) {
    if (animal === "dog") {
        console.log(`A ${animal} would make a great pet.`);
    } else if (animal === "cat") {
        console.log(`A ${animal} can be an independent companion.`);
    } else if (animal === "rabbit") {
        console.log(`A ${animal} is a cute and low-maintenance pet.`);
    }
}

// Printing the common characteristic of these animals
console.log("\nCommon characteristic:");
console.log("Any of these animals would make a great pet!");
