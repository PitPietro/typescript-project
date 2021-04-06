
const cities = ["London", "Paris", "Rome"];

console.log("\n~ contextual typing for function");
cities.forEach(function (city) {
    console.log(city.toUpperCase());
});

console.log("\n~ contextual typing for arrow function");
cities.forEach((city) => {
    console.log(city.toUpperCase());
});

// cd src/handbook/everyday-types/functions
// tsc anonymous.ts && node anonymous.js
