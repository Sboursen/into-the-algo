import ListNode from '../utils/list-node';

export default function isPalindrome(head: ListNode | null): boolean {
  const stack = [];
  if (head === null) return true;

  let currentNode: ListNode | null = head;
  let middleNode: ListNode | null = head;
  let counter = 0;

  while (currentNode !== null) {
    if (counter % 2 === 0) {
      stack.push(middleNode?.val);
      middleNode = middleNode?.next || null;
    }
    counter++;
    currentNode = currentNode.next;
  }

  if (counter % 2 === 1) {
    stack.pop();
  }

  while (middleNode) {
    const val = stack.pop();
    if (middleNode.val !== val) return false;
    middleNode = middleNode.next;
  }

  return true;
}
