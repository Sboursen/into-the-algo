export default function maxSubArraySum(nums: number[]): number {
  let maxSum = -Infinity;
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    currentSum = Math.max(n, currentSum + n);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
