// More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.

// Start with your program from Exercise 15. 

let Guest = ["Areeba", "Ayesha", "Fiza"]
console.log(Guest);

console.log(`Hey ${Guest[0]}, would you like to come to dinner?`);
console.log(`Hey ${Guest[1]}, would you like to come to dinner?`);
console.log(`Hey ${Guest[2]}, would you like to come to dinner?`);

console.log(`Sorry ${Guest[0]} can't make it to dinner.`);

Guest.splice(0, 1)
Guest.unshift("Robahsa")
console.log(Guest);

console.log(`Hey ${Guest[0]}, would you like to come to dinner?`);
console.log(`Hey ${Guest[1]}, would you like to come to dinner?`);
console.log(`Hey ${Guest[2]}, would you like to come to dinner?`);


// Add a print statement to the end of your program informing people that you found a bigger dinner table.

console.log("Hey guys, I've got a bigger dinner table!");

// Add one new guest to the beginning of your array.

Guest.unshift("Mashaim")

// Add one new guest to the middle of your array. 

Guest.splice(2 ,0, "Hajra")

// Use append() to add one new guest to the end of your list.

Guest.push("Kiswa")

// Print a new set of invitation messages, one for each person in your list.

console.log(`Hey ${Guest[0]}, would you like to come to dinner?`);
console.log(`Hey ${Guest[1]}, would you like to come to dinner?`);
console.log(`Hey ${Guest[2]}, would you like to come to dinner?`);
console.log(`Hey ${Guest[3]}, would you like to come to dinner?`);
console.log(`Hey ${Guest[4]}, would you like to come to dinner?`);
console.log(`Hey ${Guest[5]}, would you like to come to dinner?`);