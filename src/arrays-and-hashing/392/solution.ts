export default function isSubsequence(s: string, t: string): boolean {
  let sIndex: number = 0;
  let tIndex: number = 0;

  for (; tIndex < t.length; tIndex += 1) {
    if (s[sIndex] === t[tIndex]) sIndex += 1;
  }

  return sIndex === s.length;
}
