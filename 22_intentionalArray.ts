 
//   Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. 
//   Change an index in one of your programs to produce an index error. 
//   Make sure you correct the error before closing the program.


  // Creating an array of mountain names
  const Mountains: string[] = [
    "Mount Everest",
    "K2",
    "Kangchenjunga",
    "Matterhorn",
    "Aconcagua"
  ];
  
  // Intentionally accessing an out-of-bounds index to cause an error
  const indexError = mountains[10]; // This will result in an index error
  
  // This line will not be executed due to the error above
  console.log("This won't be reached due to the error above.");
  
  // Correcting the error by using a valid index
  const validIndex = mountains[2]; // This is a valid index
  
  // Printing the corrected result
  console.log("Valid index example:", validIndex);
  