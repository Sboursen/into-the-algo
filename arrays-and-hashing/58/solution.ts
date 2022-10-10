export default function lengthOfLastWord(s: string): number {
  let length = 0;
  let index = s.length - 1;

  while (s[index] === ' ' && index > 0) index -= 1;

  while (s[index] !== ' ' && index >= 0) {
    length += 1;
    index -= 1;
  }

  return length;
}
