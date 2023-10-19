import { calculator, capitalize, reverseString } from "./app.js";

test("capitalizes the first letter of the word.", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("reverses the string provided.", () => {
  expect(reverseString("hello")).toBe("olleh")
});

test("adds 1 + 2 to equal 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("subtracts 1 from 2 to equal 1", () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

test("subtracts 3 from 1 to equal -2", () => {
  expect(calculator.subtract(1, 3)).toBe(-2);
});

test("multiplies 3 and 2 to equal 6", () => {
  expect(calculator.multiply(3, 2)).toBe(6);
});

test("divides 6 by 2 to equal 3", () => {
  expect(calculator.divide(6, 2)).toBe(3);
});
