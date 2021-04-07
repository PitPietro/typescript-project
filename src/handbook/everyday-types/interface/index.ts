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

interface AnimalInterface {
    name: string
}

interface CatInterface extends AnimalInterface {
    longHaired: boolean
}

function getCatInterface() {
    const myCat: CatInterface = {name: "Bobby", longHaired:true};
    return myCat;
}

function printCatInterface(myCat: CatInterface) {
    console.log(`Is ${myCat.name} long haired? ${myCat.longHaired}`)
}

const myPet = getCatInterface()

printCatInterface(myPet);


// cd src/handbook/everyday-types/interface
// tsc index.ts && node index.js
