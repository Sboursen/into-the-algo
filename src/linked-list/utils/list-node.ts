export default class ListNode {
  public val: number;
  public next: ListNode | null;

  constructor(val: number, next?: ListNode | null | undefined) {
    this.val = val === undefined ? 0 : val;
    this.next = next ?? null
  }

  public toString() {
    let stringRepresentation = `${this.val}`;
    if (this.next === null) return stringRepresentation;

    let currentNode: ListNode | null = this.next;

    while (currentNode) {
      stringRepresentation += `, ${currentNode.val}`
      currentNode = currentNode.next;
    }

    return stringRepresentation;
  }
}
