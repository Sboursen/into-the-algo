export default function combinationSum(
  candidates: number[],
  target: number,
): number[][] {
  const combinationList: number[][] = [];

  const findCombinations = (
    sum: number,
    index: number,
    subset: number[],
  ): null => {
    if (sum > target || index >= candidates.length) return null;

    if (sum === target) {
      combinationList.push([...subset]);
      return null;
    }
    const currentNumber = candidates[index];
    findCombinations(sum, index + 1, subset);

    findCombinations(sum + currentNumber, index, [...subset, currentNumber]);
    return null;
  };

  findCombinations(0, 0, []);

  return combinationList;
}
