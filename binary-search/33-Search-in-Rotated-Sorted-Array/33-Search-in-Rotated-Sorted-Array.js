const findIndexUsingBS = function (arr, target) {
  // returns the index of target in a sorted array arr or -1 if target doesn't exist.

  if (arr.length === 0) return -1;

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    if (arr[mid] > target) right = mid - 1;
  }

  return -1;
};

const findIndexOfMaxUsingBS = function (arr) {
  // returns the index of max in a sorted array arr or -1 if target doesn't exist.

  if (arr.length === 0) return -1;
  const n = arr.length - 1;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] > arr[mid + 1]) return mid;
    if (arr[mid] <= arr[n]) right = mid - 1;
    if (arr[mid] >= arr[0]) left = mid + 1;

    console.log(left, mid, right);
  }

  return right;
};

const search = function (nums, target) {
  const n = nums.length - 1;

  if (nums[0] < nums[n]) return findIndexUsingBS(nums, target);

  const indexOfMax = findIndexOfMaxUsingBS(nums);
  const targetCandidate1 = findIndexUsingBS(
    nums.slice(0, indexOfMax + 1),
    target,
  );
  const targetCandidate2 = findIndexUsingBS(nums.slice(indexOfMax + 1), target);

  let result;
  if (targetCandidate1 != -1) result = targetCandidate1;
  else if (targetCandidate2 != -1) result = indexOfMax + targetCandidate2;
  else result = -1;

  return result;
};

export default search;
export { findIndexOfMaxUsingBS, findIndexUsingBS };
