export function sumSquareDifference(n) {
    let sum = 0;
    let sumOfSquares = 0;

    for (let i = 1; i <= n; i++) {
        // Calculate the sum of the first n natural numbers
        sum += i;
        // Calculate the sum of the squares of the first n natural numbers
        sumOfSquares += i * i;
    }


    // Calculate the square of the sum
    const squareOfSum = sum * sum;

    // Calculate the difference between the sum of the squares and the square of the sum
    const difference = squareOfSum - sumOfSquares;

    return difference;
}

