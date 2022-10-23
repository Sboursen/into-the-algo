export default function maxSubArraySum(array) {
  let bestSum = 0;
  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    sum = Math.max(array[i], sum + array[i]);
    bestSum = Math.max(bestSum, sum);
  }
  return bestSum;
}
