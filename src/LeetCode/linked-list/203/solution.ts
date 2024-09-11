import ListNode from '../utils/list-node';

export default function removeElements(
  head: ListNode | null,
  val: number,
): ListNode | null {
  while (head && head.val === val) {
    head = head.next;
  }

  let current = head;

  while (current) {
    while (current.next && current.next.val === val) {
      current.next = current.next.next;
    }

    current = current.next;
  }

  return head;
}
