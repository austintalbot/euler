import { fiboEvenSum } from "./002-fibo-even-sum";

test("fiboEvenSum(1) should return 0", () => {
  expect(fiboEvenSum(1)).toBe(1);
});

test("fiboEvenSum(10) should return 10", () => {
  expect(fiboEvenSum(10)).toBe(10);
});

test("fiboEvenSum(34) should return 44", () => {
  expect(fiboEvenSum(34)).toBe(44);
});

test("fiboEvenSum(60) should return 44", () => {
  expect(fiboEvenSum(60)).toBe(44);
});

//fiboEvenSum(100000) should return 60696.
//fiboEvenSum(4000000) should return 4613732.

test("fiboEvenSum(100000) should return 60696", () => {
  expect(fiboEvenSum(100000)).toBe(60696);
});

test("fiboEvenSum(4000000) should return 4613732", () => {
  expect(fiboEvenSum(4000000)).toBe(4613732);
})