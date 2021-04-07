type PersonType = {
    firstName: string,
    lastName: string,
    age: number
}

function printPersonWithType(person: PersonType) {
    console.log(`${person.firstName} ${person.lastName} is ${person.age} years old.`);
}

type Age = number | string;

function printAgeWithType(age: Age) {
    if(typeof age === "string") {
        // 'age' is of type 'string'
        console.log(age.toLowerCase());
    } else {
        // 'age' is of type 'number'
        console.log(age);
    }
}

// extend a Type

type AnimalType = {
    name: string
}

type CatType = AnimalType & {
    longHaired: boolean
}

function getCat() {
    const myCat: CatType = {name: "Bobby", longHaired:true};
    return myCat;
}

function printCat(myCat: CatType) {
    console.log(`Is ${myCat.name} long haired? ${myCat.longHaired}`)
}

const myP = getCat();

printCat(myP);

printPersonWithType( {firstName: "Mike", lastName: "Popper", age: 45});

printAgeWithType("45");
printAgeWithType(23);

// cd src/handbook/everyday-types/type-alias
// tsc index.ts && node index.js
