import isPalindrome from './solution';
import ListNode from '../utils/list-node';

describe('validPalindrome', () => {
  it('should return true if it is a Palindrome', () => {
    const input = transformArrayToLinkedList([1, 2, 2, 1]);

    const result = isPalindrome(input);

    expect(result).toBeTruthy();
  });

  it('should return false if it is not a Palindrome', () => {
    const input = transformArrayToLinkedList([1, 2]);

    const result = isPalindrome(input);

    expect(result).toBeFalsy();
  });
});

const transformArrayToLinkedList = (input: number[]): ListNode | null => {
  if (input.length === 0) return null;

  const head = new ListNode(input[0]);
  let current = head;

  for (let i = 1; i < input.length; i += 1) {
    const val = input[i];
    const newNode = new ListNode(val);
    current.next = newNode;
    current = current.next;
  }

  return head;
};
