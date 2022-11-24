import removeElements from './solution';
import ListNode from '../utils/list-node';

describe('removeElements', () => {
  it('should return the reversed string', () => {
    const input = transformArrayToLinkedList([1, 2, 6, 3, 4, 5, 6]);
    const val = 6;

    const result = removeElements(input, val);

    expect(result?.toString()).toEqual(`1, 2, 3, 4, 5`);
  });

  it('should return null', () => {
    const input = null;
    const val = 6;

    const result = removeElements(input, val);

    expect(result).toBeNull();
  });

  it('should return the reversed string', () => {
    const input = transformArrayToLinkedList([7, 7, 7, 7, 7]);
    const val = 7;

    const result = removeElements(input, val);

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
