export default function twoSum(nums: number[], target: number): number[] {
  const complementMap: { [key: number]: number } = {};

  let solution: [number, number];

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];

    if (complementMap[num] !== undefined) {
      solution = [complementMap[num], i];
      break;
    }

    complementMap[target - num] = i;
  }

  return solution;
}
