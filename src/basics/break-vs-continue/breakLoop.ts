export function breakLoop(): void {
    let i: number;

    for(i = 0; i < 10; i++) {
        if (i === 5) {
            break;
        }
        console.log(i);
    }
}

// cd src/basics/break-vs-continue
