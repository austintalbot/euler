export function largestPrimeFactor(number) {

  console.log(`largestPrimeFactor: ${number} sqrt of number: ${Math.sqrt(number)}`);
  let maxPrime = 0;
  // 1. While number is even, the largest prime factor is 2.
  while (number % 2 == 0) {
      maxPrime = 2;
      // 2. Divide by 2. by using bitwise operators. This is the same as (number /= 2).
      number >>= 1;
  }
  // 3. starting at 3 and incrementing by 2, check if the number is prime.
  // use Math.sqrt to find the square root of the number because it limits the iterations and
  // doesn't cause issues because the square root will still allow you to find the largest prime because it is a number times itself.
  for (let currentOddNumber = 3; currentOddNumber <= Math.sqrt(number); currentOddNumber += 2) {
      while (number % currentOddNumber == 0) {
          // 4. Divide by oddNumber. If the remainder is 0, the largest prime factor is oddNumber.
          // set the maxPrime to the currentOddNumber until the remainder is 0
          maxPrime = currentOddNumber;
          // 5. Divide by oddNumber.          
          number /= currentOddNumber;
      }
  }
  console.log(`maxPrime: ${maxPrime} number: ${number}  is number greater than 2 ? ${number > 2}`);
  return number > 2 ? number : maxPrime;
}




/* Naieve solution
function largestPrimeFactor(number) {

   let factors = determinePrimeFactors(number);
  let largestFactor = factors[factors.length - 1];
  return largestFactor;
}

largestPrimeFactor(13195);

function determinePrimeFactors(number) {
  let factors = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      if (isPrime(i)) {
        factors.push(i);
        console.log(` found factor ${i}`);
      }
    }
  }
  return factors;
}

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
*/