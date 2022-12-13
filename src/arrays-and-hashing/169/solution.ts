export default function majorityElement(nums: number[]): number {
  if (nums.length === 1) return nums[0];

  const countMap: { [key: number]: number } = {};

  let mostRepeated = nums[0];
  let maxCount = 1;
  countMap[mostRepeated] = 1;

  for (let i = 1; i < nums.length; i++) {
    const elem = nums[i];

    if (countMap[elem] === undefined) {
      countMap[elem] += 1;
    } else {
      countMap[elem] = 1;
    }

    if (countMap[elem] > maxCount) {
      maxCount = countMap[elem];
      mostRepeated = nums[i];
    }
  }

  return mostRepeated;
}
