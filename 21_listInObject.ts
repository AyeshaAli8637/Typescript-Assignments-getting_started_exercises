
// Then think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items.

// Creating an array of city objects
const cities: { name: string, country: string, population: number, landmark: string }[] = [
    {
      name: "New York City",
      country: "United States",
      population: 8538000,
      landmark: "Statue of Liberty"
    },
    {
      name: "Paris",
      country: "France",
      population: 2141000,
      landmark: "Eiffel Tower"
    },
    {
      name: "Tokyo",
      country: "Japan",
      population: 13929286,
      landmark: "Tokyo Skytree"
    }
  ];
  
  // Printing information about the cities
  console.log("Information about cities:");
  cities.forEach(city => {
    console.log(`City: ${city.name}`);
    console.log(`Country: ${city.country}`);
    console.log(`Population: ${city.population}`);
    console.log(`Landmark: ${city.landmark}`);
    console.log("\n");
  });