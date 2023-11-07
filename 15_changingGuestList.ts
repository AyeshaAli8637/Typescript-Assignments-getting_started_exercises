// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.

let Guest = ["Areeba", "Ayesha", "Fiza"]
console.log(Guest);

console.log(`Hey ${Guest[0]}, would you like to come to dinner?`);
console.log(`Hey ${Guest[1]}, would you like to come to dinner?`);
console.log(`Hey ${Guest[2]}, would you like to come to dinner?`);

//Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// Start with your program from Exercise 14. 
// Add a print statement at the end of your program stating the name of the guest who can’t make it.

console.log(`Sorry ${Guest[0]} can't make it to dinner.`);

//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

Guest.splice(0, 1)
Guest.unshift("Robahsa")
console.log(Guest);

//Print a second set of invitation messages, one for each person who is still in your list.

console.log(`Hey ${Guest[0]}, would you like to come to dinner?`);
console.log(`Hey ${Guest[1]}, would you like to come to dinner?`);
console.log(`Hey ${Guest[2]}, would you like to come to dinner?`);