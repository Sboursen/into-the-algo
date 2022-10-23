export default function removeElement(nums: number[], val: number): number {
  let k = nums.length;
  let i = 0;

  while (i < k) {
    if (nums[i] === val) {
      [nums[i], nums[k - 1]] = [nums[k - 1], nums[i]];
      k -= 1;
    } else {
      i += 1;
    }
  }

  return k;
}
