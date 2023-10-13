/* Here is the explanation for the code above:
1. The function nthPrime(n) takes a parameter n and returns the nth prime number. 
2. The variable numberOfPrimeNumbersFound is used to keep track of how many prime numbers have been found so far. 
3. The variable potentialPrimeNumber is the number that is being checked to see if it is prime. 
4. The while loop keeps going until the nth prime number has been found. 
5. The condition of the while loop is that the numberOfPrimeNumbersFound is less than n. 
6. Inside the while loop is an if statement that checks if the variable potentialPrimeNumber is prime. 
7. If it is prime, then the variable numberOfPrimeNumbersFound is incremented by 1. 
8. The variable potentialPrimeNumber is then incremented by 1. 
9. If the variable potentialPrimeNumber is not prime, then the variable potentialPrimeNumber is incremented by 1.
10. The while loop keeps going until the nth prime number has been found. 
11. The nth prime number is returned. */

export function nthPrime(n) {

    let numberOfPrimeNumbersFound = 0;
    let potentialPrimeNumber = 2;
    while (numberOfPrimeNumbersFound < n) {
        if (isPrime(potentialPrimeNumber)) {
            numberOfPrimeNumbersFound++;
        }
        potentialPrimeNumber++;
    }
    return potentialPrimeNumber - 1;
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