function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const leftChar = s[left];
    const rightChar = s[right];

    if (leftChar !== rightChar) return false;
    left += 1;
    right -= 1;
  }

  return true;
}

export default function validPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const leftChar = s[left];
    const rightChar = s[right];

    if (leftChar !== rightChar) {
      return (
        isPalindrome(s.slice(left, right)) ||
        isPalindrome(s.slice(left + 1, right + 1))
      );
    }

    left++;
    right--;
  }

  return true;
}
