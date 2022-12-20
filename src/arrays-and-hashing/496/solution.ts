export default function nextGreaterElement(
  nums1: number[],
  nums2: number[],
): number[] {
  const ans: number[] = [];

  for (let i = 0; i < nums1.length; i++) {
    let greaterExists = false;
    for (let j = nums2.indexOf(nums1[i]); j < nums2.length; j++) {
      if (nums1[i] < nums2[j]) {
        ans.push(nums2[j]);
        greaterExists = true;
        break;
      }
    }
    if (!greaterExists) {
      ans.push(-1);
    }
  }
  return ans;
}
