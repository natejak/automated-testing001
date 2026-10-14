import { divide } from "../src/calculator.js";

describe("divide function", () => {

  test("should divide two positive numbers correctly", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("should throw TypeError for string input", () => {
    expect(() => divide("10", 2)).toThrow(TypeError);
  });

});