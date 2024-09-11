export default function containsDuplicate(nums: number[]): boolean {
  let uniqueNumbers = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (uniqueNumbers.has(nums[i])) {
      return true;
    }

    uniqueNumbers.add(nums[i]);
  }

  return false;
}
