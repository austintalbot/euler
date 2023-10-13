import { nthPrime } from "./007-nth-prime.js";



test("nthPrime(6) should return 13", () => {
    expect(nthPrime(6)).toBe(13);
});

test("nthPrime(10) should return 29", () => {
    expect(nthPrime(10)).toBe(29);
});

test("nthPrime(100) should return 541", () => {
    expect(nthPrime(100)).toBe(541);
});


test("nthPrime(1000) should return 7919", () => {
    expect(nthPrime(1000)).toBe(7919);
});


test("nthPrime(10001) should return 104743", () => {
    expect(nthPrime(10001)).toBe(104743);
});
