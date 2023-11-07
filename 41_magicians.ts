//Magicians: Make a array of magician’s names. 

const magicianNames: string[] = ["David Copperfield", "Houdini", "Penn Jillette", "Teller", "Dynamo"];

//Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}