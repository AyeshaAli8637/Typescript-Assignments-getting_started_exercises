
//More Conditional Tests: You don’t have to limit the number of tests you create to 10.

// Tests for equality and inequality with strings
let fruit: string = 'apple';

console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');

console.log("Is fruit != 'banana'? I predict True.");
console.log(fruit != 'banana');

// Tests using the lower case function
let personName: string = 'John';

console.log("Is personName.toLowerCase() == 'john'? I predict True.");
console.log(personName.toLowerCase() == 'john');

console.log("Is personName.toLowerCase() == 'JOhn'? I predict False.");
console.log(personName.toLowerCase() == 'JOhn');

// Numerical tests
let age: number = 25;

console.log("Is age === 25? I predict True.");
console.log(age === 25);

console.log("Is age !== 30? I predict True.");
console.log(age !== 30);

console.log("Is age > 18? I predict True.");
console.log(age > 18);

console.log("Is age < 21? I predict False.");
console.log(age < 21);

console.log("Is age >= 25? I predict True.");
console.log(age >= 25);

console.log("Is age <= 20? I predict False.");
console.log(age <= 20);

// Tests using "and" and "or" operators
let sunny: boolean = true;
let warm: boolean = false;

console.log("Is sunny and warm? I predict False.");
console.log(sunny && warm);

console.log("Is sunny or warm? I predict True.");
console.log(sunny || warm);

// Test whether an item is in an array
let colors: string[] = ['red', 'blue', 'green'];

console.log("Is 'blue' in colors? I predict True.");
console.log(colors.indexOf('blue') !== -1);

console.log("Is 'yellow' in colors? I predict False.");
console.log(colors.indexOf('yellow') !== -1);

// Test whether an item is not in an array
console.log("Is 'purple' not in colors? I predict True.");
console.log(colors.indexOf('purple') === -1);

console.log("Is 'red' not in colors? I predict False.");
console.log(colors.indexOf('red') === -1);

