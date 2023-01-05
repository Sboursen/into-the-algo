export default function replaceElements(arr: number[]): number[] {
  let currentMax = -1;

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    const element = arr[i];
    if (element > currentMax) {
      arr[i] = currentMax;
      currentMax = element;
    } else {
      arr[i] = currentMax;
    }
  }

  return arr;
}
