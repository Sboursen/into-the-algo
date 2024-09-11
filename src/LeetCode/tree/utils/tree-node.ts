export default class TreeNode {
  public val: number;
  public left: TreeNode | null;
  public right: TreeNode | null;

  constructor(
    val: number,
    left?: TreeNode | null | undefined,
    right?: TreeNode | null | undefined,
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left ?? null;
    this.right = right ?? null;
  }

  public toString() {
    let stringRepresentation = '';
    const queue: (TreeNode | null)[] = [];

    while (queue.length > 0) {
      const currentNode = queue.shift();
      if (currentNode === undefined) return stringRepresentation;

      if (currentNode === null) {
        stringRepresentation += `${currentNode}, `;
      } else {
        stringRepresentation += `${currentNode.val}, `;
        queue.push(currentNode.left);
        queue.push(currentNode.right);
      }
    }

    return stringRepresentation;
  }
}
