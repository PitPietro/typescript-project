function printPerson(person: {firstName: string, lastName: string, age: number}) {
    console.log(`${person.firstName} ${person.lastName} is ${person.age} years old.`);
}

function printCoordinates(point: {x: number, y: number, z?: number}) {
    if(point.z === undefined) {
        console.log(`(${point.x}; ${point.y})`);
    } else {
        console.log(`(${point.x}; ${point.y}; ${point.z})`);
    }
}

printPerson( {firstName: "Mike", lastName: "Popper", age: 45});

console.log('\nP=(x; y; z)')
printCoordinates({x: 2, y: 5});
printCoordinates({x: 1, y: 4, z: 6});

// cd src/handbook/everyday-types/object-type
// tsc index.ts && node index.js
