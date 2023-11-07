//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich
//The function should have one parameter that collects as many items as the function call provides, 
//and it should print a summary of the sandwich that is being ordered. 

function orderSandwich(...ingredients: string[]): void {
    console.log("Sandwich order:");
    if (ingredients.length === 0) {
        console.log("No ingredients selected.");
    } else {
        console.log("Ingredients: " + ingredients.join(", "));
    }
    console.log("\n");
}

// Call the function three times, using a different number of arguments each time.
orderSandwich("Turkey", "Lettuce", "Tomato");
orderSandwich("Ham", "Cheese");
orderSandwich("Chicken", "Bacon", "Avocado", "Mayonnaise");
