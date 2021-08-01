const { expect, test } = require('@jest/globals');
import { sum,capitalize,reverseString,calculator,caesar } from './functions';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test("capitalize(all caps input)", () => {
    expect(capitalize("HELLO")).toBe("Hello");
})

test("capitalize(all lowercase input)",() => {
  expect(capitalize("hello")).toBe("Hello");
})

test("reverseString",() => {
  expect(reverseString("Hello")).toBe("olleH");
})

test("calculator.add", () => {
  expect(calculator.add(1,2)).toBe(3);
})

test("calculator.subtract", () => {
  expect(calculator.subtract(5,1)).toBe(4);
})

test("calculator.divide", () => {
  expect(calculator.divide(10,5)).toBe(2);
})

test("calcualtor.multiply", () => {
  expect(calculator.multiply(10,5)).toBe(50);
})

test("caesar", () => {
  expect(caesar("Defend the East wall of the castleZz!",1))
  .toBe('Efgfoe uif Fbtu xbmm pg uif dbtumfAa!')
})



