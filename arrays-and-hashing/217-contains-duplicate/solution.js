export default function containsDuplicate(nums) {
  const set = new Set();
  for (let number of nums) {
    if (set.has(number)) return true;
    set.add(number);
  }
  return false;
};
