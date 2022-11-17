export default function canPlaceFlowers(
  flowerbed: number[],
  n: number,
): boolean {
  let zeroCount = 1;
  let maxCount = 0;

  for (let i = 0; i < flowerbed.length; i += 1) {
    if (flowerbed[i] === 1) {
      maxCount += getCount(zeroCount);
      zeroCount = 0;
    } else {
      zeroCount += 1;
    }
  }

  maxCount += getCount(zeroCount + 1);

  return maxCount >= n;
}

function getCount(n: number): number {
  if (n === 0) return 0;
  if (n % 2 === 0) {
    return Math.floor((n - 1) / 2);
  } else {
    return Math.floor(n / 2);
  }
}
