import validPalindrome from './solution';

describe('validPalindrome', () => {
  it('should return true if the string input can be a palindrome by removing at most one character', () => {
    const input = 'mom';

    const result = validPalindrome(input);

    expect(result).toBeTruthy();
  });

  it('should return false if the string input can NOT be a palindrome by removing at most one character', () => {
    const input = 'bro';

    const result = validPalindrome(input);

    expect(result).toBeFalsy();
  });

  it('should return true if the string input can be a palindrome by removing at most one character', () => {
    const input = 'papa';

    const result = validPalindrome(input);

    expect(result).toBeTruthy();
  });
});
