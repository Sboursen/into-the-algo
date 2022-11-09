export default function combine(n: number, k: number): number[][] {
  const combinations: number[][] = [];
  const arr: number[] = [];
  findCombinations(1);
  return combinations;

  function findCombinations(index: number): void {
    if (arr.length === k) {
      combinations.push([...arr]);
      return;
    }

    for (let i = index; i <= n; i++) {
      arr.push(i);
      findCombinations(i + 1);
      arr.pop();
    }
  }
}
