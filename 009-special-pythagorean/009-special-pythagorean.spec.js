import { specialPythagoreanTriplet } from "./009-special-pythagorean.js";



test("specialPythagoreanTriplet(24) should return 480", () => {
    expect(specialPythagoreanTriplet(24)).toBe(480);
});

test("specialPythagoreanTriplet(120) should return 23514624000", () => {
    let results = specialPythagoreanTriplet(120);
    expect(results).toBe(49920);

});


test("specialPythagoreanTriplet(1000) should return 31875000", () => {
    expect(specialPythagoreanTriplet(1000)).toBe(31875000);
});