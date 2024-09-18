export default function search2DMatrix(matrix: number[][], target: number): boolean {
  const row = binarySearch(matrix.map((row) => row[0]), target);
  if (row > matrix.length - 1 || row < 0) return false;

  const col = binarySearch(matrix[row], target);

  if (col > matrix[row].length - 1 || col < 0 || matrix[row][col] !== target) return false;

  return true;
}

function binarySearch(arr: number[], target: number) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return left - 1;
}
