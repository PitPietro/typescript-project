// reference: https://www.tutorialsteacher.com/typescript/typescript-number

export function differentFormats() {
    let integer: number = 123;
    let floatingPoint: number = 123.78;
    let hexadecimal: number = 0x37CF;
    let octal: number = 0o377;
    let binary: number = 0b111001;

    console.log(`int:\t\t${integer}`);
    console.log(`float:\t\t${floatingPoint}`);
    console.log(`hexadecimal:\t${hexadecimal}`);
    console.log(`octal:\t\t${octal}`);
    console.log(`binary:\t\t${binary}`);
}

/*
numObj.toExponential([fractionDigits])

Returns a string containing a number represented in exponential notation.
'fractionDigits' is the number of digits after the decimal point. Must be in the range 0 (if not inserted) - 20, inclusive.
*/
export function exponentialNumber(num: number, fractionDigits?: number): string {
    return num.toExponential(fractionDigits);
}

/*
numObj.toFixed([digits])

The toFixed method returns the fixed-point notation of a number in string format.
This function has one optional argument, an integer specifying the number of digits after the decimal point. It returns a string representation of the formatted number.
*/
export function fixedNumber(num: number, fractionDigits?: number): string {
    return num.toFixed(fractionDigits);
}
