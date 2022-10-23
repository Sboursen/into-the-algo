export default function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 1) return strs[0];

  let prefix = '';
  let i = 0;

  while (i <= 200) {
    for (let j = 1; j < strs.length; j += 1) {
      if (
        strs[j][i] === undefined
        || strs[j - 1][i] === undefined
        || strs[j - 1][i] !== strs[j][i]
      ) {
        return prefix;
      }
    }
    prefix += strs[0][i];
    i += 1;
  }

  return prefix;
}
