//Conditional Tests: Write a series of conditional tests.
//Print a statement describing each test and your prediction for the results of each test. 

let car: string = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota');

console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');

console.log("Is car.length > 5? I predict False.");
console.log(car.length > 5);

console.log("Is car.length >= 6? I predict True.");
console.log(car.length >= 6);

console.log("Is car.charAt(2) === 'b'? I predict True.");
console.log(car.charAt(2) === 'b');

console.log("Is car.charAt(0) !== 's'? I predict False.");
console.log(car.charAt(0) !== 's');

console.log("Is car.toLowerCase() === 'SUBARU'? I predict True.");
console.log(car.toLowerCase() === 'subaru');
