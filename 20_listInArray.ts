
// Think of something you could store in a array. 
// For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like.
// Write a program that creates a list containing these items

const mountains: string[] = [
    "Mount Everest",
    "K2",
    "Kangchenjunga",
    "Matterhorn",
    "Aconcagua"
  ];
  
  // Printing the list of mountains
  console.log("List of mountains:");
  mountains.forEach(mountain => {
    console.log(mountain);
  });