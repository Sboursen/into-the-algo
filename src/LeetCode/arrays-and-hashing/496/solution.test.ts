import nextGreaterElement from './solution';

describe('nextGreaterElement', () => {
  it('should return the first greater element that is to the right of x in the same array', () => {
    const nums1 = [4, 1, 2];
    const nums2 = [1, 3, 4, 2];
    const expected = [-1, 3, -1];

    const result = nextGreaterElement(nums1, nums2);

    expect(result).toEqual(expected);
  });

  it('should return the first greater element that is to the right of x in the same array', () => {
    const nums1 = [2, 4];
    const nums2 = [1, 2, 3, 4];
    const expected = [3, -1];

    const result = nextGreaterElement(nums1, nums2);

    expect(result).toEqual(expected);
  });
});
