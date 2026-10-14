import { divide } from "../src/calculator.js";

describe("divide function", () => {
  test("should divide two positive numbers correctly", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("should throw TypeError for string input", () => {
    expect(() => divide("10", 2)).toThrow(TypeError);
  });

  test("should throw TypeError when second argument is a string", () => {
    expect(() => divide(10, "2")).toThrow(TypeError);
  });

  test("should throw TypeError when argument is NaN", () => {
    expect(() => divide(NaN, 2)).toThrow(TypeError);
  });

  test("should throw RangeError when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow(RangeError);
  });
});
