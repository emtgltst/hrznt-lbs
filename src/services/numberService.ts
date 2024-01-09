import { isPalindrome, isPrime } from '../utils/numbersUtils';

/**
 * Generates a list of numbers within a range and filters them based on specified features.
 * @param minNumber - The minimum number in the range.
 * @param maxNumber - The maximum number in the range.
 * @param feature - The features to filter the numbers by (e.g. palindrome, prime).
 * @returns An object containing the filtered numbers and the time of execution.
 */
export default function numberFeaturesService(minNumber: number, maxNumber: number, feature: string[]) {
    const startTime = process.hrtime();
    const data = [];

    for (let i = minNumber; i <= maxNumber; i++) {
        let shouldAddNumber = false;

        if (feature.includes('palindrome') && feature.includes('prime')) {
            // Add number only if it's both a palindrome and prime
            shouldAddNumber = isPalindrome(i) && isPrime(i);
        } else if (feature.includes('palindrome')) {
            shouldAddNumber = isPalindrome(i);
        } else {
            shouldAddNumber = isPrime(i);
        }

        if (shouldAddNumber) {
            data.push(i);
        }
    }

    const endTime = process.hrtime(startTime);
    const timeOfExecution = (endTime[0] * 1000 + endTime[1] / 1e6).toFixed(3);

    return { data, timeOfExecution };
}
