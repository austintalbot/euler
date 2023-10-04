/*

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.

*/

export function fiboEvenSum(n) {
  let n1 = 0,
    n2 = 1,
    nextTerm,
    i;
  let sum = 0;
  if (n == 0) return n1;
  if (n == 1) return n2;
  for (i = 2; i < n; i++) {
    // if the next term is greater than n, break the loop
    if (nextTerm > n) 
        break;

    // sum only the even terms
    if (nextTerm % 2 === 0) 
        sum += nextTerm;

    nextTerm = n1 + n2;

    n1 = n2;
    n2 = nextTerm;
  }
  return sum;
}
