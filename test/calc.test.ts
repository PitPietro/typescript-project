import { add } from "../src/code-signal-challenge/intro/calc";

describe("test calc function", () => {
    it("should return 15 for calc(10,5)", () => {
      expect(add(10, 5)).toBe(15);
    });

    it("should return 5 for calc(2,3)", () => {
      expect(add(2, 3)).toBe(5);
    });
  });
