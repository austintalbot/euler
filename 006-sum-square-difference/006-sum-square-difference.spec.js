import { sumSquareDifference } from "./006-sum-square-difference.js";



test("sumSquareDifference(10) should return 2640", () => {
    expect(sumSquareDifference(10)).toBe(2640);
});

test("sumSquareDifference(20) should return 41230", () => {
    expect(sumSquareDifference(20)).toBe(41230);
});

test("sumSquareDifference(100) should return 25164150", () => {
    expect(sumSquareDifference(100)).toBe(25164150);
});
