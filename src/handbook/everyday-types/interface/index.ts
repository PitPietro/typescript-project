interface PersonInterface {
    firstName: string,
    lastName: string,
    age: number
}

function printPersonWithInterface(person: PersonInterface) {
    console.log(`${person.firstName} ${person.lastName} is ${person.age} years old.`);
}

printPersonWithInterface({firstName: "Mike", lastName: "Popper", age: 45});

// extend an interface

interface Animal {
    name: string
}

interface Cat extends Animal {
    longHaired: boolean
}

function getCat() {
    const myCat: Cat = {name: "Bobby", longHaired:true};
    return myCat;
}

function printCat(myCat: Cat) {
    console.log(`Is ${myCat.name} long haired? ${myCat.longHaired}`)
}

const myPet = getCat()

printCat(myPet);

myPet.name
myPet.longHaired


// cd src/handbook/everyday-types/interface
// tsc index.ts && node index.js
