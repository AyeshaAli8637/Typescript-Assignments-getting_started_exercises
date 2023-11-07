//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
let userNames: string[] = []; // Empty array

if (userNames.length === 0) {
    //If the list is empty, print the message We need to find some users!
    console.log("We need to find some users!");
} else {
  for (let userName of userNames) {
    if (userName === 'admin') {
      console.log(`Hello ${userName}, would you like to see a status report?`);
    } else {
      console.log(`Hello ${userName}, thank you for logging in again.`);
    }
  }
}