import { isPalindrome } from '../../utils/numbersUtils';
import { isPrime } from '../../utils/numbersUtils';

describe('isPalindrome', () => {
  it('should return true for single digit numbers', () => {
    expect(isPalindrome(0)).toBe(true);
    expect(isPalindrome(1)).toBe(true);
    expect(isPalindrome(9)).toBe(true);
  });

  it('should return true for palindromic numbers', () => {
    expect(isPalindrome(121)).toBe(true);
    expect(isPalindrome(12321)).toBe(true);
    expect(isPalindrome(1234321)).toBe(true);
  });

  it('should return false for non-palindromic numbers', () => {
    expect(isPalindrome(123)).toBe(false);
    expect(isPalindrome(1234)).toBe(false);
    expect(isPalindrome(123456)).toBe(false);
  });
});

describe('isPrime', () => {
  it('should return false for numbers less than or equal to 1', () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
  });

  it('should return true for prime numbers', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(11)).toBe(true);
  });

  it('should return false for non-prime numbers', () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(8)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(10)).toBe(false);
  });
});
