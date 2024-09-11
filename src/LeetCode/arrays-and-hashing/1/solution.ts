export default function twoSum(nums: number[], target: number): number[] {
  const complementMap: { [key: number]: number } = {};

  let sol: [number, number];

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];

    if (complementMap[num] !== undefined) {
      sol = [complementMap[num], i];
      break;
    }

    complementMap[target - num] = i;
  }

  return sol;
}
