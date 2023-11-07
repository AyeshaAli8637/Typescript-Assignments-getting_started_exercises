// Seeing the World: Think of at least five places in the world you’d like to visit.
// Store the locations in a array. Make sure the array is not in alphabetical order.

let places = ["Canada", "Turkey", "Mecca", "Japan", "Germany"]

// Print your array in its original order.

console.log("\n Original order:");
console.log(places);

// Print your array in alphabetical order without modifying the actual list.

console.log("\n Alphabetical Order");
let alph_places = [...places].sort()
console.log(alph_places); 

//Show that your array is still in its original order by printing it.

console.log("\n Original order:");
console.log(places);

//Print your array in reverse alphabetical order without changing the order of the original list.

console.log("\n Reversed aplhabetical order:");
let reversedAlphPlaces = [...alph_places].reverse()
console.log(reversedAlphPlaces);

//Show that your array is still in its original order by printing it again.

console.log("\n Original order:");
console.log(places);

//Reverse the order of your list. Print the array to show that its order has changed.

console.log("\n Reversed order:");
let reverse_places = [...places].reverse()
console.log(reverse_places);

//Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log("\n Again reversing to show it's back to Original order:");
let again_reverse_places = [...reverse_places].reverse()
console.log(again_reverse_places);

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

console.log("\n Alphabetical Order");
let alphabeticalOrder = places.sort()
console.log(alphabeticalOrder);

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

console.log("\n Reversed aplhabetical order:");
let reverseOrder = alphabeticalOrder.reverse()
console.log(reverseOrder);
