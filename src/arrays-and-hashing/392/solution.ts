export default function isSubsequence(s: string, t: string): boolean {
  let sIndex = 0;
  let tIndex = 0;

  for (; tIndex < t.length; tIndex += 1) {
    if (s[sIndex] === t[tIndex]) sIndex += 1;
  }

  return sIndex === s.length;
}
