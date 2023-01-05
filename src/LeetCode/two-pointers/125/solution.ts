export default function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  const isAlphanumeric = (char: string): boolean => /[0-9a-z]/i.test(char);

  while (left < right) {
    const leftChar = s[left].toUpperCase();
    const rightChar = s[right].toUpperCase();
    if (isAlphanumeric(leftChar) && isAlphanumeric(rightChar)) {
      if (leftChar !== rightChar) return false;
      left += 1;
      right -= 1;
    }

    if (!isAlphanumeric(leftChar)) {
      left += 1;
    }

    if (!isAlphanumeric(rightChar)) {
      right -= 1;
    }
  }

  return true;
}
