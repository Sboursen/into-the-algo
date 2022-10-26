import ListNode from '../utils/list-node';

export default function reverseList(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  
  let prevNode = head;
  let currentNode = head.next;
  head.next = null;
  
  while (currentNode) {
    const nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }
  
  return prevNode;
}
