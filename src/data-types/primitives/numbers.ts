
function differentFormats() {
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

differentFormats();

