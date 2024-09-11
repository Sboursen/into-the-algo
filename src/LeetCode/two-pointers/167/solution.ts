export default function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;
  let result: number[] = [];
  while (left < right) {
    const firstNumber = numbers[left];
    const secondNumber = numbers[right];

    if (firstNumber + secondNumber === target) {
      result = [left + 1, right + 1];
      break;
    } else if (firstNumber + secondNumber > target) right -= 1;
    else left += 1;
  }

  return result;
}
