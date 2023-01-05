export default function nextPermutation(nums: number[]): number[] {
  if (nums.length <= 1) return nums;
  if (nums.length === 2) {
    [nums[0], nums[1]] = [nums[1], nums[0]];

    return nums;
  }

  const n = nums.length;

  let i = n - 1;

  while (i > 0) {
    if (nums[i - 1] < nums[i]) {
      const pivot = i - 1;

      let greater = n;
      for (let j = n - 1; j > pivot; j--) {
        if (nums[j] > nums[pivot]) {
          greater = j;
          break;
        }
      }

      [nums[greater], nums[pivot]] = [nums[pivot], nums[greater]];

      let left = pivot + 1;
      let right = n - 1;
      while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
      }
      return nums;
    }

    i--;
  }

  return nums.reverse();
}
