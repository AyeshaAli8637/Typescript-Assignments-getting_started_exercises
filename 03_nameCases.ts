// Storing person's name in a variable:

let personName = "Alexander";

// Printing name in lowercase:

console.log(personName.toLowerCase());

// Printing name in uppercase:

console.log(personName.toUpperCase());

// Printing name in titlecase:

let person2 = "alexAnder graHam beLl";

let titlecasedName = person2.split(" ") // name in array
.map(
    word => word
    .charAt(0)   // character at 0 index
    .toUpperCase()  // will be uppercase
     + word.substr(1).toLowerCase() // characters starting from index 1 will be lowercased and added with uppercases letters
     ).join(" "); // will return string from string[]

console.log(titlecasedName);


