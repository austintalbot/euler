import { primeSummation } from "./010-summation-of-primes.js";



test("primeSummation(17) should return 41", () => {
    expect(primeSummation(17)).toBe(41);
});

test("primeSummation(2001) should return 277050", () => {
    let results = primeSummation(2001);
    expect(results).toBe(277050);

});


test("primeSummation(140759) should return 873608362", () => {
    expect(primeSummation(140759)).toBe(873608362);
});