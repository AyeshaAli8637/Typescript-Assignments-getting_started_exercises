// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name.

interface Car {
    manufacturer: string;
    model: string;
    color?: string;
    features?: string[];
}

function createCar(manufacturer: string, model: string, options: { color?: string, features?: string[] }): Car {
    const car: Car = {
        manufacturer,
        model,
        ...options
    };
    return car;
}
//It should then accept an arbitrary number of keyword arguments. 
//Call the function with the required information and two other name-value pairs,
// such as a color or an optional feature. 
const car1: Car = createCar("Toyota", "Camry", { color: "Blue", features: ["Navigation", "Sunroof"] });
const car2: Car = createCar("Ford", "Mustang", { color: "Red" });
const car3: Car = createCar("Honda", "Civic", { features: ["Backup Camera", "Bluetooth"] });

//Print the Object that’s returned to make sure all the information was stored correctly.

console.log(car1);
console.log(car2);
console.log(car3);
