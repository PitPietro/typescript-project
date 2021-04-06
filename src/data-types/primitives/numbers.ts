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
toExponential(fractionDigits?: number): string;

Returns a string containing a number represented in exponential notation.
'fractionDigits' is the number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
*/
export function exponentialNumber(num: number, fractionDigits?: number): string {
    return num.toExponential(fractionDigits);
}

/*
toFixed(fractionDigits?: number): string;

Returns a string representing a number in fixed-point notation.
'fractionDigits' is the number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
*/
export function fixedNumber(num: number, fractionDigits?: number): string {
    return num.toFixed(fractionDigits);
}

/*
toLocaleString(locales?: string | string[], options?: Intl.NumberFormatOptions): string;

Converts a number to a string by using the current or specified locale.

'locales' – A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
'options' – An object that contains one or more properties that specify comparison options.

 */
export function toLocaleStringFromNumber(num: Date, locales?: string | string[]): string {
    return num.toLocaleString(locales);
}

/*
toString(radix?: number): string;

Returns a string representation of an object.
'radix' – Specifies a radix for converting numeric values to strings. This value is only used for numbers.

Note: The radix value should be between 2 and 36.
 */
export function toStringNumber(num: number, radix?: number): string {
    return num.toString(radix);
}
