export default function sortedSquares(nums: number[]): number[] {
  let left = 0;
  let right = nums.length - 1;
  const result: number[] = [];

  while (left <= right) {
    if (nums[left] ** 2 > nums[right] ** 2) {
      result.push(nums[left] ** 2);
      left += 1;
    } else {
      result.push(nums[right] ** 2);
      right -= 1;
    }
  }
  return result.reverse();
}
