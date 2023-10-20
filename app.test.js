import { calculator, capitalize, reverseString, ceaserCipher, analyzeArray } from "./app.js";

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

test("encrypts 'If he had anything confidential to say, he wrote it in cipher, that is, by so changing the order of the letters of the alphabet, that not a word could be made out.' to be 'Pm ol ohk hufaopun jvumpkluaphs av zhf, ol dyval pa pu jpwoly, aoha pz, if zv johunpun aol vykly vm aol slaalyz vm aol hswohila, aoha uva h dvyk jvbsk il thkl vba.'", () => {
  expect(ceaserCipher("If he had anything confidential to say, he wrote it in cipher, that is, by so changing the order of the letters of the alphabet, that not a word could be made out.", 7)).toBe("Pm ol ohk hufaopun jvumpkluaphs av zhf, ol dyval pa pu jpwoly, aoha pz, if zv johunpun aol vykly vm aol slaalyz vm aol hswohila, aoha uva h dvyk jvbsk il thkl vba.")
});

test("analyzes given array [1,8,3,4,2,6] to equal object {average: 4, max: 8, min: 1, length: 6}", () => {
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
