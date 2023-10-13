/* Here is the explanation for the code above:
1. The idea is that we are going to iterate backwards from n - 1 to 1.
2. For each currentNumber (let's call it x), we will check if result is divisible by x.
3. If it is not divisible, we are going to find the greatest common divisor between result and x, and multiply result by x and divide by the greatest common divisor.
4. If it is divisible, we will continue with the next iteration of the loop.
5. The greatest common divisor is calculated using the Euclidean algorithm. */

export function smallestMult(n) {
    let result = n;
    for (let currentNumber = n - 1; currentNumber >= 1; currentNumber--) {
        let isNotDivisible = result % currentNumber !== 0;
        if (isNotDivisible) {
            let divisor = gcd(result, currentNumber)
            result = result * currentNumber / divisor;
        }
    }
    return result;
}

function gcd(a, remainder) {
    return remainder === 0 ? a : gcd(remainder, a % remainder);
}
