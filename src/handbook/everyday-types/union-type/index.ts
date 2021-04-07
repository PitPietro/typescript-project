function printAge(age: number | string) {
    if(typeof age === "string") {
        // 'age' is of type 'string'
        console.log(age.toLowerCase());
    } else {
        // 'age' is of type 'number'
        console.log(age);
    }
}

function welcomeColleagues(mates: string[] | string) {
    if(Array.isArray(mates)) {
        // 'mates' is 'string[]'
        console.log(`Hello to:\n-\t${mates.join("\n-\t")}`);
    } else {
        // 'mates' is 'string'
        console.log(`Hello to ${mates}`);
    }
}

/*
Return type is inferred as number[] | string

'first' and 'last' are optional parameters.
if you do not specify 'first', it will be set to 0
if you do not specify 'last', it will be set to 5
*/
function sliceFromRange(element: number[] | string, first: number = 0, last: number = 5) {
    console.log(element.slice(first, last));
}

// combine literals info unions
function printDivPosition(id: number, position: "up" | "center" | "down") {
    console.log(`ID = ${id} | position = ${position}`);
}

console.log('\n~~~ printAge()');
printAge("45");
printAge(23);

console.log('\n~~~ welcomeColleagues()');
welcomeColleagues("Mark");
welcomeColleagues(["Mark", "Anne", "John", "Natalie"]);

console.log('\n~~~ sliceFromRange()');
sliceFromRange([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 7);
sliceFromRange("Goodbye");

console.log('\n~~~ printDivPosition()');
printDivPosition(23, "up");
// printDivPosition(44, "hello");
// Argument of type '"hello"' is not assignable to parameter of type '"up" | "center" | "down"'.
// cd src/handbook/everyday-types/union-type-type
// tsc index.ts && node index.js
