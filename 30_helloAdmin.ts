// Hello Admin: Make a array of five or more usernames, including the name 'admin'. 

let usernames: string[] = ['Admin', 'Alice', 'Bob', 'John', 'Sarah'];

//Loop through the array, and print a greeting to each user:

for (let username of usernames) {
 
 // If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

    if (username === 'Admin') {
     //If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
        console.log(`Hello ${username}, would you like to see a status report?`);
  } 
  else {
    //Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}
