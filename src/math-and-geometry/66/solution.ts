export default function plusOne(digits: number[]) {
  let rest = 1;
  const result = new Array(digits.length);

  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = rest + digits[i];

    if (sum >= 10) {
      result[i] = sum - 10;
    } else {
      result[i] = sum;
    }

    rest = Math.floor(sum / 10);
  }

  if (rest > 0) return [rest, ...result];
  else return result;
}
