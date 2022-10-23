export default function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const stMap: { [key: string]: string } = {};
  const tsMap: { [key: string]: string } = {};

  for (let i = 0; i < s.length; i += 1) {
    const sChar = s[i];
    const tChar = t[i];
    if (stMap[sChar] === undefined) {
      if (tsMap[tChar] !== undefined) return false;
      stMap[sChar] = tChar;
      tsMap[tChar] = sChar;
    } else if (stMap[sChar] !== tChar) return false;
  }

  return true;
}
