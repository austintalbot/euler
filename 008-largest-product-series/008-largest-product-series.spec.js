import { largestProductinaSeries } from "./008-largest-product-series.js" ;



test("largestProductinaSeries(4) should return 5832", () => {
    expect(largestProductinaSeries(4)).toBe(5832);
});

test("largestProductinaSeries(13) should return 23514624000", () => {
    expect(largestProductinaSeries(13)).toBe(23514624000);
});

