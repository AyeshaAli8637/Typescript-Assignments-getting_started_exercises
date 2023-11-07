//Pizzas: Think of at least three kinds of your favorite pizza. 
//Store these pizza names in a array, and then use a for loop to print the name of each pizza.

let favorite_pizzas: string[] = ['Supersupreme', 'Creamy tikka', 'Ranch'];

//Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
//For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
for (let pizza of favorite_pizzas) {
  console.log(`I like ${pizza} pizza.`);
}

//Add a line at the end of your program, outside the for loop, that states how much you like pizza.
console.log("I really love pizza!");

