export default function sameSumSubarray(nums: number[]): string | number {
  const subArrays: number[][] = [];
  const totalSum = nums.reduce((t, e) => t + e, 0);

  if (totalSum % 2 === 1) return -1;

  const target = totalSum / 2;
  const n = nums.length / 2;

  nums.sort((a, b) => b - a);
  const backtracking = (
    index: number,
    currentSum: number,
    currentSet: number[],
  ): void => {
    if (currentSum === target && currentSet.length === n) {
      subArrays.push(currentSet);
      return;
    }

    if (currentSum > target || currentSet.length > n) {
      return;
    }

    if (index >= 2 * n) return;

    const number = nums[index];
    backtracking(index + 1, currentSum + number, [...currentSet, number]);
    backtracking(index + 1, currentSum, currentSet);
  };

  backtracking(0, 0, []);

  if (subArrays.length < 2) return -1;

  return subArrays.map((arr) => arr.reverse().join(',')).join(',');
}

console.log(sameSumSubarray([1, 2, 3, 4]));
console.log(sameSumSubarray([16, 22, 35, 8, 20, 1, 21, 11]));
