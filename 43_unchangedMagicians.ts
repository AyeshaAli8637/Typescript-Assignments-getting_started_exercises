//Unchanged Magicians: Start with your work from Exercise 40. 
//Call the function make_great() with a copy of the array of magicians’ names. 
//Because the original array will be unchanged, return the new array and store it in a separate array. 
//Call show_magicians() with each array to show that you have one array of the original names 
//and one array with the Great added to each magician’s name.

const magicianNames: string[] = ["David Copperfield", "Houdini", "Penn Jillette", "Teller", "Dynamo"];

function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
        greatMagicians.push("the Great " + magician);
    }
    return greatMagicians;
}

console.log("Original Magicians:");
showMagicians(magicianNames);
console.log("\n");

console.log("Great Magicians:");
const greatMagicians: string[] = makeGreat([...magicianNames]);
showMagicians(greatMagicians);
console.log("\n");

console.log("Unchanged Magicians:");
const unchangedMagicians: string[] = makeGreat([...magicianNames]);
showMagicians(magicianNames);
console.log("\n");
showMagicians(unchangedMagicians);
