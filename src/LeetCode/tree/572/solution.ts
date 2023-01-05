import TreeNode from '../utils/tree-node';

export default function isSubtree(
  root: TreeNode | null,
  subRoot: TreeNode | null,
): boolean {
  const result: TreeNode[] = SubRootsInTree(root, subRoot);

  return result.reduce<boolean>(
    (t, node) => t || isSameTree(node, subRoot),
    false,
  );
}

const isSameTree = (
  subRootCandidate: TreeNode | null,
  subRoot: TreeNode | null,
): boolean => {
  if (subRoot === null) {
    if (subRootCandidate === null) return true;
    else return false;
  } else {
    if (subRootCandidate === null) return false;
    if (subRootCandidate.val !== subRoot.val) return false;
    return (
      isSameTree(subRootCandidate.left, subRoot.left) &&
      isSameTree(subRootCandidate.right, subRoot.right)
    );
  }
};

const SubRootsInTree = (
  root: TreeNode | null,
  subRoot: TreeNode | null,
): TreeNode[] => {
  const result: TreeNode[] = [];
  const stack = [root];

  while (stack.length > 0) {
    const currentNode = stack.pop();
    if (currentNode === undefined || currentNode === null) continue;
    if (currentNode?.val === subRoot?.val) result.push(currentNode);

    if (currentNode.left) stack.push(currentNode.left);
    if (currentNode.right) stack.push(currentNode.right);
  }
  return result;
};
