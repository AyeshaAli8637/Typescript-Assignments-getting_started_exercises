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

console.log("Hey guys, I've got a bigger dinner table!");

Guest.unshift("Mashaim")

Guest.splice(2 ,0, "Hajra")

Guest.push("Kiswa")

console.log(`Hey ${Guest[0]}, would you like to come to dinner?`);
console.log(`Hey ${Guest[1]}, would you like to come to dinner?`);
console.log(`Hey ${Guest[2]}, would you like to come to dinner?`);
console.log(`Hey ${Guest[3]}, would you like to come to dinner?`);
console.log(`Hey ${Guest[4]}, would you like to come to dinner?`);
console.log(`Hey ${Guest[5]}, would you like to come to dinner?`);


//Shrinking Guest List: 
//You just found out that your new dinner table won’t arrive in time for the dinner, 
//and you have space for only two guests.

// Start with your program from Exercise 16. 
// Add a new line that prints a message saying that you can invite only two people for dinner.

console.log("Sorry guys, we can only invite two people to dinner.");

// Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

console.log(`Sorry ${Guest[5]}, there is no room at the table.`);
Guest.pop()
console.log(`Sorry ${Guest[4]}, there is no room at the table.`);
Guest.pop()
console.log(`Sorry ${Guest[3]}, there is no room at the table.`);
Guest.pop()
console.log(`Sorry ${Guest[2]}, there is no room at the table.`);
Guest.pop()

// Print a message to each of the two people still on your list, letting them know they’re still invited.

console.log(`${Guest[0]}, you are invited for dinner at 9 O'clock`);
console.log(`${Guest[1]}, you are invited for dinner at 9 O'clock`);

// Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of your program.

Guest.pop()
Guest.pop()
console.log(Guest);
