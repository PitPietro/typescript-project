export function continueLoop(): void {
    let i: number;

    for(i = 0; i < 10; i++) {
        if (i === 5) {
            continue;
        }
        console.log(i);
    }
}