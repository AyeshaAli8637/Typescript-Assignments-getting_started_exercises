//Favorite Fruit: Make a array of your favorite fruits, 
//and then write a series of independent if statements that check for certain fruits in your array.

//Make a array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits: string[] = ['apple', 'banana', 'mango'];

//Write five if statements. Each should check whether a certain kind of fruit is in your array. 
//If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if (favorite_fruits.indexOf('apple')) {
  console.log("You really like apples!");
}

if (favorite_fruits.indexOf('banana')) {
  console.log("You really like bananas!");
}

if (favorite_fruits.indexOf('orange')) {
  console.log("You really like oranges!");
}

if (favorite_fruits.indexOf('mango')) {
  console.log("You really like mangoes!");
}

if (favorite_fruits.indexOf('kiwi')) {
  console.log("You really like kiwis!");
}
