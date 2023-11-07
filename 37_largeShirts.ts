// Large Shirts: 
// Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message.

function make_Shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`Creating a ${size} shirt with the message: '${message}'`);
}

// Creating shirts with default values
make_Shirt(); // Large shirt with default message
make_Shirt("medium"); // Medium shirt with default message

// Creating a custom shirt
make_Shirt("small", "Coding is fun!");