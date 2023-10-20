export function primeSummation(n) {

    let primeNumbers =[];
    for (let index = 2; index < n; index++) {
        if (isPrime(index)) {
            primeNumbers.push(index);
        }
    }
    let sum = primeNumbers.reduce((a,b) => a+b);

    return sum;
}


function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}