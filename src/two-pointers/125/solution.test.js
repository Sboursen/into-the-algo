import isPalindrome from './solution';

describe('isPalindrome', () => {
  it(
    'should return true if the string input is a palindrome',
    () => {
      const input = 'A man, a plan, a canal: Panama';

      const result = isPalindrome(input);

      expect(result).toBeTruthy();
    },
  );

  it(
    'should return false if the string input is NOT a palindrome',
    () => {
      const input = 'race a car';

      const result = isPalindrome(input);

      expect(result).toBeFalsy();
    },
  );

  it(
    'should return true if the string input is a palindrome',
    () => {
      const input = ' ';

      const result = isPalindrome(input);

      expect(result).toBeTruthy();
    },
  );
});
