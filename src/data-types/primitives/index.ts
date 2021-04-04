import {differentFormats, exponentialNumber, fixedNumber} from "./numbers";

let i: number;
let nExp = 150985;
let nFix = 15.0985;


differentFormats();

console.log(exponentialNumber(nExp));

for(i = 1; i < 5; i++) {
    console.log(exponentialNumber(nExp, i));
}

console.log(fixedNumber(nFix));

for(i = 1; i < 5; i++) {
    console.log(fixedNumber(nFix, i));
}
