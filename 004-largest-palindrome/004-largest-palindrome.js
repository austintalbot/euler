export function largestPalindromeProduct(n) {

    // this is the largest number created from n number of digits that read the same from to back.
    var largest_number = Math.pow(10, n) - 1; // bracket for the largest number with n digits 
    var smallest_number = Math.pow(10, (n - 1)); //bracket for the smallest number with n digits
    var largest_palindrome = 0;

    console.log(`largest number=${largest_number} smallest number=${smallest_number}`)


    var largest_palindrome = 0;
    var smallest_number = 0;
    var largest_number = 99;

    for (var outer = largest_number; outer > smallest_number; outer--) {
        for (var inner = outer; inner > smallest_number; inner--) {

            var product = outer * inner;
            console.log(`product = ${product}`)

            if (is_palindrome(product) && product > largest_palindrome) {
                largest_palindrome = product;
                if (inner > smallest_number) {
                    smallest_number = inner;
                }
                break;
            }
        }
    }
    console.log(`largest palindrome for n= ${n} = ${largest_palindrome}`)
    return largest_palindrome;
}

function is_palindrome(initial_number) {
    // this function returns true if the number is a palindrome
    let reversed_number = initial_number.toString().split("").reverse().join("");
    return initial_number.toString() === reversed_number;
}
