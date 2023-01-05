import reverseList from './solution';
import ListNode from '../utils/list-node';

describe('validPalindrome', () => {

  it('should return the reversed string', () => {
    const input = transformArrayToLinkedList([1, 2, 3, 4, 5]);

    const result = reverseList(input);

    expect(result?.toString()).toEqual(`5, 4, 3, 2, 1`);
  });

  it('should return null', () => {
    const input = null;

    const result = reverseList(input);

    expect(result).toBeNull();
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
