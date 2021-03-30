import { add } from "../src/code-signal-challenge/intro/calc";

describe("test calc function", () => {
    const max = 1000;
    const min = max * -1;
    const attempts = 5;
    let i: number;

    for(i = 0; i < attempts; i++) {
        let num1 = Math.floor(Math.random() * (max - min + 1)) + min;
        let num2 = Math.floor(Math.random() * (max - min + 1)) + min;

        it(`return \t ${num1 + num2} \t for \t add(${num1}, ${num2})`, () => {
            expect(add(num1, num2)).toBe(num1 + num2);
        });
    }
  });
