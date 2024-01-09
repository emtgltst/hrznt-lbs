/**
 * Checks if a given number is a palindrome.
 *
 * @param number - The number to be checked.
 * @return Returns true if the number is a palindrome, false otherwise.
 */
export function isPalindrome(number: number): boolean {
    const str = number.toString();
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[i] !== str[j]) {
            return false;
        }
    }
    return true;
}


/**
 * Checks if a given number is prime.
 *
 * @param number - The number to check for primality.
 * @return Returns true if the number is prime, false otherwise.
 */
export function isPrime(number: number): boolean {
    if (number <= 1) {
        return false;
    }
    if (number <= 3) {
        return true;
    }
    if (number % 2 === 0) {
        return false;
    }
    for (let i = 3; i * i <= number; i += 2) {
        if (number % i === 0) {
            return false;
        }
    }
    return true; 
}
