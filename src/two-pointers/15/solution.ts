export default function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);

  const result: number[][] = [];
  const set: Set<string> = new Set();

  for (let i = 0; i < nums.length - 2; i += 1) {
    const firstNumber = nums[i];

    if (i - 1 >= 0 && firstNumber === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const secondNumber = nums[left];
      const thirdNumber = nums[right];

      if (firstNumber + secondNumber + thirdNumber === 0) {
        if (!set.has([firstNumber, secondNumber, thirdNumber].join(','))) {
          result.push([firstNumber, secondNumber, thirdNumber]);
        }
        set.add([firstNumber, secondNumber, thirdNumber].join(','));
        left += 1;
        right -= 1;
      } else if (firstNumber + secondNumber + thirdNumber > 0) {
        right -= 1;
      } else {
        left += 1;
      }
    }
  }

  return result;
}
