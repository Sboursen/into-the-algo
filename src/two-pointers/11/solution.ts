export default function maxArea(height: number[]): number {

  const getArea = (left: number, right: number): number => {
    return Math.min(height[left], height[right]) * (right - left);
  }
  
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  
  while (left < right) {
    maxArea = Math.max(maxArea, getArea(left, right))
    
    if (height[left] > height[right]) {
      right--;
    } else if (height[left] < height[right]) {
      left++;
    } else {
      right--;
      left++;
    }
  }
  return maxArea;
}
