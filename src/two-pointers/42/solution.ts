export default function trap(height: number[]): number {
  let left = 0;
  let right = 1;
  let rainAmount = 0;
  let current = 0;

  while (right < height.length) {
    if (height[right] >= height[left]) {
      rainAmount += current;
      current = 0;
      left = right;
      right += 1;
    } else {
      current += height[left] - height[right];
      right += 1;
    }
  }

  const last = left;
  if (last < height.length - 1 && height[last] > height[height.length - 1]) {
    right = height.length - 1;
    left = right - 1;
    current = 0;

    while (left >= last) {
      if (height[left] >= height[right]) {
        rainAmount += current;
        current = 0;
        right = left;
        left -= 1;
      } else {
        current += height[right] - height[left];
        left -= 1;
      }
    }
  }

  return rainAmount;
}
