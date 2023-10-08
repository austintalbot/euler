import { largestPalindromeProduct } from "./004-largest-palindrome.js";

test("largestPalindrome(2) should return 9009", () => {
  expect(largestPalindromeProduct(2)).toBe(9009);
});

test("largestPalindrome(3) should return 906609", () => {
  expect(largestPalindromeProduct(3)).toBe(906609);
});
 